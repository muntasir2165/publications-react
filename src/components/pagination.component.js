import React from 'react';

const Pagination = ({ page, onPageChange, itemsTotal, itemsPerPage }) => {
  const totalPages = () => Math.ceil(itemsTotal / itemsPerPage);

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        <li className='page-item'>
          <button
            className='page-link'
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
          >
            Previous
          </button>
        </li>
        <li className='page-item'>
          <button
            className='page-link'
            disabled={page >= totalPages()}
            onClick={() => onPageChange(page + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
