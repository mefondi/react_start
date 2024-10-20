import React, {useState } from 'react'
import './style/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'lavaScript 1', body:'description'},
    {id:2, title: 'lavaScript 2', body:'description'},
    {id:3, title: 'lavaScript 3', body:'description'},
    {id:4, title: 'lavaScript 4', body:'description'},
  ]);

  function createPost(newPost){
    setPosts([...posts, newPost])
  }

  function removePost(post){
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return(
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect defaultValue='сортировка' option={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
          ]}/>
      </div>
      {posts.length !== 0 
      ?<PostList remove={removePost} posts={posts} title='Cписок постов про js'/>     
      :<h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }   
    </div>
  );
}

export default App;
