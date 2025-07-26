import { createRoutesFromElements, Route } from 'react-router';
import { Layout } from '../views/Layout/Layout';
import { Main } from '../views/Main/Main';
import { Description } from '../components/Description/Description';
import { loaderDescription } from '../utils/loaderDescriptions';
import { About } from '../views/About/About';
import { NotFound } from '../views/NotFound/NotFound';

export const routers = createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />} errorElement={<p>Upps</p>}>
      <Route path="/" element={<Main />} errorElement={<p>Upps</p>}>
        <Route path=":mal_id" loader={loaderDescription} element={<Description />} errorElement={<p>Upps</p>}></Route>
      </Route>
      <Route path="/about" element={<About />} errorElement={<p>Upps</p>}></Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </>
);
