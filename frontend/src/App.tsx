import * as React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/Layout';
import Index from './pages/Index';

const New = React.lazy(() => import('./pages/New'));

function App() {
  return (
    <ChakraProvider>
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
    </ChakraProvider>
  );
}

export default App;
