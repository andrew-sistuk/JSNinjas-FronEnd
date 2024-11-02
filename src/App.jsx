import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader, Message } from 'components';
const Header = lazy(() => import('./components/Header/Header'));
const Characters = lazy(() => import('./pages/Characters/Characters'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/characters" element={<Header />}>
          <Route index element={<Characters />} />
        </Route>
        <Route path="*" element={<Message message="Page Not Found" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
