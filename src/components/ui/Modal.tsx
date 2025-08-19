import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const dialogBodyRef = useRef<HTMLDivElement | null>(null);
  const mouseDownTarget = useRef<EventTarget | null>(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleMouseDown = (event: MouseEvent) => {
    mouseDownTarget.current = event.target;
  };

  const handleMouseUp = (event: MouseEvent) => {
    if (event.target === mouseDownTarget.current && !modalRef.current?.contains(event.target as Node)) {
      handleCloseModal();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

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
  }, [isModalOpen]);

  return isOpen
    ? createPortal(
        <dialog
          className="p-0 border m-auto border-gray-300 relative rounded-xl shadow-md"
          ref={modalRef}
          onKeyDown={handleKeyDown}>
          <div className="px-12 py-10 border-none rounded-2xl" ref={dialogBodyRef}>
            <button className="absolute top-4 right-2 cursor-pointer" onClick={handleCloseModal}>
              CLOSE
            </button>
            {children}
          </div>
        </dialog>,
        document.body
      )
    : null;
};
