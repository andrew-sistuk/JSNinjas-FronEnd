import css from './Message.module.css';

export function Message({ message }) {
  return (
    <div className={css['message-container']}>
      <p className={css.message}>{message}</p>
    </div>
  );
}
