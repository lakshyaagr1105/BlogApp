import React from 'react';
import './App.css';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';

const  App  = () => {
  return (
    <div className='container'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path= '/blog/:id' element = {<Blog/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
