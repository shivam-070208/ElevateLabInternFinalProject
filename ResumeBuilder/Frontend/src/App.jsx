import React, { useRef } from 'react'
import './App.css'
import { Template1, Template10, Template11, Template12, Template14, Template2, Template20, Template3, Template4, Template5, Template6, Template8 } from './resumetemplate'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import { Navbar } from './component'
import { Cursor } from './ui'



const App = () => {
  const resumeRef = useRef();
 



  return (
    <div className='w-screen  relative h-fit'>
     
    <Navbar />
   

    <Routes >
      <Route path='/' element={<Home/>}/>
    </Routes>
    
   
  
    </div>
  )
}

export default App
