import css from './Character.module.css';
import { Container } from 'layouts';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCharacter, selectCharacter } from 'myRedux';

function Character() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacter(id));
  }, [dispatch, id]);

  const { nickname, real_name, origin_description, catch_phrase } = useSelector(selectCharacter);

  return (
    <section className={css.character}>
      <Container>
        <ul className={css.gallery}>
          {/*{gallery.map(({id, thumb, original}) => (*/}
          {/*    <li className={css['photo-container']} key={id}>*/}
          {/*        <button*/}
          {/*            className={css['open-modal']}*/}
          {/*            onClick={() => handleClick(original)}*/}
          {/*        >*/}
          {/*            <img className={css.img} src={thumb} alt={name}/>*/}
          {/*        </button>*/}
          {/*    </li>*/}
          {/*))}*/}
        </ul>
        <h2 className={css.nickname}>{nickname}</h2>
        <h3 className={css['real-name']}>{real_name}</h3>
        <p className={css['origin-description']}>{origin_description}</p>
        <p className={css['catch-phrase']}>{catch_phrase}</p>
      </Container>
    </section>
  );
}

export default Character;
