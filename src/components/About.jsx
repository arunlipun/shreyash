import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const cards = [
  {
    icon: '🎬',
    title: 'Storyteller',
    desc: 'I turn raw footage into cinematic experiences. Every cut, transition, and effect tells part of the story.',
  },
  {
    icon: '⚡',
    title: 'Fast Learner',
    desc: 'At 14, I have already mastered professional editing tools and I keep learning new techniques daily.',
  },
  {
    icon: '🎓',
    title: 'Student at Janta High',
    desc: 'Balancing academics and creativity at Janta High School, channelling my passion into every project.',
  },
  {
    icon: '🌟',
    title: 'Creative Vision',
    desc: 'I bring a fresh, youthful perspective — bold pacing, dynamic energy, and unforgettable visual style.',
  },
]

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-28 px-6 max-w-4xl mx-auto"
      style={{ position: 'relative', zIndex: 1 }}
    >
      <div className="reveal">
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#aaa' }}>
          About Me
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
          A Young Editor
          <br />
          With Big Vision
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {cards.map((c, i) => (
          <div key={i} className="about-card reveal">
            <div className="text-2xl mb-3">{c.icon}</div>
            <h3
              className="mb-2"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#000',
              }}
            >
              {c.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
