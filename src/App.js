import React from "react";
import './App.css';
import SideNav from './Side-Nav/SideNav';
import { Outlet } from 'react-router-dom';
import AppRoute from './AppRoute';

function App() {
  
  return (
    <div className='app'>
      <AppRoute />
    </div>
  );
}

export default App;
