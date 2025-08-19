import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const mouseDownTarget = useRef<EventTarget | null>(null);

  const handleMouseDown = useCallback((event: MouseEvent) => {
    mouseDownTarget.current = event.target;
  }, []);

  const handleMouseUp = useCallback(
    (event: MouseEvent) => {
      if (event.target === mouseDownTarget.current && !overlayRef.current?.contains(event.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
      } else {
        modalElement.close();
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
      }
    }
  }, [handleMouseDown, handleMouseUp, isModalOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  return isOpen
    ? createPortal(
        <dialog ref={modalRef} onKeyDown={handleKeyDown}>
          <div ref={overlayRef}>
            <button onClick={handleCloseModal}>CLOSE</button>
            {children}
          </div>
        </dialog>,
        document.body
      )
    : null;
};
