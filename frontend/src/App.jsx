import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./Components/Footer"

function App() {


  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
