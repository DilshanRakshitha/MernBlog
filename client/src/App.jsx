import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import DashBoard from './pages/DashBoard'
import Projects from './pages/Projects'
import Signin from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/dashboard' element={<DashBoard/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/sign-in' element={<Signin/>} />
        <Route path='/sign-up' element={<SignUp/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
