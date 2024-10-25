import './style/App.css'
import React, { useEffect, useState } from 'react'
import NavBar from './components/UI/NavBar/NavBar';
import AppRouter from './components/UI/AppRouter';
import { AuthContext } from './context';

function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setIsLoading(false)
  },[])

  return(
    <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
      <div>
        <NavBar/>
        <AppRouter/>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
