import React from 'react'
import About from '../../pages/About';
import Posts from '../../pages/Posts';
import Error from '../../pages/Error';
import PostIdPage from '../../pages/PostIdPage';
import { Route, Routes, Navigate} from "react-router-dom";

export default function AppRouter() {
  return (
    <div className="App">   
        <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/posts/:id" element={<PostIdPage/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
    </div>
  )
}