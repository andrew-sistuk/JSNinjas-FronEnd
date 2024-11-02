import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import css from './Characters.module.css';

import { fetchCharacters, selectLoading, selectError } from 'myRedux';
import { Container } from 'layouts';
import { CharactersList, Pagination, Message } from 'components';
import { useSearchParams } from 'react-router-dom';

function Characters() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page')) || 1;

  console.log(page);

  useEffect(() => {
    dispatch(fetchCharacters(page));
  }, [dispatch, page]);

  function handlePageChange(event) {
    const selectedPage = event.selected + 1;
    setSearchParams({ page: selectedPage });
  }

  return error && !loading ? (
    <Message message="Something went wrong. Please try again." />
  ) : (
    <main>
      <section>
        <Container className={css['hero-container']}>
          <h1 className={css.header}>Characters</h1>
        </Container>
      </section>
      <section>
        <h2 className="visually-hidden">List characters</h2>
        <Container>
          {loading && <Message message="Loading..." />}
          <CharactersList />
          <Pagination handleChange={handlePageChange} page={page} />
        </Container>
      </section>
    </main>
  );
}

export default Characters;
