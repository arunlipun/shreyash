import { motion } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '0.5px solid rgba(0,0,0,0.08)',
      }}
    >
      <span
        style={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 700,
          fontSize: '1.1rem',
          letterSpacing: '0.05em',
          color: '#000',
        }}
      >
        SD
      </span>

      <div className="flex items-center gap-8">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav-link">
            {l.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
