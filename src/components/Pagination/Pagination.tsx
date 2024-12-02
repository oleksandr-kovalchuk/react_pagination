import React from 'react';

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(total / perPage);
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === pageCount;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const handlePrevClick = () => {
    if (!isPrevDisabled) {
      onPageChange(prevPage);
    }
  };

  const handleNextClick = () => {
    if (!isNextDisabled) {
      onPageChange(nextPage);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <ul className="pagination">
      <li
        className={`page-item ${isPrevDisabled ? 'disabled' : ''}`}
        onClick={handlePrevClick}
      >
        <a
          className="page-link"
          href="#prev"
          data-cy="prevLink"
          aria-disabled={isPrevDisabled}
        >
          «
        </a>
      </li>

      {pages.map(page => (
        <li
          key={page}
          className={`page-item ${page === currentPage ? 'active' : ''}`}
          onClick={() => handlePageClick(page)}
        >
          <a className="page-link" href={`#${page}`} data-cy="pageLink">
            {page}
          </a>
        </li>
      ))}

      <li
        className={`page-item ${isNextDisabled ? 'disabled' : ''}`}
        onClick={handleNextClick}
      >
        <a
          className="page-link"
          href="#next"
          data-cy="nextLink"
          aria-disabled={isNextDisabled}
        >
          »
        </a>
      </li>
    </ul>
  );
};
