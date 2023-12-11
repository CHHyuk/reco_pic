import React from 'react';
import "./TopBar.css";
import { StyledButton } from '../StyledButton';
import { useNavigate } from 'react-router-dom';

export default function TopBar() {
  const navigate = useNavigate();

  const mainButtonClick = () => {
    navigate('/')
  }

  const rankButtonClick = () => {
    navigate('/rank')
  }

  return (
    <topbar className="top-bar">
      <div className="web-title">
        Take the image you want
      </div>
      <div className="navigator">
        <StyledButton onClick={mainButtonClick}>
          Main
        </StyledButton>
        <StyledButton onClick={rankButtonClick}>
          Leaderboard
        </StyledButton>
        <div></div>
      </div>
    </topbar>
  );
}