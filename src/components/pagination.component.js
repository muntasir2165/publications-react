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
            onClick={() => onPageChange(1)}
          >
            First
          </button>
        </li>
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
        <li className='page-item'>
          <button
            className='page-link'
            disabled={page >= totalPages()}
            onClick={() => onPageChange(totalPages())}
          >
            Last
          </button>
        </li>
        <li className='ml-4 my-auto'>
          {page}/{totalPages()}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
