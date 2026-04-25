import { useEffect, useRef } from 'react'

const skills = [
  'Video Editing',
  'Color Grading',
  'Motion Graphics',
  'Transitions & Cuts',
  'Sound Design',
  'Adobe Premiere Pro',
  'After Effects',
  'CapCut',
  'DaVinci Resolve',
  'VFX Basics',
  'Thumbnail Design',
  'YouTube Editing',
  'Reels / Shorts',
  'Storytelling',
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
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
      id="skills"
      ref={sectionRef}
      className="py-28 px-6 max-w-4xl mx-auto"
      style={{ position: 'relative', zIndex: 1 }}
    >
      <div
        className="mb-4"
        style={{
          width: '100%',
          height: '0.5px',
          background: 'rgba(0,0,0,0.08)',
          marginBottom: '4rem',
        }}
      />

      <div className="reveal">
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#aaa' }}>
          What I Do
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
          Skills &amp; Tools
        </h2>
      </div>

      <div className="flex flex-wrap gap-3 reveal">
        {skills.map((s, i) => (
          <span key={i} className="skill-pill">
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}
