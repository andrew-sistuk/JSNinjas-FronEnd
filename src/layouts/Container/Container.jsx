import css from './Container.module.css';
import clsx from 'clsx';

export function Container({ className, children }) {
  return <div className={clsx(className, css.container)}>{children}</div>;
}
