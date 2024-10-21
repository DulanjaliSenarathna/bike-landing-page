import React from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Product from './components/product/Product'
import Testimonials from './components/testimonials/Testimonials'
import Pricing from './components/pricing/Pricing'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <main className="main">
      <Home/>
      <About/>
      <Product/>
      <Testimonials/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
