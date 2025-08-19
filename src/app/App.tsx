import { useState } from 'react';
import { Modal } from '../components/ui/Modal';

function App() {
  const [isOpenReactHookModal, setIsOpenReactHookModal] = useState<boolean>(false);
  const [isOpenFormUncontrolledModal, setIsOpenFormUncontrolledModal] = useState<boolean>(false);

  const handleReactHookModalToggle = () => {
    setIsOpenReactHookModal(!isOpenReactHookModal);
  };
  const handleFormUncontrolledModalToggle = () => {
    setIsOpenFormUncontrolledModal(!isOpenFormUncontrolledModal);
  };

  return (
    <div className="text-2xl max-w-7xl h-[100vh] mx-auto flex flex-col">
      <header className="py-9 uppercase font-bold">React2025Q3</header>
      <main className="w-full h-full flex justify-between">
        <div className="w-full flex justify-center items-start gap-10 mt-5">
          <button
            onClick={handleReactHookModalToggle}
            className="p-5 min-w-80 uppercase font-bold border-2 border-cyan-800 rounded-md cursor-pointer hover:bg-cyan-800">
            React Hook Form
          </button>
          <button
            onClick={handleFormUncontrolledModalToggle}
            className="p-5 min-w-80 uppercase font-bold border-2 border-red-800 rounded-md cursor-pointer hover:bg-red-800">
            Form uncontrolled
          </button>
        </div>
        <Modal isOpen={isOpenReactHookModal} onClose={handleReactHookModalToggle}>
          This React Hook Form Modal
        </Modal>

        <Modal isOpen={isOpenFormUncontrolledModal} onClose={handleReactHookModalToggle}>
          This React Hook Form Modal
        </Modal>
      </main>
      <footer className="py-9">RS school &copy;2025</footer>
    </div>
  );
}

export default App;
