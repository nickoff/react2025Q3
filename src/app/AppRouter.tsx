import { createBrowserRouter, RouterProvider } from 'react-router';
import { routers } from './routers';

export const AppRouter = () => {
  const router = createBrowserRouter(routers, {});

  return <RouterProvider router={router} />;
};
