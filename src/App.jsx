import { useState } from 'react'
import './App.css'
import { Routes,Route } from "react-router"
import Home from "./pages/Home"
import NavBar from "./components/Navbar"
import Unavaible from "./pages/Unavaible"
import Footer from "./components/Footer"




function App() {


  return (
    <>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Unavaible" element={<Unavaible/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
