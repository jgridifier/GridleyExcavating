import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PHONE, PHONE_HREF, isSaturdayClosedForSeason, SATURDAY_CLOSURE_SHORT } from '../data/products'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Hours', to: '/hours' },
]

export const NAV_HEIGHT = 68
export const BANNER_HEIGHT = 34
export const HEADER_HEIGHT = NAV_HEIGHT + BANNER_HEIGHT

function AnnouncementBanner() {
  return (
    <Link to="/hours" style={{ display: 'block', textDecoration: 'none', background: '#c8210a' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '8px 24px',
        height: BANNER_HEIGHT, boxSizing: 'border-box',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      }}>
        <span className="material-icons-outlined" style={{ fontSize: 15, color: '#fff', flexShrink: 0 }}>campaign</span>
        <span style={{
          fontSize: 12.5, fontWeight: 500, color: '#fff',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          letterSpacing: '0.2px', minWidth: 0,
        }}>
          <strong style={{ fontWeight: 800 }}>Fall Hours</strong>
          {' — '}
          {isSaturdayClosedForSeason()
            ? "We're closed on Saturdays through the fall and winter season"
            : `We'll be closed on Saturdays starting ${SATURDAY_CLOSURE_SHORT}, through the fall and winter season`}
        </span>
      </div>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background 0.3s, backdrop-filter 0.3s, border-color 0.3s',
          background: scrolled ? 'rgba(22,22,22,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #3c3c3c' : '1px solid transparent',
        }}
      >
        <AnnouncementBanner />
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: NAV_HEIGHT,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <img
              src={`${import.meta.env.BASE_URL}images/Logo1.png`}
              alt="Gridley Excavating logo"
              style={{ height: 60, width: 'auto', display: 'block', flexShrink: 0 }}
            />
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: '#f0ebe3',
              letterSpacing: '0.5px',
              lineHeight: 1,
            }}>
              GRIDLEY<br />
              <span style={{ color: '#c8210a', fontSize: 11, fontWeight: 600, letterSpacing: '2px' }}>EXCAVATING</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="hidden-mobile">
            {navLinks.map(link => {
              const active = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    textDecoration: 'none',
                    padding: '8px 16px',
                    borderRadius: 0,
                    borderBottom: active ? '2px solid #c8210a' : '2px solid transparent',
                    fontSize: 15,
                    fontWeight: 500,
                    color: active ? '#f0ebe3' : '#888888',
                    background: 'transparent',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#f0ebe3' }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#888888' }}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href={PHONE_HREF}
              style={{
                textDecoration: 'none',
                marginLeft: 8,
                padding: '9px 20px',
                borderRadius: 0,
                background: '#c8210a',
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 6,
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#e02a0e'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#c8210a'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              {PHONE}
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(m => !m)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 8, color: '#f0ebe3', display: 'none',
            }}
            aria-label="Toggle menu"
          >
            <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <motion.span animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                style={{ display: 'block', height: 2, background: '#f0ebe3', borderRadius: 0, transformOrigin: 'center' }} />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                style={{ display: 'block', height: 2, background: '#f0ebe3', borderRadius: 0 }} />
              <motion.span animate={menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                style={{ display: 'block', height: 2, background: '#f0ebe3', borderRadius: 0, transformOrigin: 'center' }} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'fixed', top: HEADER_HEIGHT, left: 0, right: 0, zIndex: 99,
              background: 'rgba(22,22,22,0.97)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid #3c3c3c',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '16px 24px 24px' }}>
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    display: 'block',
                    padding: '14px 0',
                    textDecoration: 'none',
                    fontSize: 20,
                    fontWeight: 600,
                    color: location.pathname === link.to ? '#c8210a' : '#f0ebe3',
                    borderBottom: '1px solid #3c3c3c',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: '0.5px',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={PHONE_HREF}
                style={{
                  display: 'block',
                  marginTop: 20,
                  padding: '14px 0',
                  textDecoration: 'none',
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#c8210a',
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}
              >
                <span className="material-icons" style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 6 }}>phone</span>{PHONE}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
