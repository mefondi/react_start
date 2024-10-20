import React, {useState, useRef} from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

export default function PostForm({create}) {
    const [post, setPost] = useState({title: '', body: ''});
    const bodyInputRef = useRef()

    function addNewPost(e){
        e.preventDefault()
        const newPost = {...post, id: Date.now(), body: bodyInputRef.current.value}
        create(newPost)
        setPost({...post, title: ''})
        bodyInputRef.current.value = ''
    }

    return (
        <form>
            {/*управляемый компонент*/}
            <MyInput value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} type="text" placeholder='Название поста'/>
            {/*неуправляемый компонент*/}
            <MyInput ref={bodyInputRef} type="text" placeholder='Описание поста'/>
            <MyButton onClick={addNewPost}>Запостить</MyButton>
        </form>
  )
}