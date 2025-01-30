import { useState } from 'react'
import './App.css'
import LoginPage from './Components/Pages/LoginPage'
import Homepage from './Components/Pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './Components/Pages/SignupPage'
import AdminHomePage from './Components/Pages/adminHomePage'
import ContactUs from './Components/Pages/contactUsPage'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Toaster/>
    <Routes path="/*">
      <Route path='/' element={<Homepage/>} />

      <Route path="/login" element={<LoginPage/>}/>

      <Route path="/signup" element={<SignupPage/>}/>

      <Route path="/*" element={<Homepage/>}/>

      <Route path="/admin/*" element={<AdminHomePage/>}/>

      <Route path='/contactUs' element={<ContactUs/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
