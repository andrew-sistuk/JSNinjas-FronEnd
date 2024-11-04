import css from './Header.module.css';
import { Logo } from 'assets';
import { Link, Outlet } from 'react-router-dom';
import { Search } from 'components';
import { Container } from 'layouts';

function Header() {
  return (
    <>
      <header className={css.header}>
        <Container className={css['container-header']}>
          <Link to="/characters">
            <Logo width={78} height={32} />
          </Link>
          <Search />
        </Container>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
