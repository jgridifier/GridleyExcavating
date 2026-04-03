import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  GRAVEL, GRAVEL_YARD_NOTE, MIN_LOADING,
  TOPSOIL, MULCH,
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

function PriceRow({ name, price, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        padding: '13px 0',
        borderBottom: '1px solid #2a2a2a',
      }}
    >
      <span style={{ fontSize: 15, color: '#d0cbc3', flexShrink: 0, paddingBottom: 2 }}>{name}</span>
      <span style={{ flex: 1, borderBottom: '1px dotted #454545', marginBottom: 5, marginLeft: 8, marginRight: 8 }} />
      <span style={{
        fontSize: 16, fontWeight: 700, color: '#f0ebe3',
        whiteSpace: 'nowrap', flexShrink: 0,
        fontFamily: "'Barlow Condensed', sans-serif",
        letterSpacing: '1px',
      }}>{price}</span>
    </motion.div>
  )
}

function SectionHeader({ label, title }) {
  return (
    <motion.div {...fadeUp()} style={{ marginBottom: 32, borderLeft: '4px solid #c8210a', paddingLeft: 16 }}>
      <p style={{
        fontSize: 11, fontWeight: 700, letterSpacing: '3px',
        color: '#c8210a', textTransform: 'uppercase', marginBottom: 6,
      }}>{label}</p>
      <h2 style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 'clamp(30px, 4vw, 44px)',
        fontWeight: 900, color: '#f0ebe3',
        textTransform: 'uppercase', lineHeight: 1,
      }}>{title}</h2>
    </motion.div>
  )
}

const TABS = ['Gravel & Stone', 'Topsoil', 'Mulch']

export default function Products() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <main style={{ paddingTop: 68 }}>
      {/* Hero banner */}
      <div style={{
        position: 'relative', height: 260, overflow: 'hidden',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${base}images/IMG_1033.JPG)`,
          backgroundSize: 'cover', backgroundPosition: 'center 48%',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)',
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
            Updated 03/17/2026 · Plus applicable tax · Prices subject to change
          </motion.p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px' }}>

        {/* Alert banner */}
        <motion.div {...fadeUp()} style={{
          background: 'rgba(200,33,10,0.08)',
          borderLeft: '4px solid #c8210a',
          borderRadius: 0, padding: '16px 24px',
          marginBottom: 56,
          display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
        }}>
          <span className="material-icons-outlined" style={{ fontSize: 20, color: '#c8210a', flexShrink: 0 }}>info</span>
          <p style={{ fontSize: 14, color: '#d0cbc3', flex: 1, lineHeight: 1.5 }}>
            <strong style={{ color: '#f0ebe3' }}>Minimum loading charge for pickup: $30.00</strong> · Open accounts available with approved credit application · Net 30 payment terms
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div {...fadeUp(0.05)} style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                padding: '10px 24px',
                borderRadius: 0,
                border: 'none',
                borderBottom: activeTab === i ? '3px solid #c8210a' : '3px solid transparent',
                background: 'transparent',
                color: activeTab === i ? '#f0ebe3' : '#666',
                fontSize: 15, fontWeight: 600, cursor: 'pointer',
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: '0.5px',
                transition: 'all 0.2s',
              }}
            >{tab}</button>
          ))}
        </motion.div>

        {/* Gravel */}
        {activeTab === 0 && (
          <div>
            <SectionHeader label="Stone & Aggregates" title="Gravel Products" />
            <div style={{ background: '#242424', borderLeft: '4px solid #c8210a', padding: '8px 24px', marginBottom: 20 }}>
              {GRAVEL.map((item, i) => (
                <PriceRow key={item.name} name={item.name} price={item.price} index={i} />
              ))}
            </div>
            <motion.div {...fadeUp(0.1)} style={{
              background: 'rgba(200,33,10,0.07)',
              borderLeft: '4px solid rgba(200,33,10,0.5)',
              borderRadius: 0, padding: '16px 20px',
              fontSize: 14, color: '#aaa', lineHeight: 1.6, marginBottom: 12,
            }}>
              <span style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <span className="material-icons-outlined" style={{ fontSize: 16, color: '#c8210a', flexShrink: 0, marginTop: 1 }}>tips_and_updates</span>
                {GRAVEL_YARD_NOTE}
              </span>
            </motion.div>
          </div>
        )}

        {/* Topsoil */}
        {activeTab === 1 && (
          <div>
            <SectionHeader label="Dirt & Fill" title="Topsoil Products" />
            <div style={{ background: '#242424', borderLeft: '4px solid #c8210a', padding: '8px 24px', marginBottom: 20 }}>
              {TOPSOIL.map((item, i) => (
                <PriceRow key={item.name} name={item.name} price={item.price} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Mulch */}
        {activeTab === 2 && (
          <div>
            <SectionHeader label="Landscaping" title="Mulch Products" />
            <div style={{ background: '#242424', borderLeft: '4px solid #c8210a', padding: '8px 24px', marginBottom: 20 }}>
              {MULCH.map((item, i) => (
                <PriceRow key={item.name} name={item.name} price={item.price} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div style={{ height: 1, background: '#3c3c3c', margin: '64px 0' }} />

        {/* Delivery */}
        <div style={{ marginBottom: 64 }}>
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
                  background: '#242424',
                  borderLeft: '4px solid #c8210a',
                  borderRadius: 0, padding: '28px 24px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#2a2a2a'}
                onMouseLeave={e => e.currentTarget.style.background = '#242424'}
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
        </div>

        {/* PDF + CTA */}
        <motion.div {...fadeUp()} style={{
          background: '#242424',
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
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#e02a0e'}
              onMouseLeave={e => e.currentTarget.style.background = '#c8210a'}
            >
              <span className="material-icons" style={{ fontSize: 16 }}>phone</span> {PHONE}
            </a>
            <a
              href={`${base}GridleyExcavatingPriceSheet.pdf`}
              download
              style={{
                textDecoration: 'none', padding: '12px 24px',
                border: '1px solid #3c3c3c', color: '#f0ebe3',
                borderRadius: 0, fontWeight: 600, fontSize: 15,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,33,10,0.5)'; e.currentTarget.style.color = '#c8210a' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#3c3c3c'; e.currentTarget.style.color = '#f0ebe3' }}
            >
              <span className="material-icons-outlined" style={{ fontSize: 16, verticalAlign: 'middle', marginRight: 6 }}>download</span>Download Price Sheet (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
