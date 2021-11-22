import * as React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';

const New = React.lazy(() => import('./pages/New'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route
          path="new"
          element={
            <React.Suspense fallback={<>読み込み中...</>}>
              <New />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
