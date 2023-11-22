import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import { BrowserRouter,Routes,Route,link } from "react-router-dom";
import Login from './pages/Login';

function App() {
  return(
    <div className='app'>
      <BrowserRouter>
         <Routes>
          <Route path='signup'element={<Signup/>}></Route>
          <Route path='Login'element={<Login/>}></Route>
          <Route path='/'element={<Signup/>}></Route>
          <Route path='/Home'element={<Home/>}></Route>
         </Routes>
      </BrowserRouter>
    </div>
  )
  
}
export default App