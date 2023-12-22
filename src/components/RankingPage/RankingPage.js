import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './RankingPage.css';
import NotificationComponent from '../GamePage/NotificationComponent';

export default function RankingPage() {
  const [rankingData, setRankingData] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [notificationSeverity, setNotificationSeverity] = useState('success');
  const [notificationMessage, setNotificationMessage] = useState('Copy success!');
  const API_BASE_URL = 'https://us-central1-pickyourimages-9bbfd.cloudfunctions.net/api'

  useEffect(() => {
    const fetchRankingData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/ranking/top20`);
        setRankingData(response.data);
      } catch (error) {
        console.log('Error loading ranking data', error);
      }
    };
    fetchRankingData();
  }, []);
  

  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      setSnackbarOpen(true);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false); 
  };


  const handleWheel = (e) => {
    const container = document.querySelector(".ranking_container");
    const containerScrollPosition = container.scrollLeft;

    const scrollSpeedMultiplier = 10;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + (e.deltaY * scrollSpeedMultiplier),
      behavior: 'smooth'
    });
  };

  return (
    <div className="ranking_container" onWheel={handleWheel}>
      {rankingData.map((item, index) => (
        <div key={index} className='rank_img'>
          <img src={`https://picsum.photos/id/${item.id}/500/500`} alt={`Image ${index + 1}`} />
          <div className='rank_info'>
            <p className='rank_title'>Rank: {index + 1}</p>
            <p
              className='rank_url'
              onClick={() => handleCopyUrl(`https://picsum.photos/id/${item.id}/500/500`)}
            >
              URL: {`https://picsum.photos/id/${item.id}/500/500`}
            </p>
            <p className='rank_score'>Score: {item.score}</p>
          </div>
        </div>
      ))}
      <NotificationComponent
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        severity={notificationSeverity}
        message={notificationMessage}
      />
    </div>
  );
}