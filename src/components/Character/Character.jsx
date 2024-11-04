import css from './Character.module.css';
import { Link } from 'react-router-dom';
import { NotFoundCharacter } from 'assets';

export function Character({ id, name, images }) {
  return (
    <li className={css['link-container']}>
      <Link className={css.link} to={id}>
        <img className={css.img} src={images[0] ? images[0] : NotFoundCharacter} alt={name} />
        <p className={css.name}>{name}</p>
      </Link>
    </li>
  );
}
