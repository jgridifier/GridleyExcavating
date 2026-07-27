import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  PRICING_TIERS,
  RETAIL_SOIL, RETAIL_MULCH,
  RETAIL_CRUSHED_STONE, RETAIL_ROUND_STONE, RETAIL_SAND_GRAVEL, RETAIL_SPECIALTY,
  CONTRACTOR_CRUSHED_STONE, CONTRACTOR_ROUND_STONE, CONTRACTOR_SAND_GRAVEL, CONTRACTOR_SPECIALTY,
  CONTRACTOR_YARD_ONLY_NOTE,
  DELIVERY, DELIVERY_NOTE,
  PHONE_HREF, PHONE,
} from '../data/products'

const base = import.meta.env.BASE_URL

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }
}

function SectionHeader({ label, title }) {
  return (
    <motion.div {...fadeUp()} style={{ marginBottom: 32, borderLeft: '4px solid #c8210a', paddingLeft: 16 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', color: '#c8210a', textTransform: 'uppercase', marginBottom: 6 }}>{label}</p>
      <h2 style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 'clamp(30px, 4vw, 44px)',
        fontWeight: 900, color: '#f0ebe3',
        textTransform: 'uppercase', lineHeight: 1,
      }}>{title}</h2>
    </motion.div>
  )
}

function MoodStrip({ src, alt, position = 'center' }) {
  return (
    <motion.div
      {...fadeUp()}
      style={{
        position: 'relative',
        height: 280,
        overflow: 'hidden',
        marginBottom: 36,
        borderLeft: '4px solid #c8210a',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${base}images/${src})`,
        backgroundSize: 'cover',
        backgroundPosition: position,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.1) 100%)',
      }} />
    </motion.div>
  )
}

function ProductCard({ name, price, img, imgPosition = 'center 50%', index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{
        background: '#1e1e1e',
        borderLeft: '4px solid #c8210a',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {img && (
        <div style={{ height: 140, overflow: 'hidden', flexShrink: 0 }}>
          <img
            src={`${base}images/${img}`}
            alt={name}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: imgPosition, display: 'block' }}
          />
        </div>
      )}
      <div style={{ padding: '14px 18px', flex: 1 }}>
        <div style={{ fontSize: 14, color: '#d0cbc3', lineHeight: 1.4, marginBottom: 8 }}>{name}</div>
        <div style={{
          fontSize: 16, fontWeight: 700, color: '#f0ebe3',
          fontFamily: "'Barlow Condensed', sans-serif",
          letterSpacing: '0.5px',
        }}>{price}</div>
      </div>
    </motion.div>
  )
}

function SubGroupLabel({ children }) {
  return (
    <h3 style={{
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 15, fontWeight: 700, color: '#c8210a',
      textTransform: 'uppercase', letterSpacing: '1.5px',
      marginBottom: 12, marginTop: 28,
    }}>{children}</h3>
  )
}

function PriceGroup({ title, items, index = 0 }) {
  const withPhoto = items.filter(p => p.img)
  const withoutPhoto = items.filter(p => !p.img)
  return (
    <div style={{ marginBottom: 12 }}>
      <SubGroupLabel>{title}</SubGroupLabel>
      {withPhoto.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 12, marginBottom: withoutPhoto.length > 0 ? 12 : 0,
        }}>
          {withPhoto.map((item, i) => (
            <ProductCard key={item.name} name={item.name} price={item.price} img={item.img} imgPosition={item.imgPosition} index={index + i} />
          ))}
        </div>
      )}
      {withoutPhoto.length > 0 && (
        <div style={{ background: '#1e1e1e', borderLeft: '4px solid #c8210a', padding: '4px 24px' }}>
          {withoutPhoto.map((item, i) => (
            <TextPriceRow key={item.name} name={item.name} note={item.note} price={item.price} index={index + i} />
          ))}
        </div>
      )}
    </div>
  )
}

function StickyTierBar({ tier, setTier }) {
  return (
    <div style={{
      position: 'sticky', top: 68, zIndex: 90,
      background: 'rgba(22,22,22,0.97)',
      backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid #2a2a2a',
    }}>
      <div className="sticky-tier-row" style={{
        maxWidth: 1200, margin: '0 auto', padding: '14px 24px',
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <span style={{
          fontSize: 11, color: '#888', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '2px', flexShrink: 0,
        }}>
          Pricing For
        </span>
        <div className="sticky-tier-group" style={{
          display: 'flex', background: '#1e1e1e',
          border: '1px solid #3c3c3c', borderRadius: 12, padding: 4, gap: 4,
        }}>
          {PRICING_TIERS.map(t => {
            const active = t.key === tier
            return (
              <button
                key={t.key}
                onClick={() => setTier(t.key)}
                className="sticky-tier-btn"
                style={{
                  cursor: 'pointer',
                  textAlign: 'center',
                  border: 'none',
                  borderRadius: 8,
                  padding: '8px 20px',
                  background: active ? '#c8210a' : 'transparent',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background = '#2a2a2a' }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
              >
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 15, fontWeight: 800, lineHeight: 1.3,
                  color: active ? '#fff' : '#d0cbc3',
                  textTransform: 'uppercase', letterSpacing: '0.5px',
                  whiteSpace: 'nowrap',
                }}>
                  {t.label}
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 600, lineHeight: 1.3,
                  color: active ? 'rgba(255,255,255,0.85)' : '#888',
                  whiteSpace: 'nowrap',
                }}>
                  {t.sublabel}
                </div>
                <div style={{
                  fontSize: 10, lineHeight: 1.3, marginTop: 1,
                  color: active ? 'rgba(255,255,255,0.6)' : '#666',
                }}>
                  {t.audience}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .sticky-tier-row { flex-direction: column; align-items: stretch !important; gap: 6px !important; padding: 10px 16px !important; }
          .sticky-tier-group { width: 100%; }
          .sticky-tier-btn { flex: 1 1 0; padding: 7px 8px !important; }
        }
      `}</style>
    </div>
  )
}

