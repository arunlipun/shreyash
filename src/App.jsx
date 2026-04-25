import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: true, mode: 'push' },
      },
      modes: {
        grab: { distance: 180, links: { opacity: 0.3 } },
        push: { quantity: 3 },
      },
    },
    particles: {
      color: { value: '#000000' },
      links: {
        color: '#000000',
        distance: 130,
        enable: true,
        opacity: 0.07,
        width: 0.5,
      },
      move: {
        enable: true,
        speed: { min: 0.3, max: 0.9 },
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
      },
      number: {
        value: 120,
        density: { enable: true, area: 900 },
      },
      opacity: {
        value: { min: 0.04, max: 0.3 },
        animation: { enable: true, speed: 0.6, minimumValue: 0.04, sync: false },
      },
      shape: { type: 'circle' },
      size: {
        value: { min: 0.8, max: 2.5 },
        animation: { enable: true, speed: 1.5, minimumValue: 0.3, sync: false },
      },
    },
    detectRetina: true,
  }

  return (
    <>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Particles — fixed background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
        }}
      />

      {/* Page content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
