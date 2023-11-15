import { ModalBase } from './ModalBase';

export const Modal = ({ isOpen, onClose, photo }) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <img src={photo} alt={photo} />
    </ModalBase>
  );
};
