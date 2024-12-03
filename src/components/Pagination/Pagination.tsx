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
  const totalPages = Math.ceil(total / perPage);

  const generatePageNumbers = (count: number): number[] => {
    const pageNumbers = [];

    for (let i = 1; i <= count; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers(totalPages);

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const goToPreviousPage = () => {
    if (!isPrevDisabled) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (!isNextDisabled) {
      onPageChange(currentPage + 1);
    }
  };

  const goToPage = (page: number) => {
    onPageChange(page);
  };

  return (
    <ul className="pagination">
      <li
        className={`page-item ${isPrevDisabled ? 'disabled' : ''}`}
        onClick={goToPreviousPage}
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

      {pageNumbers.map(page => (
        <li
          key={page}
          className={`page-item ${page === currentPage ? 'active' : ''}`}
          onClick={() => goToPage(page)}
        >
          <a className="page-link" href={`#${page}`} data-cy="pageLink">
            {page}
          </a>
        </li>
      ))}

      <li
        className={`page-item ${isNextDisabled ? 'disabled' : ''}`}
        onClick={goToNextPage}
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
