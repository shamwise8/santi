import { useEffect } from 'react'
import './App.css'

const planets = [
  { label: 'angry', gradient: '#E05020CC, #C1440E66', glow: '#E0502033' },
  { label: 'anxious', gradient: '#D4B060CC, #C4A35A66', glow: '#D4B06033' },
  { label: 'tense', gradient: '#C8886088, #C8784844', glow: '#C8784822' },
  { label: 'flat', gradient: '#9A9AA2CC, #8A8A9266', glow: '#9A9AA233' },
  { label: 'okay', gradient: '#3A90D0CC, #2B7CB866', glow: '#3A90D033' },
  { label: 'peaceful', gradient: '#90F0B0CC, #7EE8A266', glow: '#90F0B033' },
  { label: 'relaxed', gradient: '#A8D0E8CC, #7AACC866', glow: '#A8D0E833' },
  { label: 'flowing', gradient: '#60F0A8CC, #50E89866', glow: '#60F0A833' },
  { label: 'joyful', gradient: '#F0C040CC, #E8A82066', glow: '#F0C04033' },
]

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 },
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="hero-orb"></div>
        <h1 className="hero-title">santi</h1>
        <p className="hero-sub">your body knows the way</p>
        <a href="#features" className="hero-cta">explore</a>
        <div className="scroll-hint">↓</div>
      </div>

      {/* WHAT IT IS */}
      <section id="features">
        <div className="reveal">
          <div className="section-label">what it is</div>
          <h2 className="section-heading">
            a nervous system coach<br />that lives on your wrist
          </h2>
          <p className="section-body">
            Santi uses your Apple Watch's heart rate sensor and haptic engine to
            guide your breathing — then proves it worked. No content library. No
            streak counter. Just your body, a rhythm, and{' '}
            <em>the proof that something changed.</em>
          </p>
        </div>

        <div className="features reveal">
          <div className="feature-card">
            <div className="feature-icon feature-icon--accent"></div>
            <div className="feature-title">breathe</div>
            <div className="feature-desc">
              Precision haptic guides your breath through your wrist. Eyes closed.
              No screen needed. The tapping IS the session.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon--hr"></div>
            <div className="feature-title">the proof</div>
            <div className="feature-desc">
              Watch your heart rate drop in real-time. After the session, see
              exactly how far your body traveled. Apple skips this part. Santi
              doesn't.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon--cool"></div>
            <div className="feature-title">check in</div>
            <div className="feature-desc">
              Turn the Digital Crown to find your color. Nine emotional states
              mapped to planets. Your week becomes a constellation of how you felt.
            </div>
          </div>
        </div>
      </section>

      {/* THE STATES */}
      <section>
        <div className="reveal">
          <div className="section-label">how you feel</div>
          <h2 className="section-heading">nine states. no judgment.</h2>
          <p className="section-body">
            Turn the Crown until the color feels like where you are right now.
            Not picking from a list — <em>finding yourself on a dial.</em> The
            physical act of turning is the check-in.
          </p>
        </div>

        <div className="planet-strip reveal">
          {planets.map((p) => (
            <div className="planet-item" key={p.label}>
              <div
                className="planet-dot"
                style={{
                  background: `radial-gradient(circle at 38% 35%, ${p.gradient})`,
                  boxShadow: `0 0 16px ${p.glow}`,
                }}
              ></div>
              <div className="planet-label">{p.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <div className="quote-section reveal">
        <div className="quote">
          most apps teach you to need them.<br />santi trains your body to
          remember.
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section>
        <div className="reveal">
          <div className="section-label">how it works</div>
          <h2 className="section-heading">three ways to practice</h2>
          <p className="section-body" style={{ marginBottom: 40 }}>
            Each session meets you where you are. No library to browse. No choice
            paralysis. Just your body and the time you have.
          </p>
        </div>

        <div className="features reveal">
          <div className="feature-card">
            <div className="feature-title">arrive</div>
            <div className="feature-desc">
              Your body decides when it's done. Heart rate–adaptive — the session
              ends when your nervous system has actually settled. No timer. No
              guessing.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-title">settle</div>
            <div className="feature-desc">
              You choose the time. 3, 5, 7, or 10 minutes of guided breathing
              with haptic rhythm. The watch handles the rest.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-title">dive</div>
            <div className="feature-desc">
              The deep session. Check in, arrive, then settle with a longer,
              slower breath cycle. Two data points. The full journey.{' '}
              <span style={{ color: 'var(--text-dim)', fontStyle: 'italic' }}>
                coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section>
        <div className="reveal">
          <div className="section-label">the difference</div>
          <h2 className="section-heading">
            your body keeps the score.<br />arrive keeps the proof.
          </h2>
        </div>

        <div className="proof-grid reveal">
          <div className="proof-item">
            <div className="proof-number" style={{ color: 'var(--hr)' }}>↓ 10</div>
            <div className="proof-unit">bpm average drop</div>
            <div className="proof-desc">during a single session</div>
          </div>
          <div className="proof-item">
            <div className="proof-number">9</div>
            <div className="proof-unit">emotional states</div>
            <div className="proof-desc">mapped to planets &amp; colors</div>
          </div>
          <div className="proof-item">
            <div className="proof-number" style={{ color: 'var(--hr)' }}>↓ 4</div>
            <div className="proof-unit">resting bpm</div>
            <div className="proof-desc">over 30 days of practice</div>
          </div>
        </div>
      </section>

      {/* WATCH FIRST */}
      <section>
        <div className="reveal">
          <div className="section-label">watch first</div>
          <h2 className="section-heading">
            the nervous system lives in the body.<br />the watch is on the body.
          </h2>
          <p className="section-body">
            Santi is built for Apple Watch first. The phone is the archive — your
            week as a constellation of planets, patterns over months, the
            intelligence that makes the practice meaningful over time. But the
            real experience? That's between your wrist and your breath.
          </p>
        </div>
      </section>

      {/* DOWNLOAD */}
      <div className="download-section reveal">
        <h2 className="section-heading">santi.</h2>
        <p className="section-body" style={{ maxWidth: 400, margin: '0 auto' }}>
          breathe, check in, see the proof.
        </p>
        <a href="#" className="download-badge">download on the app store</a>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">santi</div>
        <div className="footer-links">
          <a href="#">privacy</a>
          <a href="#">support</a>
          <a href="#">press</a>
        </div>
        <div className="footer-copy">&copy; 2026 santi. your body knows the way.</div>
      </footer>
    </>
  )
}

export default App
