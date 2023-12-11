import React from 'react';
import './Modal.css'

export default function Modal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modalContent">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <p>This page was created to use</p>
            <p>popular and preferred images from lorem picsum.</p>
            <p>Click the buttons to rate or skip.</p>
            <p>Rankings can be checked on LeaderBoard.</p>
            <p>-----notice----</p>
            <p>The ranking system is still being implemented.</p>
            <a href="https://github.com/CHHyuk/reco_pic" className="gitButton" target="_blank" rel="noreferrer">go to Github</a>
          </div>
        </div>
      )}
    </>
  );
};