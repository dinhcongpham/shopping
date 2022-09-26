import Home from './pages/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cartscreen from './pages/Cartscreen';
import Productscreen from './pages/Productscreen';
import Login from './pages/Login';
import Signup from './pages/Signup';



const App= () => {
  return(
  <Router>
      <main className="app">
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/cart' element={<Cartscreen/>} />
          <Route path='/product/:id' element={<Productscreen/>} />
          <Route path='/logi' element={<Login/>} />
          <Route path='/signu' element={<Signup/>}/> 
        </Routes>
      </main>
    </Router>
  )
}
export default App;