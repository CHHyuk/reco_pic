import React from 'react';
import { StyledButton } from '../StyledButton';
import { useNavigate } from 'react-router-dom';
import './Mainpage.css';

const Mainpage = () => {
  const navigate = useNavigate();

  const gameButtonClick = () => {
    navigate('/game');
  };

  return (
    <div className="container">
      <div className="backgroundImg"></div>
      <div className="startButton">
        <StyledButton onClick={gameButtonClick} style={{ fontSize: '3rem', paddingLeft: '40px', paddingRight: '40px', opacity: '0.8' }}>
          Start
        </StyledButton>
      </div>
    </div>
  );
};

export default Mainpage;
