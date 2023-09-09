
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Search from "./Components/Search";
import Contact from "./Components/Contact";
import TaskList from './Components/TaskList';


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path="/" element={<Home name={'Pratheeksha'} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<NavBar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Search />} />
            <Route path="/tasklist" element={<TaskList/>}/>
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App