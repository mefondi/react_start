import React from 'react'
import MyButton from './button/MyButton';
import { useNavigate } from 'react-router-dom';

export default function PostItem(props) {

  const router = useNavigate()

  return (
    <div className='post'>
        <div className='post_content'>
            <strong>{props.post.id} {props.post.title}</strong>
            <div>
              {props.post.body}
            </div>
        </div>
        <div className='post__btns'>
          <MyButton onClick={() => router('/posts/'+ props.post.id)} className='btn_post'>открыть</MyButton>
          <MyButton onClick={() => props.remove(props.post)} className='btn_post'>удалить</MyButton>
        </div>
      </div>
  )
}