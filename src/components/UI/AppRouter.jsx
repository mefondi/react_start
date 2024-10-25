import React, { useContext } from 'react'
import About from '../../pages/About';
import Posts from '../../pages/Posts';
import Error from '../../pages/Error';
import Login from '../../pages/Login';
import PostIdPage from '../../pages/PostIdPage';
import { Route, Routes, Navigate} from "react-router-dom";
import { AuthContext } from '../../context';
import MyLoader from './loader/MyLoader';

export default function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext) 

  if (isLoading) {
    return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
    <MyLoader/>          
    </div>)
  }

  return (
    <div className="App"> 
      {isAuth
      ?  <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/" element={<Posts/>}/>
            <Route path="/posts/:id" element={<PostIdPage/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="/login" element={<Navigate to="/" />}/>
            <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      : <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>}
    </div>
  )
}