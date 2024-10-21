import React from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Product from './components/product/Product'
import Testimonials from './components/testimonials/Testimonials'
import Pricing from './components/pricing/Pricing'

function App() {

  return (
    <main className="main">
      <Home/>
      <About/>
      <Product/>
      <Testimonials/>
      <Pricing/>
    </main>
  )
}

export default App
