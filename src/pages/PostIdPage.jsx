import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import MyLoader from '../components/UI/loader/MyLoader';

export default function PostIdPage() {
  const params = useParams()
  const [postById, setPostById] = useState({})
  const [fetchPostById, isLoading, error] = useFetching(async ()=>{
    const response = await PostService.getById(params.id)
    setPostById(response.data)
  }) 

  useEffect(()=>{
    fetchPostById()
  }, [])

  return (
    <div>
      {isLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <MyLoader/>          
          </div>
        : <div>{postById.id}. {postById.title}</div>}
    </div>
  )
}