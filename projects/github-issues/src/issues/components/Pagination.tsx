import { FC } from 'react'

interface PaginationProps {
  isFetching: boolean
  page: string | number
  nextPage: () => void
  prevPage: () => void
}

export const Pagination: FC<PaginationProps> = ({
  isFetching,
  page,
  nextPage,
  prevPage
}) => {
  return (
    <div className='d-flex justify-content-between align-items-center mt-3'>
      <button
        className='btn btn-primary'
        onClick={prevPage}
        disabled={isFetching}
      >
        Prev
      </button>
      <span className='mx-2'>{page}</span>
      <button
        className='btn btn-primary'
        onClick={nextPage}
        disabled={isFetching}
      >
        Next
      </button>
    </div>
  );
}
