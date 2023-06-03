import { useState } from 'react'
import './App.css'
import BodyMain from './components/body/BodyMain'
import { Routes, Route } from 'react-router-dom'
import ProductPageSingle from './components/products/ProductPageSingle'

function App() {

  return (
    <Routes> 
      <Route path="/" element={<BodyMain />} />
      <Route path="/products/:id" element={<ProductPageSingle />} />
    </Routes>
  )
}

export default App
