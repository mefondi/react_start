import React, { useContext } from 'react'
import cl from './NavBar.module.css'
import {Link} from "react-router-dom";
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

export default function NavBar() {
  const {isAuth, setIsAuth} = useContext(AuthContext)
   const logout = () =>{
    setIsAuth(false)
    localStorage.removeItem('auth')
   }

  return (
    <div className={cl.navbar}>
      {isAuth
      ?<MyButton onClick={logout}>Выйти</MyButton>
      : <MyButton></MyButton>}
        <div className={cl.navbar__links}>
          <Link to="/about">О сайте</Link>
          <Link to="/">Посты</Link>
        </div>
    </div>
  )
}