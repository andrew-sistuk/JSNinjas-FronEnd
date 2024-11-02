import css from './Loader.module.css';
import { CircleLoader, RingLoader } from 'react-spinners';

export function Loader() {
  return (
    <div className={css.wrapper}>
      <RingLoader color="#34387f" size={200} />
    </div>
  );
}
