import Header from 'components/Header/Header.jsx';

export function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
