import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { Main } from '../views/Main/Main';
import { Layout } from '../views/Layout/Layout';

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<p>Upps</p>}>
        <Route path="/" element={<Main />} errorElement={<p>Upps</p>}></Route>
      </Route>
      <Route path="*" element={<p>Not found</p>} />
    </>
  );
  const router = createBrowserRouter(routers, {});

  return <RouterProvider router={router} />;
};
