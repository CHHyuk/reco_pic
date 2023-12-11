import React from 'react';
import { StyledButton } from '../StyledButton';

const ButtonComponent = ({ onClick, label, icon }) => (
  <StyledButton className={`${label.toLowerCase()}_button`} onClick={onClick}>
    {icon}
  </StyledButton>
);

export default ButtonComponent;
