import React from 'react';
import "./Topbar.css";
import { StyledButton } from '../StyledButton';
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
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
          WebTitle
        </div>
        <div className="navigator">
          <StyledButton onClick={mainButtonClick}>
             Main
          </StyledButton>
          <StyledButton onClick={rankButtonClick}>
             Ladderboard
          </StyledButton>
          <div></div>
        </div>
      </topbar>
    );
  }