
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/js/bootstrap.bundle.min';
//import "bootstrap"; // <-- JS File
// import './App.css'
import Home from './components/home'
import Navbar from './components/Navbar'
import About from './components/About'
import Album from './components/tests'
import Sports from './components/Sports';
import Tech from './components/Tech';
import Entertainment from './components/Entertainment';
import Login from './components/Login';
import Items from './components/Items';





function App() {

  return (
    <BrowserRouter>
   
      
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sports" element={<Sports/>}></Route>
        <Route path="/tech" element={<Tech/>}></Route>
        <Route path="/entertainment" element={<Entertainment/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/items" element={<Items/>}></Route>
        



      </Routes>
    </BrowserRouter>
  )
}

export default App
