import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Header = lazy(() => import('./components/Header/Header'));
const Characters = lazy(() => import('./pages/Characters/Characters'));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Characters />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