function TextPriceRow({ name, note, price, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', gap: 24 }}
    >
      <div>
        <span style={{ fontSize: 14, color: '#d0cbc3' }}>{name}</span>
        {note && (
          <div style={{ fontSize: 11, color: '#666', fontStyle: 'italic', marginTop: 2 }}>{note}</div>
        )}
      </div>
      <span style={{
        fontSize: 15, fontWeight: 700, color: '#f0ebe3',
        whiteSpace: 'nowrap', flexShrink: 0,
        fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '1px',
      }}>{price}</span>
    </motion.div>
  )
}

export default function Products() {
  const [tier, setTier] = useState('retail')
  const isRetail = tier === 'retail'
  const activeTier = PRICING_TIERS.find(t => t.key === tier)

  const crushedStone = isRetail ? RETAIL_CRUSHED_STONE : CONTRACTOR_CRUSHED_STONE
  const roundStone = isRetail ? RETAIL_ROUND_STONE : CONTRACTOR_ROUND_STONE
  const sandGravel = isRetail ? RETAIL_SAND_GRAVEL : CONTRACTOR_SAND_GRAVEL
  const specialty = isRetail ? RETAIL_SPECIALTY : CONTRACTOR_SPECIALTY

  return (
    <main style={{ paddingTop: 68 }}>

      {/* Hero banner */}
      <div style={{ position: 'relative', height: 260, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${base}images/IMG_1379.jpg)`,
          backgroundSize: 'cover', backgroundPosition: 'center 48%',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 100%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 24px', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <motion.h1
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(40px, 7vw, 72px)',
              fontWeight: 900, color: '#f0ebe3',
              textTransform: 'uppercase', lineHeight: 1,
            }}
          >
            Products &amp;<br /><span style={{ color: '#c8210a' }}>Pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginTop: 10 }}
          >
            Updated 07/26/2026 · Plus applicable tax
          </motion.p>
        </div>
      </div>

      {/* Sticky tier toggle — pinned below navbar as the page scrolls */}
      <StickyTierBar tier={tier} setTier={setTier} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 64px' }}>

        {/* Alert banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tier}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'rgba(200,33,10,0.08)',
              borderLeft: '4px solid #c8210a',
              borderRadius: 0, padding: '16px 24px',
              marginBottom: 72,
              display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
            }}>
            <span className="material-icons-outlined" style={{ fontSize: 20, color: '#c8210a', flexShrink: 0 }}>help_outline</span>
            <p style={{ fontSize: 14, color: '#d0cbc3', flex: 1, lineHeight: 1.5 }}>
              <strong style={{ color: '#f0ebe3' }}>{activeTier.minNote}</strong> · Open accounts available with approved credit application · Net 30 payment terms
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ── GRAVEL & STONE ─────────────────────────────────────────── */}
        <section style={{ marginBottom: 80 }}>
          <SectionHeader label="Stone & Aggregates" title="Gravel & Stone" />
          <MoodStrip src="new_3.jpg" alt="Sandvik crusher at the quarry" position="center 45%" />

          <AnimatePresence mode="wait">
            <motion.div
              key={tier}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <PriceGroup title="Crushed Stone" items={crushedStone} />
              <PriceGroup title="Round Stone" items={roundStone} />
              <PriceGroup title="Sand & Gravel" items={sandGravel} />
              <PriceGroup title="Specialty" items={specialty} />
            </motion.div>
          </AnimatePresence>
        </section>

        <div style={{ height: 1, background: '#2a2a2a', marginBottom: 80 }} />

        {isRetail ? (
          <>
            {/* ── TOPSOIL ─────────────────────────────────────────────── */}
            <section style={{ marginBottom: 80 }}>
              <SectionHeader label="Dirt & Fill" title="Topsoil" />
              <MoodStrip src="IMG_1192.jpg" alt="Gridley yard with stone piles and mountains" position="center 35%" />
              <PriceGroup title="Soil" items={RETAIL_SOIL} />
            </section>

            <div style={{ height: 1, background: '#2a2a2a', marginBottom: 80 }} />

            {/* ── MULCH ───────────────────────────────────────────────── */}
            <section style={{ marginBottom: 80 }}>
              <SectionHeader label="Landscaping" title="Mulch" />
              <MoodStrip src="IMG_1377.jpg" alt="John Deere 644K loader at Gridley yard" position="center 40%" />

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: 12,
              }}>
                {RETAIL_MULCH.map((item, i) => (
                  <ProductCard key={item.name} name={item.name} price={item.price} img={item.img} index={i} />
                ))}
              </div>
            </section>

            <div style={{ height: 1, background: '#2a2a2a', margin: '0 0 80px' }} />
          </>
        ) : (
          <motion.div {...fadeUp()} style={{
            background: '#1e1e1e',
            borderLeft: '4px solid rgba(200,33,10,0.5)',
            padding: '20px 24px',
            marginBottom: 80,
            display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
          }}>
            <span className="material-icons-outlined" style={{ fontSize: 20, color: '#c8210a', flexShrink: 0 }}>tips_and_updates</span>
            <p style={{ fontSize: 14, color: '#aaa', flex: 1, lineHeight: 1.5 }}>
              {CONTRACTOR_YARD_ONLY_NOTE}
            </p>
            <button
              onClick={() => setTier('retail')}
              style={{
                cursor: 'pointer', background: 'transparent',
                border: '1px solid #3c3c3c', color: '#f0ebe3',
                padding: '8px 16px', fontSize: 13, fontWeight: 600,
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,33,10,0.5)'; e.currentTarget.style.color = '#c8210a' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#3c3c3c'; e.currentTarget.style.color = '#f0ebe3' }}
            >
              View Retail Pricing →
            </button>
          </motion.div>
        )}

        {/* ── DELIVERY ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeader label="We Deliver" title="Delivery Charges" />
          <p style={{ fontSize: 14, color: '#aaa', marginBottom: 32 }}>{DELIVERY_NOTE}</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16,
          }}>
            {DELIVERY.map((d, i) => (
              <motion.div
                key={d.size}
                {...fadeUp(i * 0.1)}
                whileHover={{ x: 4 }}
                style={{
                  background: '#1e1e1e',
                  borderLeft: '4px solid #c8210a',
                  borderRadius: 0, padding: '28px 24px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#262626'}
                onMouseLeave={e => e.currentTarget.style.background = '#1e1e1e'}
              >
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 52, fontWeight: 900, color: '#c8210a', lineHeight: 1, marginBottom: 8,
                }}>{d.price}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#f0ebe3', marginBottom: 6 }}>{d.size}</div>
                <div style={{ fontSize: 13, color: '#aaa' }}>{d.trucks}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <motion.div {...fadeUp()} style={{
          background: '#1e1e1e',
          borderLeft: '4px solid #c8210a',
          borderRadius: 0, padding: '40px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 24,
        }}>
          <div>
            <h3 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 28, fontWeight: 900, color: '#f0ebe3',
              textTransform: 'uppercase', marginBottom: 8,
            }}>Not Sure What You Need?</h3>
            <p style={{ fontSize: 15, color: '#aaa' }}>Give us a call — we're happy to help.</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href={PHONE_HREF}
              style={{
                textDecoration: 'none', padding: '12px 24px',
                background: '#c8210a', color: '#fff',
                borderRadius: 0, fontWeight: 700, fontSize: 15,
                transition: 'background 0.2s',
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: '0.5px',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#e02a0e'}
              onMouseLeave={e => e.currentTarget.style.background = '#c8210a'}
            >
              <span className="material-icons" style={{ fontSize: 16 }}>phone</span> {PHONE}
            </a>
            <a
              href={`${base}${isRetail ? 'RetailPriceSheet.pdf' : 'ContractorPriceSheet.pdf'}`}
              download
              style={{
                textDecoration: 'none', padding: '12px 24px',
                border: '1px solid #3c3c3c', color: '#f0ebe3',
                borderRadius: 0, fontWeight: 600, fontSize: 15,
                transition: 'border-color 0.2s, color 0.2s',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,33,10,0.5)'; e.currentTarget.style.color = '#c8210a' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#3c3c3c'; e.currentTarget.style.color = '#f0ebe3' }}
            >
              <span className="material-icons-outlined" style={{ fontSize: 16 }}>download</span>Download {activeTier.label} Price Sheet (PDF)
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  )
}
