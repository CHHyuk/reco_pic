const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors')
const functions = require('firebase-functions');

const pool = mysql.createPool({
  host: 개
  user: 인
  password: 정
  database: 보
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.use(express.json());
app.use(cors())

app.get('/score/:imageId', async (req, res) => {
  const imageId = req.params.imageId;
  pool.query('SELECT score FROM scores WHERE id = ?', [imageId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.json({ score: results[0].score });
  });
});

app.post('/score', async (req, res) => {
  const { imageId, newScore } = req.body;
  pool.query('UPDATE scores SET score = ? WHERE id = ?', [newScore, imageId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ success: true });
  });
});

app.get('/ranking/top20', async (req, res) => {
  pool.query('SELECT * FROM scores ORDER BY score DESC, id ASC LIMIT 20', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  })
})

app.get('/test-db', (req, res) => {
  pool.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
    if (error) {
      return res.status(500).send('Database connection failed: ' + error);
    }
    res.send('Database connection successful. Answer: ' + results[0].solution);
  });
});

exports.api = functions.https.onRequest(app);
module.exports = app;
