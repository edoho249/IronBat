import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Features from './pages/Features'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

export default function App(){
  const location = useLocation()
  return (
    <div className="app-root">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/testimonials" element={<Testimonials/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </AnimatePresence>
      <footer className="site-footer">© {new Date().getFullYear()} IRONBAT Gadgets</footer>
    </div>
  )
}