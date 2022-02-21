import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import { useSelector } from 'react-redux'
import Home from './components/Home'

const App = () => {
  const { user } = useSelector(state => state);
  console.log(user);
  return (
    <>


      {
        user == null ? (
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )
          : (
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          )
      }
    </>
  )
}

export default App