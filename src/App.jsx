import React from 'react'
import './App.css'
import { StartPage } from '@pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<StartPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
