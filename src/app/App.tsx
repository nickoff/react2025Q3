import './App.css';
import { Main } from '../views/Main/Main';
import { Providers } from './Providers/Providers';

const App = () => {
  return (
    <Providers>
      <Main />
    </Providers>
  );
};

export default App;
