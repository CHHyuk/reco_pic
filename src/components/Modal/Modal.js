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
            <p>모달 내용이 여기에 들어갑니다.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;