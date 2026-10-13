import { useEffect, useState } from 'react'

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image_url: string;
  project_link: string;
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api'
    fetch(`${apiUrl}/core/portfolio/`)
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Failed to fetch portfolio", err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="portfolio-page">
      <section className="page-hero">
        <div className="container page-hero-inner" style={{ paddingTop: '40px' }}>
          <div className="eyebrow">OUR WORK</div>
          <h1 className="page-title">
            Featured <span className="text-accent">Projects.</span>
          </h1>
          <p className="page-description">
            A selection of our recent digital experiences, web applications, and creative work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-muted)' }}>
              <h3>Loading projects...</h3>
            </div>
          ) : projects.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', background: 'var(--bg-soft)', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '10px' }}>No Projects Published Yet</h3>
              <p style={{ color: 'var(--text)' }}>Backend admin panel se apne pehle project ko "Published" mark karein!</p>
            </div>
          ) : (
            <div className="grid grid--3">
              {projects.map(project => (
                <div key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}>
                  
                  {/* Project Image Panel */}
                  <div style={{ 
                    height: '220px', 
                    background: project.image_url ? `url(${project.image_url}) center/cover no-repeat` : 'linear-gradient(135deg, var(--accent-soft) 0%, #e2e8f0 100%)',
                    borderBottom: '1px solid var(--border)'
                  }}></div>
                  
                  {/* Project Details */}
                  <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ marginBottom: '12px' }}>
                      <span className="section-label" style={{ fontSize: '10px' }}>{project.category}</span>
                    </div>
                    <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>{project.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text)', marginBottom: '25px', flex: 1, lineHeight: '1.8' }}>
                      {project.description}
                    </p>
                    
                    {project.project_link && (
                      <a href={project.project_link} target="_blank" rel="noreferrer" style={{ 
                        color: 'var(--accent)', 
                        fontWeight: '700', 
                        fontSize: '13px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        View Project <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
