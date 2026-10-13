import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Yahan 'any' lagaya hai taaki FormEvent ka red line error na aaye
  async function handleLogin(e: any) {
    e.preventDefault()
    setError('')
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api'
      const res = await fetch(`${apiUrl}/auth/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      const data = await res.json()
      
      if (res.ok) {
        localStorage.setItem('adminToken', data.access)
        navigate('/dashboard')
      } else {
        setError(data.detail || 'Invalid username or password')
      }
    } catch (err) {
      setError('Network error. Is the backend running?')
    }
  }

  return (
    <section className="section section--soft" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="card" style={{ maxWidth: '420px', width: '100%', padding: '40px' }}>
          <div className="eyebrow" style={{ marginBottom: '15px' }}>SECURE AREA</div>
          <h2 style={{ marginBottom: '25px', fontSize: '32px' }}>Admin Login</h2>
          
          {error && <div style={{ color: '#d14343', backgroundColor: '#fee2e2', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px' }}>{error}</div>}
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#555', marginBottom: '6px', display: 'block' }}>USERNAME</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} required placeholder="Enter admin username" />
            </div>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#555', marginBottom: '6px', display: 'block' }}>PASSWORD</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" />
            </div>
            <button type="submit" className="button button--primary" style={{ marginTop: '10px' }}>Access Dashboard ↗</button>
          </form>
        </div>
      </div>
    </section>
  )
}
