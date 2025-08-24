import { Footer } from '../components/ui/Footer';
import { FormSubmissionList } from '../components/ui/FormSubmissionList';
import { ModalSwitchWidget } from '../components/ui/ModalSwitchWidget';

export const Layout = () => {
  return (
    <div className="text-2xl max-w-7xl h-[100vh] mx-auto flex flex-col">
      <header className="py-9 uppercase font-bold">React2025Q3</header>
      <main className="w-full h-full flex flex-col justify-between">
        <ModalSwitchWidget />
        <FormSubmissionList />
      </main>
      <Footer />
    </div>
  );
};
