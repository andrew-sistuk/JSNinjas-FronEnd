import css from './Character.module.css';

export function Character({ img, name }) {
  return (
    <li className={css.item}>
      <img className={css.img} src={img} alt={name} />
      <p className={css.name}>{name}</p>
    </li>
  );
}
