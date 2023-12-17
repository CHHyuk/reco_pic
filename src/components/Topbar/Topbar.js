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
    <div className="top-bar">
      <div className="web-title">
        get images you want
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
    </div>
  );
}