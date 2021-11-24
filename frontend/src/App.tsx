import * as React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/Layout';
import Index from './pages/Index';

const New = React.lazy(() => import('./pages/New'));
const Detail = React.lazy(() => import('./pages/Detail'));

export default function App() {
  const fallback = <>読み込み中...</>;

  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />

          <Route
            path="new"
            element={
              <React.Suspense fallback={fallback}>
                <New />
              </React.Suspense>
            }
          />

          <Route
            path="/:id"
            element={
              <React.Suspense fallback={fallback}>
                <Detail />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}
