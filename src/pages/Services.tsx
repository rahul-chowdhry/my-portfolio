import { Link } from 'react-router-dom'

export default function Services() {
  const allServices = [
    { 
      id: 1, 
      title: 'Web & Software Development', 
      desc: 'Custom business websites, full-stack web applications, and scalable software solutions. We use modern tech stacks like React, TypeScript, and Django to build fast and secure digital products.',
      tags: ['React & UI/UX', 'Django Backends', 'API Development', 'E-commerce Solutions'],
      icon: '💻',
      badge: 'CORE ENGINEERING'
    },
    { 
      id: 2, 
      title: 'Video Editing & Production', 
      desc: 'Professional video editing for YouTube, social media reels, and corporate presentations. We handle color grading, motion graphics, and audio mastering to make your content stand out.',
      tags: ['Social Media Reels', 'YouTube Edits', 'Color Grading', 'Motion Graphics'],
      icon: '🎬',
      badge: 'CREATIVE STUDIO'
    },
    { 
      id: 3, 
      title: 'Smartphone & Tech Repair', 
      desc: 'Expert diagnostic and repair services for smartphones and laptops. Fast turnaround times for screen replacements, battery issues, and software troubleshooting.',
      tags: ['Screen Replacement', 'Battery Issues', 'Software Fixes', 'Hardware Diagnostics'],
      icon: '🔧',
      badge: 'TECHNICAL SUPPORT'
    }
  ]

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container page-hero-inner" style={{ paddingTop: '50px', paddingBottom: '20px' }}>
          <div className="eyebrow">OUR CAPABILITIES</div>
          <h1 className="page-title">
            What we <span className="text-accent">do best.</span>
          </h1>
          <p className="page-description">
            We bridge the gap between technical complexity and creative execution, offering a full spectrum of digital and technical services tailored for modern businesses.
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="grid" style={{ gap: '32px' }}>
            {allServices.map((service, index) => (
              <div 
                key={service.id} 
                className="card" 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '320px 1fr', 
                  gap: '40px', 
                  alignItems: 'center',
                  padding: '40px',
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {/* Left Visual Box */}
                <div style={{ 
                  padding: '35px 25px', 
                  background: 'var(--bg-soft)', 
                  borderRadius: 'var(--radius-md)', 
                  textAlign: 'center',
                  border: '1px solid var(--border)'
                }}>
                  <div style={{ fontSize: '54px', marginBottom: '15px' }}>{service.icon}</div>
                  <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '1.5px', color: 'var(--accent)' }}>{service.badge}</span>
                  <h3 style={{ fontSize: '20px', marginTop: '10px', lineHeight: '1.3' }}>{service.title}</h3>
                </div>

                {/* Right Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span className="section-label">SERVICE 0{index + 1}</span>
                  </div>
                  
                  <p style={{ fontSize: '15px', lineHeight: '1.85', color: 'var(--text)', marginBottom: '24px' }}>
                    {service.desc}
                  </p>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
                    {service.tags.map(tag => (
                      <span key={tag} style={{ 
                        padding: '6px 14px', 
                        background: 'var(--bg-soft)', 
                        border: '1px solid var(--border)', 
                        borderRadius: '6px', 
                        fontSize: '11px', 
                        fontWeight: '600',
                        color: 'var(--text-dark)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link to="/contact" className="button button--primary" style={{ minHeight: '44px', padding: '0 24px', fontSize: '13px' }}>
                    Discuss this service ↗
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}