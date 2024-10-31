import css from './Search.module.css';
import { HiOutlineSearch } from 'react-icons/hi';

export function Search() {
  return (
    <div className={css['search-container']}>
      <input className={css['search-input']} type="text" placeholder="SEARCH" />
      <HiOutlineSearch className={css['ico-search']} size={18} />
    </div>
  );
}
