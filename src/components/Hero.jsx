import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ zIndex: 1, paddingTop: '80px' }}
    >
      {/* Profile Photo */}
      <motion.div {...fadeUp(0.0)} className="mb-6">
        <div
          style={{
            padding: '4px',
            borderRadius: '50%',
            border: '3px solid transparent',
            background: `
              linear-gradient(white, white) padding-box,
              linear-gradient(var(--angle, 0deg), #ff0000, #ff7700, #ffff00, #00ff00, #0099ff, #8b00ff, #ff0000) border-box
            `,
            animation: 'rgb-angle 2s linear infinite',
            display: 'inline-block',
          }}
        >
          <img
            src="/shreyash.jpeg"
            alt="Shreyash Dehury"
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </motion.div>

      {/* Age badge */}
      <motion.div {...fadeUp(0.1)}>
        <span
          className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-xs tracking-widest uppercase"
          style={{
            border: '1px solid rgba(0,0,0,0.15)',
            borderRadius: '100px',
            color: '#555',
          }}
        >
          ✦ Age 14 &nbsp;·&nbsp; Rising Creator
        </span>
      </motion.div>

      {/* Label */}
      <motion.p
        {...fadeUp(0.2)}
        className="text-xs tracking-widest uppercase mb-4"
        style={{ color: '#888', letterSpacing: '0.35em' }}
      >
        Video Editor &amp; Creative
      </motion.p>

      {/* Name */}
      <motion.h1
        {...fadeUp(0.35)}
        style={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 900,
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          color: '#000',
        }}
      >
        Shreyash
        <br />
        <span style={{ color: '#000', WebkitTextStroke: '1px #000' }}>Dehury</span>
      </motion.h1>

      {/* Divider line */}
      <motion.div
        {...fadeUp(0.5)}
        style={{
          width: 56,
          height: 1,
          background: '#000',
          margin: '1.5rem auto',
        }}
      />

      {/* Meta */}
      <motion.div {...fadeUp(0.6)} className="flex flex-wrap items-center justify-center gap-6">
        <span className="flex items-center gap-2 text-sm" style={{ color: '#555' }}>
          🏫 <strong style={{ color: '#000' }}>Janta High School</strong>
        </span>
        <span style={{ color: '#ccc' }}>|</span>
        <span className="flex items-center gap-2 text-sm" style={{ color: '#555' }}>
          📍 <strong style={{ color: '#000' }}>Odisha, India</strong>
        </span>
        <span style={{ color: '#ccc' }}>|</span>
        <span className="flex items-center gap-2 text-sm" style={{ color: '#555' }}>
          🎬 <strong style={{ color: '#000' }}>Video Editor</strong>
        </span>
      </motion.div>

      {/* CTA */}
      <motion.div {...fadeUp(0.75)} className="mt-8">
        <a href="#contact" className="btn-primary">
          Hire Me ↓
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        {...fadeUp(1.0)}
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2"
        style={{ transform: 'translateX(-50%)' }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: '#bbb' }}>
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, #000, transparent)',
            animation: 'pulse 2s infinite',
          }}
        />
      </motion.div>
    </section>
  )
}