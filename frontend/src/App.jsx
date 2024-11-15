import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Activities from './pages/Activities'
import Notes from './pages/Notes'
import Login from './pages/Login'
export default function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome to the ToDo List App!</h1>} />
          <Route path="/activities" element={<Activities/>} />
          <Route path="/notes" element={<Notes/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </Router>
  
  )
}
