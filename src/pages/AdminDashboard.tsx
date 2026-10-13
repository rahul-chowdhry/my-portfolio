import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'enquiries' | 'portfolio'>('enquiries')
  const [enquiries, setEnquiries] = useState<any[]>([])
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // New Project Form States
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [projectLink, setProjectLink] = useState('')
  const [isPublished, setIsPublished] = useState(true)
  const [formError, setFormError] = useState('')
  const [formSuccess, setFormSuccess] = useState('')

  const navigate = useNavigate()
  const token = localStorage.getItem('adminToken')
  const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api'

  useEffect(() => {
    if (!token) {
      navigate('/admin-login')
      return
    }
    fetchData()
  }, [navigate, token])

  async function fetchData() {
    setLoading(true)
    try {
      // 1. Fetch Enquiries
      const enqRes = await fetch(`${apiUrl}/enquiries/list/`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      if (enqRes.ok) {
        const enqData = await enqRes.json()
        setEnquiries(enqData)
      }

      // 2. Fetch Projects (Admin endpoint returns drafts too)
      const projRes = await fetch(`${apiUrl}/core/admin/portfolio/`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      if (projRes.ok) {
        const projData = await projRes.json()
        setProjects(projData)
      }
    } catch (err) {
      console.error("Failed to fetch dashboard data", err)
    } finally {
      setLoading(false)
    }
  }

  async function updateEnquiryStatus(id: number, newStatus: string) {
    const previous = [...enquiries]
    setEnquiries(enquiries.map(e => e.id === id ? { ...e, status: newStatus } : e))

    try {
      const res = await fetch(`${apiUrl}/enquiries/${id}/update/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      })
      if (!res.ok) throw new Error()
    } catch {
      alert("Failed to update status.")
      setEnquiries(previous)
    }
  }

  async function handleCreateProject(e: any) {
    e.preventDefault()
    setFormError('')
    setFormSuccess('')

    try {
      const res = await fetch(`${apiUrl}/core/admin/portfolio/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title,
          category,
          description,
          image_url: imageUrl,
          project_link: projectLink,
          is_published: isPublished
        })
      })

      if (res.ok) {
        setFormSuccess('Project created successfully!')
        setTitle('')
        setCategory('')
        setDescription('')
        setImageUrl('')
        setProjectLink('')
        setIsPublished(true)
        fetchData() // Refresh list
      } else {
        const errData = await res.json()
        setFormError(JSON.stringify(errData) || 'Failed to create project')
      }
    } catch {
      setFormError('Network error while creating project.')
    }
  }

  function handleLogout() {
    localStorage.removeItem('adminToken')
    navigate('/')
  }

  if (loading) return <div className="section container" style={{textAlign: 'center', marginTop: '100px'}}><h2>Loading Workspace...</h2></div>

  return (
    <section className="section section--soft" style={{ minHeight: '85vh' }}>
      <div className="container">
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="eyebrow">ADMIN WORKSPACE</div>
            <h1 style={{ fontSize: '38px', marginTop: '8px' }}>RS World Control Panel</h1>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <button 
              onClick={() => setActiveTab('enquiries')} 
              className={`button ${activeTab === 'enquiries' ? 'button--primary' : 'button--secondary'}`}
              style={{ minHeight: '42px', padding: '0 20px', fontSize: '13px' }}
            >
              Enquiries ({enquiries.length})
            </button>
            <button 
              onClick={() => setActiveTab('portfolio')} 
              className={`button ${activeTab === 'portfolio' ? 'button--primary' : 'button--secondary'}`}
              style={{ minHeight: '42px', padding: '0 20px', fontSize: '13px' }}
            >
              Portfolio Manager ({projects.length})
            </button>
            <button onClick={handleLogout} className="button button--dark" style={{ minHeight: '42px', padding: '0 18px', fontSize: '13px' }}>Logout</button>
          </div>
        </div>

        {/* TAB 1: ENQUIRIES OVERVIEW */}
        {activeTab === 'enquiries' && (
          <div>
            <h2 style={{ fontSize: '22px', marginBottom: '20px' }}>Client Enquiries</h2>
            <div className="grid grid--3">
              {enquiries.length === 0 ? (
                <p style={{ color: 'var(--text-muted)' }}>No enquiries received yet.</p>
              ) : (
                enquiries.map(enquiry => (
                  <div key={enquiry.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                      <span className="section-label">{enquiry.service_category}</span>
                      <small className="text-muted">{new Date(enquiry.created_at).toLocaleDateString()}</small>
                    </div>
                    <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{enquiry.name}</h3>
                    <a href={`mailto:${enquiry.email}`} className="text-accent" style={{ fontSize: '13px', marginBottom: '15px', fontWeight: 'bold' }}>{enquiry.email}</a>
                    <p style={{ fontSize: '13px', marginBottom: '20px', color: 'var(--text)', flex: 1 }}>"{enquiry.message}"</p>
                    <div style={{ padding: '12px', background: 'var(--bg-soft)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                      <label style={{ fontSize: '10px', fontWeight: 'bold', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>STATUS</label>
                      <select 
                        value={enquiry.status} 
                        onChange={(e) => updateEnquiryStatus(enquiry.id, e.target.value)}
                        style={{ padding: '8px 12px', fontSize: '12px', fontWeight: '600' }}
                      >
                        <option value="New">New</option>
                        <option value="In Review">In Review</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* TAB 2: PORTFOLIO MANAGER */}
        {activeTab === 'portfolio' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '40px', alignItems: 'start' }}>
            
            {/* Add Project Form */}
            <div className="card" style={{ padding: '30px', background: '#ffffff' }}>
              <div className="eyebrow" style={{ marginBottom: '10px' }}>CMS TOOL</div>
              <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Add New Project</h2>

              {formError && <div style={{ color: '#d14343', background: '#fee2e2', padding: '10px', borderRadius: '6px', fontSize: '12px', marginBottom: '15px' }}>{formError}</div>}
              {formSuccess && <div style={{ color: '#16835d', background: '#e6f4ea', padding: '10px', borderRadius: '6px', fontSize: '12px', marginBottom: '15px' }}>{formSuccess}</div>}

              <form onSubmit={handleCreateProject} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>PROJECT TITLE</label>
                  <input type="text" value={title} onChange={e => setTitle(e.target.value)} required placeholder="e.g. AetherOS Agent" />
                </div>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>CATEGORY</label>
                  <input type="text" value={category} onChange={e => setCategory(e.target.value)} required placeholder="e.g. AI & Software" />
                </div>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>DESCRIPTION</label>
                  <textarea value={description} onChange={e => setDescription(e.target.value)} required placeholder="Short project summary..." style={{ minHeight: '90px' }} />
                </div>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>IMAGE URL (OPTIONAL)</label>
                  <input type="url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="https://images.unsplash.com/..." />
                </div>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>PROJECT LINK (OPTIONAL)</label>
                  <input type="url" value={projectLink} onChange={e => setProjectLink(e.target.value)} placeholder="https://github.com/..." />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '5px' }}>
                  <input type="checkbox" id="pubCheck" checked={isPublished} onChange={e => setIsPublished(e.target.checked)} style={{ width: '18px', height: '18px' }} />
                  <label htmlFor="pubCheck" style={{ fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Publish immediately on live website</label>
                </div>
                <button type="submit" className="button button--primary" style={{ marginTop: '10px' }}>Save & Publish Project ↗</button>
              </form>
            </div>

            {/* Existing Projects List */}
            <div>
              <h2 style={{ fontSize: '22px', marginBottom: '20px' }}>Manage Existing Projects</h2>
              <div style={{ display: 'grid', gap: '15px' }}>
                {projects.length === 0 ? (
                  <p style={{ color: 'var(--text-muted)' }}>No projects found in database.</p>
                ) : (
                  projects.map(proj => (
                    <div key={proj.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 25px' }}>
                      <div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '6px' }}>
                          <span style={{ 
                            padding: '3px 8px', 
                            borderRadius: '4px', 
                            fontSize: '9px', 
                            fontWeight: 'bold',
                            background: proj.is_published ? '#e6f4ea' : '#fef3c7',
                            color: proj.is_published ? '#16835d' : '#92400e'
                          }}>
                            {proj.is_published ? 'PUBLISHED' : 'DRAFT'}
                          </span>
                          <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{proj.category}</span>
                        </div>
                        <h3 style={{ fontSize: '18px' }}>{proj.title}</h3>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  )
}