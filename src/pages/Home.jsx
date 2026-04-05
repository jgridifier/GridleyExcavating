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
    title: 'Gravel & Stone',
    desc: 'We carry everything from Item #4 for driveways to fine crushed stone for drainage. Not sure which one you need?',
    highlight: 'Most products $30/yard',
    img: 'IMG_1348.jpg',
    position: 'center 35%',
  },
  {
    title: 'Topsoil',
    desc: 'Screened topsoil for lawns and gardens, SHED topsoil, or straight overburden for fill.',
    highlight: 'From $9.00/yard',
    img: 'IMG_1338.jpg',
    position: 'center 30%',
  },
  {
    title: 'Mulch',
    desc: 'Double ground hardwood in brown, black, or red, and playground-certified mulch.',
    highlight: 'From $27.78/yard',
    img: 'IMG_1332.jpg',
    position: 'center 40%',
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

      {/* ── WHAT WE CARRY ─────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: 48, borderLeft: '4px solid #c8210a', paddingLeft: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', color: '#c8210a', textTransform: 'uppercase', marginBottom: 8 }}>
              What We Carry
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
            gap: 16,
          }}>
            {productCategories.map((cat, i) => (
              <Link key={cat.title} to="/products" style={{ textDecoration: 'none' }}>
                <motion.div
                  {...fadeUp(i * 0.1)}
                  style={{
                    position: 'relative',
                    aspectRatio: '3/4',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={`${base}images/${cat.img}`}
                    alt={cat.title}
                    loading="lazy"
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: cat.position,
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* gradient overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.05) 100%)',
                  }} />
                  {/* left-rail accent */}
                  <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: '#c8210a' }} />
                  {/* text */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 24px 24px' }}>
                    <h3 style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 32, fontWeight: 900, color: '#f0ebe3',
                      textTransform: 'uppercase', lineHeight: 1, marginBottom: 8,
                    }}>{cat.title}</h3>
                    <p style={{ fontSize: 13, color: 'rgba(240,235,227,0.75)', lineHeight: 1.5, marginBottom: 12 }}>{cat.desc}</p>
                    <span style={{
                      fontSize: 13, fontWeight: 700, color: '#c8210a',
                      fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.5px',
                    }}>{cat.highlight} →</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERY — 50/50 with new_7 ───────────────────────────────── */}
      <section style={{ borderTop: '1px solid #2a2a2a', borderBottom: '1px solid #2a2a2a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="delivery-grid">
          {/* Left: info */}
          <div style={{ padding: '72px 48px', background: '#161616' }}>
            <motion.div {...fadeUp()}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', color: '#c8210a', textTransform: 'uppercase', marginBottom: 12 }}>We Come to You</p>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 900, color: '#f0ebe3',
                textTransform: 'uppercase', marginBottom: 12, lineHeight: 1,
              }}>
                Delivery Available
              </h2>
              <p style={{ fontSize: 15, color: '#888', marginBottom: 40, lineHeight: 1.6 }}>
                Within 20 miles round trip. We run single axle, tandem, and tri-axle trucks — whatever the job calls for.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
                {[
                  { size: '4–5 yards', price: '$95' },
                  { size: '8–9 yards', price: '$110' },
                  { size: '16–22 tons', price: '$135' },
                ].map(d => (
                  <div key={d.size} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    borderLeft: '4px solid #c8210a', padding: '14px 20px',
                    background: '#1e1e1e',
                  }}>
                    <span style={{ fontSize: 15, color: '#d0cbc3' }}>{d.size}</span>
                    <span style={{ fontSize: 24, fontWeight: 900, color: '#f0ebe3', fontFamily: "'Barlow Condensed', sans-serif" }}>{d.price}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/products"
                style={{ textDecoration: 'none', fontSize: 14, color: '#c8210a', fontWeight: 600, transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Full delivery details →
              </Link>
            </motion.div>
          </div>

          {/* Right: new_7 — no overlay, full fidelity */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ overflow: 'hidden', minHeight: 480 }}
            className="delivery-photo"
          >
            <img
              src={`${base}images/new_7.jpg`}
              alt="Volvo EC750EL excavator with operator for scale"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: 48, borderLeft: '4px solid #c8210a', paddingLeft: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', color: '#c8210a', textTransform: 'uppercase', marginBottom: 8 }}>
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
      <section style={{
        position: 'relative', overflow: 'hidden',
        borderTop: '1px solid #3c3c3c', padding: '80px 24px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${base}images/IMG_1383.jpg)`,
          backgroundSize: 'cover', backgroundPosition: 'center 40%',
          opacity: 0.08,
        }} />
        <div style={{ position: 'absolute', inset: 0, background: '#1a1a1a' , opacity: 0.85 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <motion.div {...fadeUp()}>
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
      <style>{`
        @media (max-width: 768px) {
          .delivery-grid { grid-template-columns: 1fr !important; }
          .delivery-photo { min-height: 320px !important; }
          .delivery-photo img { clip-path: inset(10% 0); }
        }
      `}</style>
    </main>
  )
}
