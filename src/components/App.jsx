import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import { routes } from '../utils/router-routes';

const App = () => (
  <Layout>
    <Routes>
      {routes.map(({ path, page: Page }) => {
        return (
          <Route
            key={path}
            path={`/${import.meta.env.APP_BASE}${path}`}
            element={<Page />}
          />
        );
      })}
    </Routes>
  </Layout>
);

export default App;
