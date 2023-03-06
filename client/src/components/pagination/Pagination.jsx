import React, { useEffect, useState } from 'react'
import { PaginationComponent, PageButtonContainer } from './StylesPagination'

export const Pagination = ({ postsPerPage, totalPosts, setCurrentPage, currentPage }) => {
  const [page, setPage] = useState(currentPage)

  const pages = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }

  useEffect(() => {
    setPage(currentPage)
  }, [currentPage])

  const paginate = (page) => {
    setCurrentPage(page)
  }

  const previousPage = () => {
    if (page === 1) return
    paginate(page - 1)
  }

  const nextPage = () => {
    if (page === pages.length) return
    paginate(page + 1)
  }

  return (
    <PaginationComponent>

      <PageButtonContainer className='prevButton'>
        <button onClick={previousPage}>{'<'}</button>
      </PageButtonContainer>

      {
        pages.map(page => {
          return (
            <PageButtonContainer key={page} className={currentPage === page ? 'pageButton selected' : 'pageButton'}>
              <button onClick={() => paginate(page)} className={currentPage === page ? 'selected' : ''}>{page}</button>
            </PageButtonContainer>
          )
        })
      }

      <PageButtonContainer className='nextButton'>
        <button onClick={nextPage}>{'>'}</button>
      </PageButtonContainer>

    </PaginationComponent>
  )
}
