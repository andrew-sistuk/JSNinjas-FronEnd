import css from './Button.module.css';

export function Button({ type = 'button', handleClick, value }) {
  return (
    <button className={css.button} type={type} onClick={handleClick}>
      {value}
    </button>
  );
}
