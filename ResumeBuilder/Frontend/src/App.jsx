import React, { useRef } from 'react'
import './App.css'
import { Template1, Template10, Template11, Template12, Template14, Template2, Template20, Template3, Template4, Template5, Template6, Template8 } from './resumetemplate'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import { Navbar } from './component'


const App = () => {
  const resumeRef = useRef();
  // You can replace this with your actual resumeData


 

  return (
    <div className='w-screen'>
    <Navbar />
    {/* <Routes >
      <Route path='/' element={<Home/>}/>
    </Routes> */}
    <Template1 />
    </div>
  )
}

export default App
