import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GALLERY_IMAGES } from '../data/products'

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,0.93)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
      }}
    >
      {/* Prev */}
      <button
        onClick={e => { e.stopPropagation(); onPrev() }}
        style={{
          position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
          color: '#fff', width: 48, height: 48, borderRadius: 0,
          fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
          zIndex: 201,
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,33,10,0.5)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
      ><span className="material-icons" style={{ fontSize: 22 }}>chevron_left</span></button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          onClick={e => e.stopPropagation()}
          style={{
            maxWidth: '90vw', maxHeight: '88vh',
            objectFit: 'contain', borderRadius: 0,
            boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
          }}
        />
      </AnimatePresence>

      {/* Next */}
      <button
        onClick={e => { e.stopPropagation(); onNext() }}
        style={{
          position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
          color: '#fff', width: 48, height: 48, borderRadius: 0,
          fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
          zIndex: 201,
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,33,10,0.5)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
      ><span className="material-icons" style={{ fontSize: 22 }}>chevron_right</span></button>

      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 16, right: 16,
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
          color: '#fff', width: 40, height: 40, borderRadius: 0,
          fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,33,10,0.5)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
      ><span className="material-icons" style={{ fontSize: 18 }}>close</span></button>

      {/* Counter */}
      <div style={{
        position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
        fontSize: 13, color: 'rgba(255,255,255,0.4)', letterSpacing: '1px',
      }}>
        {index + 1} / {images.length}
      </div>
    </motion.div>
  )
}

export default function Gallery({ limit }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const images = limit ? GALLERY_IMAGES.slice(0, limit) : GALLERY_IMAGES

  const openLightbox = useCallback((i) => setLightboxIndex(i), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() => setLightboxIndex(i => (i - 1 + images.length) % images.length), [images.length])
  const nextImage = useCallback(() => setLightboxIndex(i => (i + 1) % images.length), [images.length])

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 12,
      }}>
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
            onClick={() => openLightbox(i)}
            whileHover={{ scale: 1.02 }}
            style={{
              cursor: 'pointer',
              overflow: 'hidden',
              borderRadius: 0,
              aspectRatio: '4/3',
              background: '#242424',
              position: 'relative',
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform 0.4s ease',
                display: 'block',
              }}
              onError={e => { e.currentTarget.parentElement.style.display = 'none' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)',
              transition: 'opacity 0.3s',
              opacity: 0,
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0'}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  )
}
