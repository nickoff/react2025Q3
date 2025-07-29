import { RouterProvider } from 'react-router';
import { Providers } from './Providers/Providers';
import { router } from './router';

const App = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};

export default App;
