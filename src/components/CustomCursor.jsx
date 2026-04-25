import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mousePos = useRef({ x: -200, y: -200 })
  const ringPos = useRef({ x: -200, y: -200 })
  const rafRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current

    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
    }

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.14
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.14
      ring.style.left = ringPos.current.x + 'px'
      ring.style.top = ringPos.current.y + 'px'
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMove)

    const addHover = (el) => {
      el.addEventListener('mouseenter', () => {
        dot.classList.add('hovering')
        ring.classList.add('hovering')
      })
      el.addEventListener('mouseleave', () => {
        dot.classList.remove('hovering')
        ring.classList.remove('hovering')
      })
    }

    const targets = document.querySelectorAll(
      'a, button, .work-card, .about-card, .skill-pill, .contact-btn, .btn-primary, input, textarea'
    )
    targets.forEach(addHover)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
