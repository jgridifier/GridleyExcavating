import { motion } from 'framer-motion'
import { PHONE, PHONE_HREF, ADDRESS, ADDRESS_MAP } from '../data/products'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }
}

export default function Hours() {
  return (
    <main style={{ paddingTop: 68 }}>
      {/* Photo banner */}
      <div style={{
        position: 'relative', height: 320, overflow: 'hidden',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${import.meta.env.BASE_URL}images/IMG_1386.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
          background: 'linear-gradient(to top, #161616, transparent)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 24px', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', color: '#c8210a', textTransform: 'uppercase', marginBottom: 10 }}>
              Find Us
            </p>
            <h1 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(40px, 7vw, 72px)',
              fontWeight: 900, color: '#f0ebe3',
              textTransform: 'uppercase', lineHeight: 1, marginBottom: 12,
            }}>
              Hours &amp; Location
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(240,235,227,0.7)' }}>
              Stop by during business hours or give us a call first — either way works for us.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {/* Hours card */}
          <motion.div {...fadeUp(0.1)} style={{
            background: '#242424',
            borderLeft: '4px solid #c8210a',
            borderRadius: 0, padding: '36px 32px',
          }}>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 28, fontWeight: 900, color: '#f0ebe3',
              textTransform: 'uppercase', marginBottom: 28,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span className="material-icons-outlined" style={{ fontSize: 26 }}>schedule</span> Hours
            </h2>

            {[
              { days: 'Monday – Friday', hours: '7:00 AM – 4:00 PM', open: true },
              { days: 'Saturday', hours: '7:00 AM – 12:00 PM', open: true, note: 'Seasonal' },
              { days: 'Sunday', hours: 'Closed', open: false },
            ].map((row, i) => (
              <div
                key={row.days}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '16px 0',
                  borderBottom: i < 2 ? '1px solid #3c3c3c' : 'none',
                  gap: 16,
                }}
              >
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#f0ebe3' }}>{row.days}</div>
                  {row.note && (
                    <div style={{ fontSize: 11, color: '#aaa', marginTop: 2, letterSpacing: '0.5px' }}>{row.note}</div>
                  )}
                </div>
                <div style={{
                  fontSize: 15, fontWeight: 700,
                  color: row.open ? '#c8210a' : '#777',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: '0.5px', whiteSpace: 'nowrap',
                }}>
                  {row.hours}
                </div>
              </div>
            ))}

            <div style={{
              marginTop: 24, padding: '14px 16px',
              background: 'rgba(200,33,10,0.08)',
              borderLeft: '3px solid #c8210a',
              borderRadius: 0,
              fontSize: 13, color: '#aaa', lineHeight: 1.5,
            }}>
              <span style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <span className="material-icons-outlined" style={{ fontSize: 15, flexShrink: 0, marginTop: 1 }}>info</span>
                Saturday hours are seasonal and may vary — worth a quick call before heading out.
              </span>
            </div>
          </motion.div>

          {/* Contact card */}
          <motion.div {...fadeUp(0.15)} style={{
            background: '#242424',
            borderLeft: '4px solid #c8210a',
            borderRadius: 0, padding: '36px 32px',
          }}>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 28, fontWeight: 900, color: '#f0ebe3',
              textTransform: 'uppercase', marginBottom: 28,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span className="material-icons-outlined" style={{ fontSize: 26 }}>phone</span> Contact
            </h2>

            <a
              href={PHONE_HREF}
              style={{
                display: 'block', textDecoration: 'none',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 40, fontWeight: 900, color: '#c8210a',
                lineHeight: 1, marginBottom: 8, letterSpacing: '-0.5px',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              {PHONE}
            </a>
            <p style={{ fontSize: 14, color: '#aaa', marginBottom: 28 }}>Tap to call on mobile</p>

            <div style={{ borderTop: '1px solid #3c3c3c', paddingTop: 24 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '2px', color: '#aaa', textTransform: 'uppercase', marginBottom: 10 }}>Address</p>
              <a
                href={ADDRESS_MAP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block', textDecoration: 'none',
                  fontSize: 16, fontWeight: 600, color: '#f0ebe3',
                  lineHeight: 1.5, transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#c8210a'}
                onMouseLeave={e => e.currentTarget.style.color = '#f0ebe3'}
              >
                {ADDRESS}
              </a>
              <p style={{ fontSize: 13, color: '#c8210a', marginTop: 8, cursor: 'pointer' }}>
                Open in Google Maps →
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map embed */}
        <motion.div {...fadeUp(0.2)} style={{ marginTop: 24, borderRadius: 0, overflow: 'hidden', borderLeft: '4px solid #c8210a' }}>
          <iframe
            title="Gridley Excavating Location"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ display: 'block', filter: 'grayscale(0.3) invert(0.85) hue-rotate(180deg)' }}
            src="https://maps.google.com/maps?q=11244+River+Road+Corning+NY+14830&t=&z=14&ie=UTF8&iwloc=&output=embed"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>

        {/* Directions note */}
        <motion.div {...fadeUp(0.25)} style={{
          marginTop: 24,
          background: '#242424', borderLeft: '4px solid #c8210a',
          borderRadius: 0, padding: '24px 28px',
          display: 'flex', alignItems: 'flex-start', gap: 16,
        }}>
          <span className="material-icons-outlined" style={{ fontSize: 28, color: '#c8210a', flexShrink: 0, marginTop: 2 }}>local_shipping</span>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f0ebe3', marginBottom: 6 }}>Getting Here</h3>
            <p style={{ fontSize: 14, color: '#aaa', lineHeight: 1.65 }}>
              We're on River Road — look for the big red barn. When you pull in, head toward the scale house and someone will get you squared away.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
