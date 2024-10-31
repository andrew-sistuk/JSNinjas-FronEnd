import css from './Pagination.module.css';
import ReactPaginate from 'react-paginate';
import { fetchCharacters } from 'myRedux/characters/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalPages } from 'myRedux/characters/selectors.js';

export function Pagination() {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);

  return (
    <ReactPaginate
      className={css.paginate}
      pageClassName={css['paginate-page']}
      pageLinkClassName={css['paginate-page-link']}
      activeClassName={css['paginate-active']}
      previousClassName={css['paginate-previous']}
      nextClassName={css['paginate-next']}
      previousLinkClassName={css['paginate-previous-link']}
      nextLinkClassName={css['paginate-next-link']}
      disabledClassName={css['paginate-disabled']}
      pageCount={totalPages}
      onPageChange={event => dispatch(fetchCharacters(event.selected + 1))}
      previousLabel="<"
      breakLabel="..."
      nextLabel=">"
      pageRangeDisplayed={3}
      renderOnZeroPageCount={null}
    />
  );
}
