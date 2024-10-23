import React from 'react'
import cl from './MyPading.module.css'
import { usePagination } from '../../../hooks/usePagination';

export default function MyPagination({totalPages, setPage, page}) {

  const pagesArray = usePagination(totalPages)

  function changePage (page){
    setPage(page)
  }

  return (
    <div className={cl.page__wrapper}>
        {pagesArray.map((p) =>
        <span onClick={() => changePage(p)} key={p} className={page == p ? [cl.page, cl.page__current].join(' ') : cl.page}>{p}</span>)}      
    </div>
  )
}