import React, { useState } from 'react';
import { StyledButton } from '../StyledButton';
import { useNavigate } from 'react-router-dom';
import './Mainpage.css';
import Modal from '../Modal/Modal'

const Mainpage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const gameButtonClick = () => {
    navigate('/game');
  };

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="container">
      <div className="backgroundImg"></div>
      <div className="startButton">
        <StyledButton onClick={gameButtonClick} style={{ fontSize: '3rem', paddingLeft: '40px', paddingRight: '40px', opacity: '0.8' }}>
          Start
        </StyledButton>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}/>
      <div className='modalButton' onClick={openModal}>❔</div>
    </div>
  );
};

export default Mainpage;
