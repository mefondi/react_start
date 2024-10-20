import React, {useMemo, useState } from 'react'
import './style/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript 1', body:'description'},
    {id:2, title: 'JavaScript 2', body:'description'},
    {id:3, title: 'JavaScript 3', body:'description'},
    {id:4, title: 'JavaScript 4', body:'description'},
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    if(filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])
  
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((posts) => posts.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [sortedPosts, filter.query])

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
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Cписок постов про js'/>      
    </div>
  );
}

export default App;
