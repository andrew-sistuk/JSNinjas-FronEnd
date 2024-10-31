import css from './Characters.module.css';
import { Container } from 'layouts';

function Characters() {
  return (
    <section className={css.characters}>
      <Container className={css['container-characters']}>
        <h1 className={css.header}>Characters</h1>
      </Container>
    </section>
  );
}

export default Characters;
