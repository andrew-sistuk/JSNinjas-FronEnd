import css from './Pagination.module.css';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { selectTotalPages } from 'myRedux';

export function Pagination({ page, handleChange }) {
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
      forcePage={page - 1}
      pageCount={totalPages}
      onPageChange={handleChange}
      previousLabel="<"
      breakLabel="..."
      nextLabel=">"
      pageRangeDisplayed={3}
      renderOnZeroPageCount={null}
    />
  );
}
