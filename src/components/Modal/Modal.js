import React, { useEffect } from 'react';
import s from './Modal.module.css';

export default function Modal({ onCloseModal, imageInModal }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return (
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img
          className={s.ModalImage}
          src={imageInModal.largeImageURL}
          alt={imageInModal.tags}
        />
      </div>
    </div>
  );
}
