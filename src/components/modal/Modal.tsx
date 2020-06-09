import React, { useEffect } from 'react';
import {
  ModalContainer,
  ModalDialog,
  ModalHeader,
  ModalClose,
  ModalBody,
  ModalContent,
} from './styled';

interface ModalProps {
  content: React.ReactNode;
  onClose: () => {};
  id: number;
  modalId: number;
}

const Modal = ({ content, onClose, id, modalId }: ModalProps) => {
  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  const correctModal = id === modalId;
  function keydownHandler({ key }: any) {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  }

  return !correctModal ? null : (
    <ModalContainer onClick={onClose}>
      <ModalDialog
        onClick={(e: any) => e.stopPropagation()}
        data-testid='modal-dialog'
      >
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
