import React from 'react';
import "./Topbar.css";
import { StyledButton } from '../StyledButton';

export default function Topbar() {
    return (
      <topbar className="top-bar">
        <div className="web-title">
          WebTitle
        </div>
        <div className="navigator">
          <StyledButton>
             Main
          </StyledButton>
          <StyledButton>
             Ladderboard
          </StyledButton>
        </div>
      </topbar>
    );
  }