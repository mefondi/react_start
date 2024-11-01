import React from 'react'
import MySelect from './select/MySelect';
import MyInput from './input/MyInput';

export default function PostFilter({filter, setFilter}) {
  return (
    <div>
        <MyInput placeholder='Поиск ...' value={filter.query} onChange={(e) => setFilter({...filter, query:e.target.value})} />
        <MySelect value={filter.sort} onChange={selectedSort => setFilter({...filter, sort: selectedSort})} defaultValue='сортировка' option={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
          ]}
          />
    </div>
  )
}