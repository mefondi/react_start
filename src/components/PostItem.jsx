import React from 'react'
import MyButton from './UI/button/MyButton';

export default function PostItem(props) {
  return (
    <div className='post'>
        <div className='post_content'>
            <strong>{props.post.id} {props.post.title}</strong>
            <div>
              {props.post.body}
            </div>
        </div>
        <div>
          <MyButton onClick={() => props.remove(props.post)} className='btn_post'>удалить</MyButton>
        </div>
      </div>
  )
}