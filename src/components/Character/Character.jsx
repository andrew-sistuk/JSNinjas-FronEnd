import css from './Character.module.css';
import { Link } from 'react-router-dom';

export function Character({ id, img, name }) {
  return (
    <li>
      <Link to={id}>
        <img className={css.img} src={img} alt={name} />
        <p className={css.name}>{name}</p>
      </Link>
    </li>
  );
}
