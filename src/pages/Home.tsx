import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image_url: string;
  project_link: string;
}

const services = [
  { number: '01', title: 'Web & Software Development', description: 'Business websites, web applications and custom software built around your requirements.', icon: '💻' },
  { number: '02', title: 'Video Editing & Production', description: 'Video editing, short-form content and creative production for your ideas.', icon: '🎬' },
  { number: '03', title: 'Smartphone Repair', description: 'Smartphone diagnostics, repair enquiries and technical support requests.', icon: '📱' },
]

export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api'
    fetch(`${apiUrl}/core/portfolio/`)
      .then(res => res.json())
      .then(data => {
        setFeaturedProjects(data.slice(0, 3))
      })
      .catch(err => console.error(err))
  }, [])

  function handleHeroPointerMove(event: any) {
    if (event.pointerType === 'touch') return
    const bounds = event.currentTarget.getBoundingClientRect()
    if (!bounds.width || !bounds.height) return
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    event.currentTarget.style.setProperty('--tilt-x', `${((0.5 - y) * 7).toFixed(2)}deg`)
    event.currentTarget.style.setProperty('--tilt-y', `${((x - 0.5) * 8).toFixed(2)}deg`)
  }

  function resetHeroPointer(event: any) {
    event.currentTarget.style.setProperty('--tilt-x', '0deg')
    event.currentTarget.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot"></span> INDEPENDENT TECH & CREATIVE STUDIO
            </div>
            <h1>Technology<br />meets <span className="text-accent">creativity.</span></h1>
            <p className="hero-description">
              We build digital experiences, craft compelling videos and help keep your technology running. One studio, multiple ways to bring your ideas to life.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="button button--primary">Explore our services</Link>
              <Link to="/about" className="button button--secondary">Get to know us ↗</Link>
            </div>
          </div>

          <div 
            className="hero-visual" 
            onPointerMove={handleHeroPointerMove} 
            onPointerLeave={resetHeroPointer}
          >
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>
            <div className="visual-symbol">
              <span className="symbol-r">R</span><span className="symbol-s">S</span>
            </div>
            <div className="floating-card floating-card-top">
              <div className="floating-icon">💻</div>
              <div><strong>Technology</strong><small>Build what's next</small></div>
            </div>
            <div className="floating-card floating-card-bottom">
              <div className="floating-icon">▶</div>
              <div><strong>Creative Studio</strong><small>Make it memorable</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Featured Projects Section */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-heading" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <span className="section-label">LATEST WORK</span>
              <h2>Featured <span className="text-accent">Projects.</span></h2>
            </div>
            <Link to="/portfolio" className="button button--secondary">View All Work ↗</Link>
          </div>
          
          {featuredProjects.length === 0 ? (
            <p style={{ color: 'var(--text-muted)' }}>More projects coming soon...</p>
          ) : (
            <div className="grid grid--3">
              {featuredProjects.map(project => (
                <div key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}>
                  <div style={{ 
                    height: '200px', 
                    background: project.image_url ? `url(${project.image_url}) center/cover no-repeat` : 'linear-gradient(135deg, var(--accent-soft) 0%, #e2e8f0 100%)',
                    borderBottom: '1px solid var(--border)'
                  }}></div>
                  <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <span className="section-label" style={{ fontSize: '9px', marginBottom: '8px' }}>{project.category}</span>
                    <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{project.title}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--text)', marginBottom: '20px', flex: 1 }}>{project.description.substring(0, 90)}...</p>
                    <Link to="/portfolio" className="text-accent" style={{ fontSize: '13px', fontWeight: 'bold' }}>Read More ↗</Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="section-heading" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">WHAT WE DO</span>
            <h2 style={{ marginTop: '15px' }}>Different skills.<br />One clear <span className="text-accent">vision.</span></h2>
          </div>
          
          <div className="grid grid--3">
            {services.map(service => (
              <div key={service.number} className="card service-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' }}>{service.number}</span>
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3>{service.title}</h3>
                <p style={{ marginTop: '15px', color: 'var(--text)' }}>{service.description}</p>
                <Link to="/services" className="text-accent" style={{ display: 'block', marginTop: '25px', fontSize: '13px', fontWeight: 'bold' }}>Explore service ↗</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}