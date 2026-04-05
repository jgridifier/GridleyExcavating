import { Link } from 'react-router-dom'
import { PHONE, PHONE_HREF, ADDRESS, ADDRESS_MAP } from '../data/products'

export default function Footer() {
  return (
    <footer style={{ background: '#111111', borderTop: '1px solid #3c3c3c', padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 40,
          marginBottom: 40,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <img
                src={`${import.meta.env.BASE_URL}images/Logo1.png`}
                alt="Gridley Excavating logo"
                style={{ height: 60, width: 'auto', display: 'block', flexShrink: 0 }}
              />
              <span style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, fontSize: 18, color: '#f0ebe3',
                letterSpacing: '0.5px', lineHeight: 1,
              }}>
                GRIDLEY<br />
                <span style={{ color: '#c8210a', fontSize: 10, fontWeight: 600, letterSpacing: '2px' }}>EXCAVATING</span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: '#aaa', lineHeight: 1.6 }}>
              Stone, topsoil, mulch — whatever the job calls for. Based in Corning, NY, delivering throughout Steuben, Chemung, and Schuyler Counties.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, color: '#aaa', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 16 }}>Navigate</h4>
            {[{ label: 'Home', to: '/' }, { label: 'Products & Pricing', to: '/products' }, { label: 'Hours & Location', to: '/hours' }].map(l => (
              <Link key={l.to} to={l.to} style={{
                display: 'block', textDecoration: 'none', fontSize: 15, color: '#aaa', marginBottom: 10,
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#f0ebe3'}
                onMouseLeave={e => e.currentTarget.style.color = '#aaa'}
              >{l.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, color: '#aaa', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 16 }}>Contact</h4>
            <a href={PHONE_HREF} style={{ display: 'block', textDecoration: 'none', fontSize: 18, fontWeight: 700, color: '#c8210a', marginBottom: 12, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.5px' }}>
              {PHONE}
            </a>
            <a href={ADDRESS_MAP} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', fontSize: 14, color: '#aaa', lineHeight: 1.6, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#f0ebe3'}
              onMouseLeave={e => e.currentTarget.style.color = '#aaa'}
            >{ADDRESS}</a>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, color: '#aaa', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 16 }}>Hours</h4>
            <p style={{ fontSize: 14, color: '#f0ebe3', marginBottom: 4 }}>Mon – Fri: <span style={{ color: '#aaa' }}>7:00 AM – 4:00 PM</span></p>
            <p style={{ fontSize: 14, color: '#f0ebe3' }}>Saturday: <span style={{ color: '#aaa' }}>7:00 AM – 12:00 PM</span></p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #3c3c3c', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: '#777' }}>© {new Date().getFullYear()} Gridley Excavating, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
