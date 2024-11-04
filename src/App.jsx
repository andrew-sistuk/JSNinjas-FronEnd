import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader, Message, Modal, Toaster } from 'components';

const Header = lazy(() => import('./components/Header/Header'));
const Characters = lazy(() => import('./pages/Characters/Characters'));
const Character = lazy(() => import('./pages/Character/Character'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/characters" element={<Header />}>
          <Route index element={<Characters />} />
          <Route path={':id'} element={<Character />} />
        </Route>
        <Route path="*" element={<Message message="Page Not Found" />} />
      </Routes>
      <Toaster />
      <Modal />
    </Suspense>
  );
}

export default App;
