import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Gallery from '../components/Gallery'
import { PHONE, PHONE_HREF, ADDRESS, ADDRESS_MAP } from '../data/products'

const base = import.meta.env.BASE_URL

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }
}

function CountUp({ target, suffix = '' }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {target}{suffix}
    </motion.span>
  )
}

const productCategories = [
  {
    icon: 'terrain',
    title: 'Gravel & Stone',
    desc: 'We carry everything from Item #4 for driveways to fine crushed stone for drainage. Not sure which one you need? Give us a holler, we\'ll point you in the right direction.',
    highlight: 'Most products $30/yard',
  },
  {
    icon: 'grass',
    title: 'Topsoil',
    desc: 'Screened topsoil for lawns and gardens, SHED topsoil, or straight overburden for fill. We sell by the yard and can deliver or load your trailer.',
    highlight: 'From $9.00/yard',
  },
  {
    icon: 'forest',
    title: 'Mulch',
    desc: 'Double ground hardwood in brown or black, and playground-certified mulch.',
    highlight: 'From $27.78/yard',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 600], [0, 120])

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section ref={heroRef} style={{
        position: 'relative', height: '100vh', minHeight: 600,
        overflow: 'hidden', display: 'flex', alignItems: 'center',
      }}>
        {/* Parallax image */}
        <motion.div
          style={{
            position: 'absolute', inset: '-15%',
            y: heroY,
            backgroundImage: `url(${base}images/IMG_1382.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            willChange: 'transform',
          }}
        />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.65) 100%)',
        }} />
        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 200,
          background: 'linear-gradient(to top, #161616, transparent)',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, padding: '0 24px', maxWidth: 900, margin: '0 auto', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: 'inline-block',
              marginBottom: 20,
              padding: '6px 14px',
              borderLeft: '3px solid #c8210a',
              borderRadius: 0,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: '#c8210a',
            }}
          >
            Corning, NY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(52px, 10vw, 110px)',
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: '-1px',
              color: '#f0ebe3',
              marginBottom: 24,
              textTransform: 'uppercase',
            }}
          >
            Gridley<br />
            <span style={{ color: '#c8210a' }}>Excavating</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              color: 'rgba(240,235,227,0.8)',
              marginBottom: 36,
              maxWidth: 560,
              lineHeight: 1.5,
            }}
          >
            Located in South Corning, open 6 days a week.<br />
            Pickup and delivery throughout Steuben, Chemung &amp; Schuyler Counties.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
          >
            <Link
              to="/products"
              style={{
                textDecoration: 'none',
                padding: '14px 32px',
                background: '#c8210a',
                color: '#fff',
                borderRadius: 0,
                fontWeight: 700,
                fontSize: 16,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'background 0.2s, transform 0.15s',
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: '0.5px',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#e02a0e'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#c8210a'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              View Products &amp; Prices →
            </Link>
            <a
              href={PHONE_HREF}
              style={{
                textDecoration: 'none',
                padding: '14px 32px',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
                color: '#f0ebe3',
                borderRadius: 0,
                fontWeight: 700,
                fontSize: 16,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'background 0.2s, transform 0.15s',
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: '0.5px',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <span className="material-icons" style={{ fontSize: 18 }}>phone</span>
              Call Now
            </a>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{
            position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.3)', fontSize: 24, zIndex: 2,
          }}
        >
          <span className="material-icons" style={{ fontSize: 32 }}>keyboard_arrow_down</span>
        </motion.div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────── */}
      <section style={{ background: '#242424', borderTop: '1px solid #3c3c3c', borderBottom: '1px solid #3c3c3c', padding: '48px 24px' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 32, textAlign: 'center',
        }}>
          {[
            { value: '29', suffix: '', label: 'Years in Business' },
            { value: '20', suffix: '', label: 'Products Offered' },
            { value: '20', suffix: '+', label: 'Mile Delivery Radius' },
            { value: '6', suffix: '', label: 'Days a Week' },
          ].map((stat, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 56, fontWeight: 900, lineHeight: 1,
                color: '#c8210a', marginBottom: 6,
              }}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ fontSize: 14, color: '#aaa', fontWeight: 500, letterSpacing: '0.5px' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHAT WE OFFER ─────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: 56, textAlign: 'center' }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '3px', color: '#c8210a', textTransform: 'uppercase', marginBottom: 12 }}>
              What We Offer
            </p>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 900, color: '#f0ebe3',
              lineHeight: 1, textTransform: 'uppercase',
            }}>
              Materials for Every Job
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {productCategories.map((cat, i) => (
              <Link key={cat.title} to="/products" style={{ textDecoration: 'none' }}>
              <motion.div
                {...fadeUp(i * 0.12)}
                whileHover={{ x: 4 }}
                style={{
                  background: '#242424',
                  borderLeft: '4px solid #c8210a',
                  borderRadius: 0,
                  padding: '32px 28px',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  height: '100%',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#2a2a2a'}
                onMouseLeave={e => e.currentTarget.style.background = '#242424'}
              >
                <span className="material-icons-outlined" style={{ fontSize: 40, color: '#c8210a', display: 'block', marginBottom: 16 }}>{cat.icon}</span>
                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 26, fontWeight: 800, color: '#f0ebe3',
                  textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 12,
                }}>{cat.title}</h3>
                <p style={{ fontSize: 15, color: '#aaa', lineHeight: 1.65, marginBottom: 20 }}>{cat.desc}</p>
                <div style={{
                  display: 'inline-block',
                  padding: '5px 12px',
                  background: 'rgba(200,33,10,0.12)',
                  border: '1px solid rgba(200,33,10,0.3)',
                  borderRadius: 0,
                  fontSize: 13, fontWeight: 600, color: '#c8210a',
                }}>{cat.highlight}</div>
              </motion.div>
              </Link>
            ))}
          </div>

          <motion.div {...fadeUp(0.2)} style={{ textAlign: 'center', marginTop: 40 }}>
            <Link
              to="/products"
              style={{
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px',
                border: '1px solid #3c3c3c',
                borderRadius: 0,
                fontSize: 15, fontWeight: 600, color: '#f0ebe3',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,33,10,0.5)'; e.currentTarget.style.color = '#c8210a' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#3c3c3c'; e.currentTarget.style.color = '#f0ebe3' }}
            >
              See Full Price List →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── DELIVERY BANNER ───────────────────────────────────────────── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: '#1a0a08',
        borderTop: '1px solid rgba(200,33,10,0.2)',
        borderBottom: '1px solid rgba(200,33,10,0.2)',
        padding: '64px 24px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${base}images/IMG_1035.JPG)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.12,
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '3px', color: '#c8210a', textTransform: 'uppercase', marginBottom: 12 }}>We Come to You</p>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 900, color: '#f0ebe3',
              textTransform: 'uppercase', marginBottom: 16, lineHeight: 1,
            }}>
              Delivery Available
            </h2>
            <p style={{ fontSize: 16, color: '#aaa', marginBottom: 36 }}>
              Within 20 miles round trip · Multiple truck sizes available
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 16, maxWidth: 600, margin: '0 auto 36px',
            }}>
              {[
                { size: '4–5 yards', price: '$95' },
                { size: '8–9 yards', price: '$110' },
                { size: '16–22 tons', price: '$135' },
              ].map(d => (
                <div key={d.size} style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderLeft: '4px solid #c8210a',
                  borderRadius: 0, padding: '20px 16px',
                  textAlign: 'left',
                }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: '#c8210a', fontFamily: "'Barlow Condensed', sans-serif", lineHeight: 1 }}>{d.price}</div>
                  <div style={{ fontSize: 13, color: '#aaa', marginTop: 4 }}>{d.size}</div>
                </div>
              ))}
            </div>
            <Link
              to="/products"
              style={{
                textDecoration: 'none', fontSize: 15, color: '#c8210a', fontWeight: 600,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              View full delivery details →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: 48, textAlign: 'center' }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '3px', color: '#c8210a', textTransform: 'uppercase', marginBottom: 12 }}>
              Our Yard &amp; Equipment
            </p>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 900, color: '#f0ebe3',
              lineHeight: 1, textTransform: 'uppercase',
            }}>
              See the Operation
            </h2>
          </motion.div>
          <Gallery limit={12} />
        </div>
      </section>

      {/* ── CONTACT STRIP ─────────────────────────────────────────────── */}
      <section style={{ background: '#242424', borderTop: '1px solid #3c3c3c', padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '3px', color: '#c8210a', textTransform: 'uppercase', marginBottom: 16 }}>
              Don't Be a Stranger
            </p>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(36px, 6vw, 68px)',
              fontWeight: 900, color: '#f0ebe3',
              textTransform: 'uppercase', lineHeight: 1, marginBottom: 20,
            }}>
              Give Us a Call
            </h2>
            <a
              href={PHONE_HREF}
              style={{
                display: 'inline-block',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(32px, 6vw, 60px)',
                fontWeight: 900, color: '#c8210a',
                textDecoration: 'none',
                letterSpacing: '-0.5px',
                transition: 'opacity 0.2s',
                marginBottom: 24,
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              {PHONE}
            </a>
            <p style={{ fontSize: 15, color: '#aaa', marginBottom: 6 }}>
              Mon–Fri 7am–4pm · Sat 7am–12pm (Seasonal)
            </p>
            <a
              href={ADDRESS_MAP}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 15, color: '#aaa', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: 6 }}
              onMouseEnter={e => e.currentTarget.style.color = '#f0ebe3'}
              onMouseLeave={e => e.currentTarget.style.color = '#aaa'}
            >
              <span className="material-icons" style={{ fontSize: 16 }}>location_on</span>
              {ADDRESS}
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
