import React from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Product from './components/product/Product'
import Testimonials from './components/testimonials/Testimonials'

function App() {

  return (
    <main className="main">
      <Home/>
      <About/>
      <Product/>
      <Testimonials/>
    </main>
  )
}

export default App
