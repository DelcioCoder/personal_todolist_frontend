import React from 'react'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
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
          <Route path="/Login" element={<Login/>} />


          {/* Rotas protegidas */}
          <Route
            path='/activities'
            element={
              <ProtectedRoute>
                <Activities />
              </ProtectedRoute>
            }
          />

          <Route
            path='/notes'
            element={
              <ProtectedRoute>
                <Notes />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
  
  )
}
