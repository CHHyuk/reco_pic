import React from 'react';
import './Modal.css'

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modalContent">
            <span className="close" onClick={onClose}>
                &times;
            </span>
            <p>---------</p>
            <p>This page was created to use</p>
            <p>popular and preferred images from lorem picsum</p>
            <p>Please press the ♡ button</p>
            <p>to increase your favorability rating</p>
            <p>Rankings can be checked on LeaderBoard</p>
            <p>---------</p>
            <a href="https://github.com/CHHyuk/reco_pic" className="gitButton" target="_blank">go to Github</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;