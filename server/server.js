const express = require('express');
const app = express();
require('dotenv').config();
const mysql = require('mysql2');
const PORT = 3001;
const cors = require('cors')

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.use(express.json());
app.use(cors());

app.get('/api/score/:imageId', async (req, res) => {
  const imageId = req.params.imageId;
  pool.query('SELECT score FROM Scores WHERE id = ?', [imageId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.json({ score: results[0].score });
  });
});

app.post('/api/score', async (req, res) => {
  const { imageId, newScore } = req.body;
  pool.query('UPDATE Scores SET score = ? WHERE id = ?', [newScore, imageId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ success: true });
  });
});

app.get('/api/ranking/top20', async (req, res) => {
  pool.query('SELECT * FROM Scores ORDER BY score DESC, id ASC LIMIT 20', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
