import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductCard } from './Components/ProductCard'
import Testing from './Components/Testing'
import LoginPage from './Components/Pages/LoginPage'
import Homepage from './Components/Pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './Components/Pages/SignupPage'
import AdminHomePage from './Components/Pages/adminHomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes path="/*">
      <Route path='/' element={<Homepage/>} />

      <Route path="/login" element={<LoginPage/>}/>

      <Route path="/signup" element={<SignupPage/>}/>

      <Route path="/*" element={<Homepage/>}/>

      <Route path="/admin/*" element={<AdminHomePage/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
