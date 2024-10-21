import React from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Product from './components/product/Product'

function App() {

  return (
    <main className="main">
      <Home/>
      <About/>
      <Product/>
    </main>
  )
}

export default App
