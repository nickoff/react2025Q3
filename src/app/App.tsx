import { useState } from 'react';
import { Modal } from '../components/ui/Modal';
import { ReactHookForm } from '../components/ui/ReactHookForm';

function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenReactHookModal, setIsOpenReactHookModal] = useState<boolean>(false);
  const [isOpenFormUncontrolledModal, setIsOpenFormUncontrolledModal] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsOpenModal(false);
    setIsOpenReactHookModal(false);
    setIsOpenFormUncontrolledModal(false);
  };

  const handleReactHookModalOpen = () => {
    setIsOpenModal(true);
    setIsOpenReactHookModal(true);
  };
  const handleFormUncontrolledModalToggle = () => {
    setIsOpenModal(true);
    setIsOpenFormUncontrolledModal(true);
  };

  return (
    <div className="text-2xl max-w-7xl h-[100vh] mx-auto flex flex-col">
      <header className="py-9 uppercase font-bold">React2025Q3</header>
      <main className="w-full h-full flex justify-between">
        <div className="w-full flex justify-center items-start gap-10 mt-5">
          <button
            onClick={handleReactHookModalOpen}
            className="p-5 min-w-80 uppercase font-bold border-2 border-cyan-800 rounded-md cursor-pointer hover:bg-cyan-800">
            React Hook Form
          </button>
          <button
            onClick={handleFormUncontrolledModalToggle}
            className="p-5 min-w-80 uppercase font-bold border-2 border-red-800 rounded-md cursor-pointer hover:bg-red-800">
            Form uncontrolled
          </button>
        </div>
        <Modal
          isOpen={isOpenModal}
          onClose={handleModalClose}
          colorBorderModal={
            (isOpenReactHookModal && 'border-cyan-800') || (isOpenFormUncontrolledModal && 'border-red-800') || ''
          }>
          {isOpenReactHookModal && <ReactHookForm />}
          {isOpenFormUncontrolledModal && 'This FormUncontrolled Modal'}
        </Modal>
      </main>
      <footer className="py-9">RS school &copy;2025</footer>
    </div>
  );
}

export default App;
