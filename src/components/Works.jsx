import { useEffect, useRef } from 'react'

const works = [
  {
    num: '01',
    cat: 'Short Film',
    title: 'Cinematic Reel',
    desc: 'A dramatic short film edit with deep colour grading and immersive sound design — every frame intentional.',
  },
  {
    num: '02',
    cat: 'Montage',
    title: 'School Life Montage',
    desc: 'Fast-paced montage of school memories, edited with dynamic transitions and music-sync beats.',
  },
  {
    num: '03',
    cat: 'VFX',
    title: 'Visual Effects Demo',
    desc: 'Exploring motion graphics and compositing — glitch effects, particle bursts, and text animations.',
  },
  {
    num: '04',
    cat: 'YouTube',
    title: 'Content Editing',
    desc: 'Clean, retention-optimised YouTube edits with compelling thumbnails and punchy pacing.',
  },
]

export default function Works() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="works"
      ref={sectionRef}
      className="py-28 px-6 max-w-4xl mx-auto"
      style={{ position: 'relative', zIndex: 1 }}
    >
      <div
        style={{
          width: '100%',
          height: '0.5px',
          background: 'rgba(0,0,0,0.08)',
          marginBottom: '4rem',
        }}
      />

      <div className="reveal">
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#aaa' }}>
          Portfolio
        </p>
        <h2
          className="mb-10"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            lineHeight: 1.1,
            color: '#000',
          }}
        >
          Selected Works
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {works.map((w, i) => (
          <div key={i} className="work-card reveal">
            <p className="work-num text-xs tracking-widest uppercase mb-3" style={{ color: '#aaa' }}>
              {w.num} — {w.cat}
            </p>
            <h3
              className="work-text mb-2 transition-colors duration-300"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#000',
              }}
            >
              {w.title}
            </h3>
            <p className="work-text text-sm leading-relaxed transition-colors duration-300" style={{ color: '#666' }}>
              {w.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
