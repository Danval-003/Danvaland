import React from 'react'
import './App.css'
import { StartPage, BingoPage } from '@pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<StartPage />} />
      <Route path='/Bingo' element={<BingoPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
