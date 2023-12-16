import React from 'react'
import './App.css'
import { StartPage, BingoPage, BingoGamePage } from '@pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<StartPage />} />
      <Route path='/Bingo' element={<BingoPage />} />
      <Route path='/Bingo/Game/:hash' element={<BingoGamePage />} />
    </Routes>
  </BrowserRouter>
)

export default App
