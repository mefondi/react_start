import './style/App.css'
import React from 'react'
import NavBar from './components/UI/NavBar/NavBar';
import AppRouter from './components/UI/AppRouter';

function App() {

  return(
    <div>
      <NavBar/>
      <AppRouter/>
    </div>
  );
}

export default App;
