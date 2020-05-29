import React, { useEffect } from 'react';
import {
  ModalContainer,
  ModalDialog,
  ModalHeader,
  ModalClose,
  ModalBody,
  ModalContent,
} from './styled';

const Modal = ({ content, onClose, id, modalId }) => {
  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  const correctModal = id === modalId;
  function keydownHandler({ key }) {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  }

  return !correctModal ? null : (
    <ModalContainer onClick={onClose}>
      <ModalDialog onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalClose onClick={onClose}>&times;</ModalClose>
        </ModalHeader>
        <ModalBody>
          <ModalContent>{content}</ModalContent>
        </ModalBody>
      </ModalDialog>
    </ModalContainer>
  );
};

export default Modal;
