import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import css from './Characters.module.css';

import {
  selectPage,
  // selectPerPage,
  // selectTotalItems,
  // selectTotalPages,
  // selectHasNextPage,
  // selectHasPreviousPage,
  fetchCharacters,
} from 'myRedux';
import { Container } from 'layouts';
import { CharactersList, Pagination } from 'components';

function Characters() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  useEffect(() => {
    dispatch(fetchCharacters(page));
  }, [dispatch]);

  // const perPage = useSelector(selectPerPage);
  // const totalItems = useSelector(selectTotalItems);
  // const hasNextPage = useSelector(selectHasNextPage);
  // const hasPreviousPage = useSelector(selectHasPreviousPage);

  return (
    <main>
      <section className={css.hero}>
        <Container className={css['hero-container']}>
          <h1 className={css.header}>Characters</h1>
        </Container>
      </section>
      <section>
        <h2 className="visually-hidden">List characters</h2>
        <Container>
          <CharactersList />
          <Pagination />
        </Container>
      </section>
    </main>
  );
}

export default Characters;
