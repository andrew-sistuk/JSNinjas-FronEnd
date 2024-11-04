import css from './Character.module.css';
import { Container } from 'layouts';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteCharacter,
  fetchCharacter,
  selectCharacter,
  selectError,
  selectLoading,
} from 'myRedux';
import { Button, Message } from 'components';
import { useModal } from 'helpers';

function Character() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { setModal } = useModal();
  const navigate = useNavigate();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCharacter(id));
  }, [dispatch, id]);

  const { nickname, real_name, origin_description, superpowers, catch_phrase } =
    useSelector(selectCharacter);

  const handleDelete = () => {
    dispatch(deleteCharacter(id));
    navigate('/characters');
  };

  return error && !loading ? (
    <Message message="Something went wrong. Please try again." />
  ) : (
    <section className={css.character}>
      <Container>
        {loading && <Message message="Loading..." />}
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

        <div className={css.info}>
          <h2 className={css.nickname}>{nickname}</h2>
          <h3 className={css['real-name']}>{real_name}</h3>
          <p className={css['origin-description']}>{origin_description}</p>
          <p className={css.superpowers}>{superpowers}</p>
          <p className={css['catch-phrase']}>{catch_phrase}</p>
          <Button value="Edit" handleClick={() => setModal({ isOpen: true, type: 'edit' })} />
          <Button value="Create" handleClick={() => setModal({ isOpen: true, type: 'create' })} />
          <Button value="Delete" handleClick={handleDelete} />
        </div>
      </Container>
    </section>
  );
}

export default Character;
