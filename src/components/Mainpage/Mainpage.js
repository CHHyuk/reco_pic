import React, { useState } from 'react';
import { StyledButton } from '../StyledButton';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import Modal from '../Modal/Modal';

export default function MainPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGameStart = () => navigate('/game');
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className='main_container'>
      <div className={`backgroundImg ${isModalOpen ? 'modalOpen' : ''}`}></div>
      <div className="startButton">
        <StyledButton 
          onClick={handleGameStart} 
          style={{ fontSize: '3rem', padding: '0 40px', opacity: '0.8' }}
        >
          Start
        </StyledButton>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
      <div className='modalButton' onClick={toggleModal}>❔</div>
    </div>
  );
};