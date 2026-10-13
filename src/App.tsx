import { useEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'

import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import Process from './pages/Process'
import FAQ from './pages/FAQ'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import ScrollAnimations from './components/ScrollAnimations'

// Naye Dashboard Pages Import
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <section className="page-hero not-found-section">
      <div className="container page-hero-inner">
        <div className="eyebrow">404 / PAGE NOT FOUND</div>
        <h1 className="page-title">
          This page doesn't<br /><span className="text-accent">exist.</span>
        </h1>
        <p className="page-description">The link may be incorrect or the page may have moved.</p>
        <Link className="button button--dark" to="/">Back to homepage <span>→</span></Link>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <ScrollAnimations />
      <SiteHeader />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/process" element={<Process />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Naye Dashboard Routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <SiteFooter />
    </div>
  )
}

export default App