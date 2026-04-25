import { useEffect, useRef, useState } from 'react'

const PHONE = '919938832283'   // WhatsApp number with country code (91 = India)
const EMAIL = 'duduldehury56@gmail.com'

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(null) // 'email' | 'whatsapp' | null

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // ── Send via Email (mailto: opens the user's email app) ──
  const sendEmail = () => {
    if (!form.name || !form.message) {
      alert('Please fill in your name and message.')
      return
    }
    const subject = encodeURIComponent(`Portfolio Enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Hi Shreyash,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent('email')
  }

  // ── Send via WhatsApp ──
  const sendWhatsApp = () => {
    if (!form.name || !form.message) {
      alert('Please fill in your name and message.')
      return
    }
    const text = encodeURIComponent(
      `Hi Shreyash! 👋\n\nI found your portfolio.\n\nName: ${form.name}\nEmail: ${form.email || 'Not provided'}\n\nMessage:\n${form.message}`
    )
    window.open(`https://wa.me/${PHONE}?text=${text}`, '_blank')
    setSent('whatsapp')
  }

  return (
    <section
      id="contact"
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
          Get In Touch
        </p>
        <h2
          className="mb-4"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            lineHeight: 1.1,
            color: '#000',
          }}
        >
          Let's Work Together
        </h2>
        <p className="text-sm mb-10" style={{ color: '#666', maxWidth: 480 }}>
          Have a video project? Fill in the form and send your message directly to my email or WhatsApp — I'll get back to you fast!
        </p>
      </div>

      {/* Contact form */}
      <div
        className="reveal"
        style={{
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: 20,
          padding: '2.5rem',
          background: '#fafafa',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#aaa' }}>
              Your Name *
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-input"
              placeholder="e.g. Rahul Sharma"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#aaa' }}>
              Your Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="form-input"
              placeholder="rahul@example.com"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#aaa' }}>
            Message *
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="form-input"
            rows={5}
            placeholder="Tell me about your project..."
            style={{ resize: 'vertical' }}
          />
        </div>

        {/* Send buttons */}
        <div className="flex flex-wrap gap-3">
          <button onClick={sendEmail} className="btn-primary">
            ✉️ Send via Email
          </button>
          <button
            onClick={sendWhatsApp}
            className="contact-btn"
            style={{ background: 'transparent' }}
          >
            💬 Send via WhatsApp
          </button>
        </div>

        {/* Confirmation message */}
        {sent === 'email' && (
          <p className="mt-4 text-sm" style={{ color: '#22c55e' }}>
            ✅ Your email app should open now. Send the email to reach Shreyash!
          </p>
        )}
        {sent === 'whatsapp' && (
          <p className="mt-4 text-sm" style={{ color: '#22c55e' }}>
            ✅ WhatsApp opened! Your message is pre-filled — just hit Send.
          </p>
        )}
      </div>

      {/* Direct contact links */}
      <div className="flex flex-wrap gap-3 mt-6 reveal">
        <a href={`tel:+91${PHONE.slice(2)}`} className="contact-btn">
          📞 +91 99388 32283
        </a>
        <a href={`mailto:${EMAIL}`} className="contact-btn">
          ✉️ {EMAIL}
        </a>
        <a
          href={`https://wa.me/${PHONE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          💬 WhatsApp Me
        </a>
      </div>
    </section>
  )
}
