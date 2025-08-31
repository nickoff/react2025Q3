import { Suspense } from 'react';
import { Footer } from '../components/ui/Footer';
import { Header } from '../components/ui/Header';
import { FilterProvider } from '../providers/filterContextProvider';
import { Loading } from '../components/ui/Loading';
import React from 'react';

const Spreadsheet = React.lazy(() => import('../components/ui/Spreadsheet'));

function App() {
  return (
    <div className="text-2xl max-w-7xl h-[100vh] mx-auto flex flex-col">
      <Header />
      <main className="w-full h-full flex gap-10 flex-col justify-start">
        <h1 className="font-bold text-3xl text-emerald-300">
          CO<sub>2</sub> and Greenhouse Gas Emissions 🍃
        </h1>
        <FilterProvider>
          <Suspense fallback={<Loading />}>
            <Spreadsheet />
          </Suspense>
        </FilterProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
