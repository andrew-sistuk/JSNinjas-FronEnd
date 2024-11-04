import css from './Character.module.css';
import { Link } from 'react-router-dom';
import { NotFoundCharacter } from 'assets';

export function Character({ id, img, name }) {
  return (
    <li className={css.link}>
      <Link to={id}>
        <img className={css.img} src={img ? img : NotFoundCharacter} alt={name} />
        <p className={css.name}>{name}</p>
      </Link>
    </li>
  );
}
