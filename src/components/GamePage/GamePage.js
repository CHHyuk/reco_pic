// GamePage.js
import React, { useState, useEffect } from 'react';
import { getRandomInt } from '../../utils/RandomFunc';
import { MIN_VALUE, MAX_VALUE } from '../../constants/constants';
import ImageComponent from './ImageComponent';
import UrlComponent from './UrlComponent';
import ButtonComponent from './ButtonComponent';
import NotificationComponent from './NotificationComponent';
import './GamePage.css';

export default function GamePage() {
  const [randomImageId, setRandomImageId] = useState(getRandomInt(MIN_VALUE, MAX_VALUE));
  const [imageUrl, setImageUrl] = useState(`https://picsum.photos/id/${randomImageId}/500/500`);
  const [urlValue, setUrlValue] = useState(imageUrl);
  const [open, setOpen] = useState(false);
  const [notificationSeverity, setNotificationSeverity] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    setImageUrl(`https://picsum.photos/id/${randomImageId}/500/500`);
    setUrlValue(`https://picsum.photos/id/${randomImageId}/500/500`);
  }, [randomImageId]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(imageUrl);
    setNotificationSeverity('success');
    setNotificationMessage('Copy success!');
    handleClick();
  };

  const handleClick = () => {
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleRefreshClick = () => {
    setRandomImageId(getRandomInt(MIN_VALUE, MAX_VALUE));
  };

  return (
    <div className="game_container">
      <div className='pick_pic'>
        <ImageComponent imageUrl={imageUrl} altText="Image loading failed" />
      </div>
      <div className="bottom_box">
        <UrlComponent urlValue={urlValue} />
        <ButtonComponent
          label="rateUp"
          icon="🤍"
          style={{fontSize: '1.5rem'}}
        />
        <ButtonComponent
          onClick={(event) => {
            event.preventDefault();
            handleCopyClick();
          }}
          label="Copy"
          icon='Copy'
        />
        <ButtonComponent
          onClick={(event) => {
            event.preventDefault();
            handleRefreshClick();
          }}
          label="Refresh"
          icon="Next"
        />
        <NotificationComponent
          open={open}
          onClose={handleClose}
          severity={notificationSeverity}
          message={notificationMessage}
        />
      </div>
    </div>
  );
}
