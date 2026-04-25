import { useCallback, useEffect, useState } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticleBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    loadSlim(window.tsParticles ?? {}).then(() => setInit(true))
  }, [])

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const options = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: true, mode: 'push' },
      },
      modes: {
        grab: {
          distance: 180,
          links: { opacity: 0.35 },
        },
        push: { quantity: 3 },
      },
    },
    particles: {
      color: { value: '#000000' },
      links: {
        color: '#000000',
        distance: 130,
        enable: true,
        opacity: 0.08,
        width: 0.5,
      },
      move: {
        enable: true,
        speed: { min: 0.3, max: 1.0 },
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
      },
      number: {
        value: 110,
        density: { enable: true, area: 800 },
      },
      opacity: {
        value: { min: 0.05, max: 0.35 },
        animation: {
          enable: true,
          speed: 0.6,
          minimumValue: 0.05,
          sync: false,
        },
      },
      shape: { type: 'circle' },
      size: {
        value: { min: 0.8, max: 2.5 },
        animation: {
          enable: true,
          speed: 1.5,
          minimumValue: 0.3,
          sync: false,
        },
      },
    },
    detectRetina: true,
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    />
  )
}
