import React, { useState, useEffect, useRef } from 'react';
import { getRandomInt } from '../../utils/RandomFunc';
import { MIN_VALUE, MAX_VALUE } from '../../constants/constants';
import ImageComponent from './ImageComponent';
import UrlComponent from './UrlComponent';
import ButtonComponent from './ButtonComponent';
import NotificationComponent from './NotificationComponent';
import CardSpin from './CardSpin';
import axios from 'axios';
import './GamePage.css';

export default function GamePage() {
  const [randomImageId, setRandomImageId] = useState(getRandomInt(MIN_VALUE, MAX_VALUE));
  const [imageUrl, setImageUrl] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [open, setOpen] = useState(false);
  const [notificationSeverity, setNotificationSeverity] = useState('success');
  const [notificationMessage, setNotificationMessage] = useState('');
  const pickPicRef = useRef(null);

  useEffect(() => {
    const newImageUrl = `https://picsum.photos/id/${randomImageId}/500/500`;
    setImageUrl(newImageUrl);
    setUrlValue(newImageUrl);
  }, [randomImageId]);

  const updateImageUrl = () => {
    setRandomImageId(getRandomInt(MIN_VALUE, MAX_VALUE));
  };

  const increaseScore = async (imageId) => {
    try {
      // 현재 이미지의 점수를 서버에서 가져옵니다. 전체 URL 명시(배포시 삭제)
      const response = await axios.get(`http://localhost:3001/api/score/${imageId}`);
      const currentScore = response.data.score;
  
      // 점수를 1 증가시킵니다.
      const newScore = currentScore + 1;
  
      // 새 점수를 서버에 업데이트합니다. 전체 URL 명시(배포시 삭제)
      await axios.post('http://localhost:3001/api/score', { imageId, newScore });
      setNotificationSeverity('success');
      setNotificationMessage('Score increased!');
      showNotification();

    } catch (error) {
      console.error('Error updating score', error);
    }
  };

  const copyImageUrlToClipboard = () => {
    navigator.clipboard.writeText(imageUrl);
    setNotificationSeverity('success');
    setNotificationMessage('Copy success!');
    showNotification();
  };

  const showNotification = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000); 
  };

  const hideNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="game_container">
      <div className='pick_pic' ref={pickPicRef}>
        <ImageComponent imageUrl={imageUrl} altText="Image loading failed" />
      </div>
      <CardSpin containerRef={pickPicRef} />
      <div className="bottom_box">
        <UrlComponent urlValue={urlValue} />
        <ButtonComponent
          onClick={() => increaseScore(randomImageId)}
          label="rateUp"
          icon="🤍"
          style={{fontSize: '1.5rem'}}
        />
        <ButtonComponent
          onClick={(event) => {
            event.preventDefault();
            copyImageUrlToClipboard();
          }}
          label="Copy"
          icon='Copy'
        />
        <ButtonComponent
          onClick={(event) => {
            event.preventDefault();
            updateImageUrl();
          }}
          label="Refresh"
          icon="Next"
        />
        <NotificationComponent
          open={open}
          onClose={hideNotification}
          severity={notificationSeverity}
          message={notificationMessage}
        />
      </div>
    </div>
  );
}
