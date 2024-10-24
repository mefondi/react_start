import React, {useEffect, useState} from 'react'
import PostList from '../components/UI/PostList';
import PostForm from '../components/UI/PostForm';
import PostFilter from '../components/UI/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import MyLoader from '../components/UI/loader/MyLoader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../components/utils/page';
import MyPagination from '../components/UI/pagination/MyPagination';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(1)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () =>{
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    let totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  function createPost(newPost){
    setPosts([...posts, newPost])
    setModal(false)
  }

  function removePost(post){
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return(
    <div>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        создать
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError &&
      <h1>ошибка ${postError}</h1>}
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <MyLoader/>          
          </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Cписок постов про js'/>
      }
      <MyPagination totalPages={totalPages} setPage={setPage} page={page}/>
    </div>
  );
}

export default Posts;
