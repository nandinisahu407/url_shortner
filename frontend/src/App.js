import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainPage from './components/mainpage/MainPage'

const App = () => {
  return (
   <>
   <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shorty" element={<MainPage/>} />
      </Routes>
    </BrowserRouter>

  
   <Footer/>
   </>
  )
}

export default App
