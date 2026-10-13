import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/process', label: 'Process' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <Link className="brand footer-brand" to="/" aria-label="RS World home">
          <span className="brand-mark">RS</span>
          <span className="brand-copy">
            <strong>RS WORLD</strong>
            <small>TECH STUDIO</small>
          </span>
        </Link>

        <p>Technology. Code. Creativity. Built around your ideas.</p>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </nav>

        <a className="back-to-top" href="#root">
          BACK TO TOP ↑
        </a>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} RS World — Rahul Kumar</span>
        <span>INDEPENDENT TECH & CREATIVE STUDIO</span>
      </div>
    </footer>
  )
}

export default SiteFooter