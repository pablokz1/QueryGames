import React from "react";
import { ModalOverlay, ModalContent, CloseButton } from './ModalStyle'

const Modal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Fechar Modal</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;