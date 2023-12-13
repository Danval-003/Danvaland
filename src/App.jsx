import React from 'react'
import './App.css'
import { StartPage } from '@pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  console.log(import.meta.env.REACT_APP_SUPABASE_KEY)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
