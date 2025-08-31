import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  colorBorderModal?: string;
}

const Modal = memo(function Modal({ isOpen, onClose, children, colorBorderModal }: ModalProps) {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCloseModal = useCallback(() => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  }, [onClose]);

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        setModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleGlobalKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [isModalOpen, onClose]);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  return isModalOpen
    ? createPortal(
        <div
          className="top-0 bottom-0 right-0 left-0 fixed overflow-auto z-10 bg-gray-800/90 flex justify-center"
          ref={overlayRef}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (e.target === overlayRef.current) {
              handleCloseModal();
            }
          }}>
          <div
            className={`py-7 px-12 my-10 relative border-2 h-fit bg-gray-600 rounded-2xl ${colorBorderModal && colorBorderModal} shadow-2xl shadow-black/30`}
            ref={modalRef}>
            <button
              className="absolute top-3 right-3 flex items-center justify-center cursor-pointer group"
              onClick={handleCloseModal}>
              <div className="relative w-7 h-7">
                <span className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gray-400 group-hover:bg-gray-300 rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
                <span className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gray-400 group-hover:bg-gray-300 -rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
              </div>
            </button>
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
});

export default Modal;
