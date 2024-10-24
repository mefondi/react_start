import React from 'react'
import cl from './NavBar.module.css'
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <div className={cl.navbar}>
        <div className={cl.navbar__links}>
          <Link to="/about">О сайте</Link>
          <Link to="/posts">Посты</Link>
        </div>
    </div>
  )
}