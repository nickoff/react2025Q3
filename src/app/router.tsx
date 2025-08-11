import { createBrowserRouter } from 'react-router';
import { Layout } from '../views/Layout/Layout';
import { Main } from '../views/Main/Main';
import { Description } from '../components/Description/Description';
import { About } from '../views/About/About';
import { NotFound } from '../views/NotFound/NotFound';

const errorElement = <p>Oops!</p>;

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    errorElement: errorElement,
    children: [
      {
        path: '/',
        Component: Main,
        errorElement: errorElement,
        children: [
          {
            path: ':mal_id',
            Component: Description,
            errorElement: errorElement,
          },
        ],
      },

      {
        path: '/about',
        Component: About,
        errorElement: errorElement,
      },
      {
        path: '/not-found',
        Component: NotFound,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);
