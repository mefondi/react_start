import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import MyLoader from '../components/UI/loader/MyLoader';

export default function PostIdPage() {
  const params = useParams()
  const [postById, setPostById] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async ()=>{
    const response = await PostService.getById(params.id)
    setPostById(response.data)
  }) 
  const [fetchComentsById, isComLoading, comError] = useFetching(async ()=>{
    const response = await PostService.getCom(params.id)
    setComments(response.data)
  }) 

  useEffect(()=>{
    fetchPostById()
    fetchComentsById()
  }, [])

  return (
    <div>
      {isLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <MyLoader/>          
          </div>
        : <div>{postById.id}. {postById.title}</div>}
        <h1>Комментарии</h1>
       {isComLoading
       ?<div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
       <MyLoader/>          
       </div>
       :<div>{comments.map((comm) => 
       <div style={{margin: 15}}>
        <h5>{comm.email}</h5>
        <div>{comm.body}</div>
       </div>)}</div>}
    </div>
  )
}