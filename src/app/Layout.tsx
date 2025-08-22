import { Footer } from '../components/ui/Footer';
import { useAppSelector } from '../store/hooks';
import { ModalSwitchWidget } from '../components/ui/ModalSwitchWidget';
import { selectFormLastIdValue, selectFormSubmissionsValue } from '../store/reducers/formSlice';

export const Layout = () => {
  const formList = useAppSelector(selectFormSubmissionsValue);
  const lastFormId = useAppSelector(selectFormLastIdValue);
  console.log(lastFormId, formList);

  return (
    <div className="text-2xl max-w-7xl h-[100vh] mx-auto flex flex-col">
      <header className="py-9 uppercase font-bold">React2025Q3</header>
      <main className="w-full h-full flex flex-col justify-between">
        <ModalSwitchWidget />
      </main>
      <Footer />
    </div>
  );
};
