import { motion } from 'framer-motion'
import { ADDRESS, ADDRESS_MAP, HOURS, isSaturdayClosedForSeason, SATURDAY_CLOSURE_DATE } from '../data/products'
import { HEADER_HEIGHT } from '../components/Navbar'

const base = import.meta.env.BASE_URL

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
    <main style={{ paddingTop: HEADER_HEIGHT }}>

      {/* Hero */}
      <div style={{ position: 'relative', height: 300, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${base}images/IMG_1386.jpg)`,
          backgroundSize: 'cover', backgroundPosition: 'center 30%',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.18) 70%, rgba(0,0,0,0.05) 100%)',
        }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, background: 'linear-gradient(to top, #161616, transparent)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 24px', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', color: '#c8210a', textTransform: 'uppercase', marginBottom: 10 }}>Find Us</p>
            <h1 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(40px, 7vw, 72px)',
              fontWeight: 900, color: '#f0ebe3',
              textTransform: 'uppercase', lineHeight: 1, marginBottom: 12,
            }}>Hours &amp; Location</h1>
            <p style={{ fontSize: 15, color: 'rgba(240,235,227,0.75)' }}>
              Stop by during business hours or give us a call first — either way works for us.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Seasonal Saturday closure callout */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px 0' }}>
        <motion.div {...fadeUp()} style={{
          background: 'rgba(200,33,10,0.08)',
          borderLeft: '4px solid #c8210a',
          padding: '16px 24px',
          display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
        }}>
          <span className="material-icons-outlined" style={{ fontSize: 20, color: '#c8210a', flexShrink: 0 }}>campaign</span>
          <p style={{ fontSize: 14, color: '#d0cbc3', flex: 1, lineHeight: 1.5 }}>
            <strong style={{ color: '#f0ebe3' }}>Fall Hours —</strong>{' '}
            {isSaturdayClosedForSeason()
              ? "Closed on Saturdays for the season. Stop by Monday–Friday, 7:00 AM–4:00 PM."
              : `Closed on Saturdays starting ${SATURDAY_CLOSURE_DATE}.`}
          </p>
        </motion.div>
      </div>

      {/* Main content — info left, photo right */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px 0' }}>
        <div className="hours-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 24, alignItems: 'stretch' }}>

          {/* Left: stacked info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Hours */}
            <motion.div {...fadeUp(0.1)} style={{ background: '#1e1e1e', borderLeft: '4px solid #c8210a', padding: '32px 28px' }}>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 22, fontWeight: 900, color: '#f0ebe3',
                textTransform: 'uppercase', marginBottom: 24,
                display: 'flex', alignItems: 'center', gap: 10, letterSpacing: '1px',
              }}>
                <span className="material-icons-outlined" style={{ fontSize: 22, color: '#c8210a' }}>schedule</span> Hours
              </h2>
              {HOURS.map((row, i) => (
                <div key={row.day} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 0',
                  borderBottom: i < HOURS.length - 1 ? '1px solid #2a2a2a' : 'none',
                  gap: 16,
                }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#f0ebe3' }}>{row.day}</div>
                    {row.note && <div style={{ fontSize: 11, color: '#888', marginTop: 2, letterSpacing: '0.5px' }}>{row.note}</div>}
                  </div>
                  <div style={{
                    fontSize: 16, fontWeight: 700,
                    color: row.time === 'Closed' ? '#555' : '#c8210a',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: '0.5px', whiteSpace: 'nowrap',
                  }}>{row.time}</div>
                </div>
              ))}
            </motion.div>

            {/* Address */}
            <motion.div {...fadeUp(0.2)} style={{ background: '#1e1e1e', borderLeft: '4px solid #c8210a', padding: '32px 28px' }}>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 22, fontWeight: 900, color: '#f0ebe3',
                textTransform: 'uppercase', marginBottom: 20,
                display: 'flex', alignItems: 'center', gap: 10, letterSpacing: '1px',
              }}>
                <span className="material-icons-outlined" style={{ fontSize: 22, color: '#c8210a' }}>location_on</span> Address
              </h2>
              <a href={ADDRESS_MAP} target="_blank" rel="noopener noreferrer" style={{
                display: 'block', textDecoration: 'none',
                fontSize: 17, fontWeight: 600, color: '#f0ebe3',
                lineHeight: 1.6, transition: 'color 0.2s', marginBottom: 12,
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#c8210a'}
                onMouseLeave={e => e.currentTarget.style.color = '#f0ebe3'}
              >{ADDRESS}</a>
              <span style={{ fontSize: 13, color: '#c8210a' }}>Open in Google Maps →</span>
            </motion.div>

          </div>

          {/* Right: photo — IMG_1381 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hours-photo"
            style={{ overflow: 'hidden', borderLeft: '4px solid #c8210a' }}
          >
            <div style={{ position: 'relative', height: '100%', minHeight: 300 }}>
              <img
                src={`${base}images/IMG_5444.jpeg`}
                alt="Gridley Gravel sign at the yard"
                className="hours-photo-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 50%', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)',
                padding: '32px 20px 18px',
              }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', lineHeight: 1.5 }}>
                  Pull in off River Road — look for the big red barn.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Map */}
      <div style={{ maxWidth: 1100, margin: '24px auto 0', padding: '0 24px' }}>
        <motion.div {...fadeUp()} style={{ overflow: 'hidden', borderLeft: '4px solid #c8210a' }}>
          <iframe
            title="Gridley Excavating Location"
            width="100%"
            height="380"
            frameBorder="0"
            style={{ display: 'block', filter: 'grayscale(0.2) invert(0.82) hue-rotate(180deg)' }}
            src="https://maps.google.com/maps?q=11244+River+Road+Corning+NY+14830&t=&z=14&ie=UTF8&iwloc=&output=embed"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>

      {/* Getting Here — new_5 as background */}
      <div style={{ maxWidth: 1100, margin: '24px auto 0', padding: '0 24px 80px' }}>
        <motion.div {...fadeUp()} style={{ position: 'relative', overflow: 'hidden', borderLeft: '4px solid #c8210a' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${base}images/new_5.jpg)`,
            backgroundSize: 'cover', backgroundPosition: 'center 55%',
          }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(18,18,18,0.82)' }} />
          <div style={{
            position: 'relative', zIndex: 1,
            padding: '28px 32px',
            display: 'flex', alignItems: 'flex-start', gap: 16,
          }}>
            <span className="material-icons-outlined" style={{ fontSize: 28, color: '#c8210a', flexShrink: 0, marginTop: 2 }}>local_shipping</span>
            <div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#f0ebe3', marginBottom: 8 }}>Getting Here</h3>
              <p style={{ fontSize: 14, color: '#bbb', lineHeight: 1.7 }}>
                We're on River Road — look for the big red barn. When you pull in, head toward the scale house and someone will get you squared away.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hours-grid { grid-template-columns: 1fr !important; }
          .hours-photo { height: 260px !important; }
          .hours-photo-img { object-position: center 40% !important; }
        }
      `}</style>

    </main>
  )
}
