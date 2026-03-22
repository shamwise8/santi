<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Santi — your body knows the way</title>
<meta name="description" content="Santi is a nervous system coach on your wrist. Breathe, check in, see the proof. Apple Watch first.">
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

:root {
  --bg: #060A04;
  --surface: #0C1209;
  --accent: #7EE8A2;
  --accent-dim: #5BC98A;
  --hr: #FF9B7A;
  --text: #E8F5EC;
  --text-mid: #5A7A62;
  --text-dim: #2C3D30;
  --font: 'Cormorant Garamond', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  font-weight: 300;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

::selection { background: rgba(126,232,162,0.2); color: #fff; }

/* ── HERO ── */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 60px 24px;
}

.hero-orb {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: radial-gradient(circle at 38% 35%, #A8F0B8CC, #5BC98A66 50%, #7EE8A233);
  box-shadow: 0 0 120px rgba(126,232,162,0.15), 0 0 60px rgba(126,232,162,0.1);
  animation: breathe 8s ease-in-out infinite;
  margin-bottom: 60px;
  position: relative;
}

.hero-orb::after {
  content: '';
  position: absolute;
  top: 16%; left: 18%;
  width: 30%; height: 26%;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
  filter: blur(8px);
}

@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.85; }
  50% { transform: scale(1.08); opacity: 1; }
}

.hero-title {
  font-size: clamp(48px, 8vw, 80px);
  font-weight: 300;
  letter-spacing: 0.14em;
  color: var(--accent);
  margin-bottom: 20px;
  animation: fadeUp 1s ease 0.3s both;
}

.hero-sub {
  font-size: clamp(16px, 2.5vw, 22px);
  font-weight: 300;
  color: var(--text-mid);
  letter-spacing: 0.06em;
  font-style: italic;
  margin-bottom: 48px;
  animation: fadeUp 1s ease 0.6s both;
}

.hero-cta {
  display: inline-block;
  padding: 14px 40px;
  border: 1px solid rgba(126,232,162,0.3);
  border-radius: 40px;
  color: var(--accent);
  font-family: var(--font);
  font-size: 16px;
  letter-spacing: 0.12em;
  text-decoration: none;
  transition: all 0.4s ease;
  animation: fadeUp 1s ease 0.9s both;
}

.hero-cta:hover {
  background: rgba(126,232,162,0.1);
  border-color: rgba(126,232,162,0.5);
  box-shadow: 0 0 40px rgba(126,232,162,0.1);
}

.scroll-hint {
  position: absolute;
  bottom: 32px;
  color: var(--text-dim);
  font-size: 13px;
  letter-spacing: 0.2em;
  animation: fadeUp 1s ease 1.2s both, gentle-bob 3s ease-in-out infinite 2s;
}

@keyframes gentle-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

/* ── SECTIONS ── */
section {
  padding: 120px 24px;
  max-width: 800px;
  margin: 0 auto;
}

.section-label {
  font-size: 12px;
  letter-spacing: 0.3em;
  color: var(--text-dim);
  margin-bottom: 32px;
  text-transform: lowercase;
}

.section-heading {
  font-size: clamp(28px, 5vw, 44px);
  font-weight: 300;
  letter-spacing: 0.04em;
  color: var(--text);
  line-height: 1.3;
  margin-bottom: 24px;
}

.section-body {
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.8;
  color: var(--text-mid);
  font-weight: 300;
}

.section-body em {
  color: var(--accent-dim);
  font-style: italic;
}

/* ── FEATURE GRID ── */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 60px;
}

.feature-card {
  padding: 32px 28px;
  border-radius: 20px;
  background: var(--surface);
  border: 1px solid rgba(126,232,162,0.08);
  transition: all 0.4s ease;
}

.feature-card:hover {
  border-color: rgba(126,232,162,0.2);
  transform: translateY(-2px);
}

.feature-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.feature-title {
  font-size: 18px;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 10px;
  letter-spacing: 0.04em;
}

.feature-desc {
  font-size: 14px;
  color: var(--text-mid);
  line-height: 1.7;
  font-weight: 300;
}

/* ── PLANET STRIP ── */
.planet-strip {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 60px 0;
  padding: 40px 0;
}

.planet-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.planet-dot {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.planet-dot:hover {
  transform: scale(1.15);
}

.planet-label {
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--text-dim);
}

/* ── QUOTE ── */
.quote-section {
  text-align: center;
  padding: 100px 24px;
}

.quote {
  font-size: clamp(22px, 4vw, 36px);
  font-weight: 300;
  font-style: italic;
  color: var(--accent);
  line-height: 1.5;
  max-width: 640px;
  margin: 0 auto 20px;
  opacity: 0.85;
}

.quote-attr {
  font-size: 14px;
  color: var(--text-dim);
  letter-spacing: 0.1em;
}

/* ── PROOF SECTION ── */
.proof-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 48px;
}

.proof-item {
  text-align: center;
  padding: 32px 16px;
}

.proof-number {
  font-size: 40px;
  font-weight: 200;
  color: var(--accent);
  letter-spacing: 0.02em;
}

.proof-unit {
  font-size: 13px;
  color: var(--text-mid);
  letter-spacing: 0.1em;
  margin-top: 6px;
}

.proof-desc {
  font-size: 12px;
  color: var(--text-dim);
  margin-top: 8px;
  line-height: 1.5;
}

/* ── APP STORE ── */
.download-section {
  text-align: center;
  padding: 100px 24px 80px;
}

.download-section .section-heading {
  margin-bottom: 16px;
}

.download-badge {
  display: inline-block;
  margin-top: 32px;
  padding: 16px 44px;
  border: 1px solid rgba(126,232,162,0.3);
  border-radius: 40px;
  color: var(--accent);
  font-family: var(--font);
  font-size: 17px;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: all 0.4s ease;
}

.download-badge:hover {
  background: rgba(126,232,162,0.1);
  border-color: rgba(126,232,162,0.5);
}

/* ── FOOTER ── */
footer {
  padding: 60px 24px;
  text-align: center;
  border-top: 1px solid rgba(126,232,162,0.06);
}

.footer-logo {
  font-size: 20px;
  letter-spacing: 0.16em;
  color: var(--accent);
  font-weight: 300;
  margin-bottom: 16px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
}

.footer-links a {
  font-size: 13px;
  color: var(--text-dim);
  text-decoration: none;
  letter-spacing: 0.08em;
  transition: color 0.3s;
}

.footer-links a:hover { color: var(--text-mid); }

.footer-copy {
  font-size: 11px;
  color: var(--text-dim);
  letter-spacing: 0.06em;
}

/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── RESPONSIVE ── */
@media (max-width: 640px) {
  .proof-grid { grid-template-columns: 1fr; gap: 8px; }
  .planet-strip { gap: 14px; }
  .planet-dot { width: 36px; height: 36px; }
  section { padding: 80px 20px; }
  .features { grid-template-columns: 1fr; }
}
</style>
</head>
<body>

<!-- HERO -->
<div class="hero">
  <div class="hero-orb"></div>
  <h1 class="hero-title">santi</h1>
  <p class="hero-sub">your body knows the way</p>
  <a href="#features" class="hero-cta">explore</a>
  <div class="scroll-hint">↓</div>
</div>

<!-- WHAT IT IS -->
<section id="features">
  <div class="reveal">
    <div class="section-label">what it is</div>
    <h2 class="section-heading">a nervous system coach<br>that lives on your wrist</h2>
    <p class="section-body">
      Santi uses your Apple Watch's heart rate sensor and haptic engine to guide your breathing — then proves it worked. No content library. No streak counter. Just your body, a rhythm, and <em>the proof that something changed.</em>
    </p>
  </div>

  <div class="features reveal">
    <div class="feature-card">
      <div class="feature-icon" style="background: radial-gradient(circle at 38% 35%, #A8F0B8AA, #5BC98A55);"></div>
      <div class="feature-title">breathe</div>
      <div class="feature-desc">Precision haptic guides your breath through your wrist. Eyes closed. No screen needed. The tapping IS the session.</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background: radial-gradient(circle at 38% 35%, #FF9B7AAA, #FF9B7A44);"></div>
      <div class="feature-title">the proof</div>
      <div class="feature-desc">Watch your heart rate drop in real-time. After the session, see exactly how far your body traveled. Apple skips this part. Santi doesn't.</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background: radial-gradient(circle at 38% 35%, #2B7CB8AA, #2B7CB844);"></div>
      <div class="feature-title">check in</div>
      <div class="feature-desc">Turn the Digital Crown to find your color. Nine emotional states mapped to planets. Your week becomes a constellation of how you felt.</div>
    </div>
  </div>
</section>

<!-- THE STATES -->
<section>
  <div class="reveal">
    <div class="section-label">how you feel</div>
    <h2 class="section-heading">nine states. no judgment.</h2>
    <p class="section-body">
      Turn the Crown until the color feels like where you are right now. Not picking from a list — <em>finding yourself on a dial.</em> The physical act of turning is the check-in.
    </p>
  </div>

  <div class="planet-strip reveal">
    <div class="planet-item">
      <div class="planet-dot" style="background: radial-gradient(circle at 38% 35%, #E05020CC, #C1440E66); box-shadow: 0 0 16px #E0502033;"></div>
      <div class="planet-label">angry</div>
    </div>
    <div class="planet-item">
      <div class="planet-dot" style="background: radial-gradient(circle at 38% 35%, #D4B060CC, #C4A35A66); box-shadow: 0 0 16px #D4B06033;"></div>
      <div class="planet-label">anxious</div>
    </div>
    <div class="planet-item">
      <div class="planet-dot" style="background: radial-gradient(circle at 38% 35%, #C8886088, #C8784844); box-shadow: 0 0 16px #C8784822;"></div>
      <div class="planet-label">tense</div>
    </div>
    <div class="planet-item">
      <div class="planet-dot" style="background: radial-gradient(circle at 38% 35%, #9A9AA2CC, #8A8A9266); box-shadow: 0 0 16px #9A9AA233;"></div>
      <div class="planet-label">flat</div>
    </div>
    <div class="planet-item">
      <div class="planet-dot" style="background: radial-gradient(circle at 38% 35%, #3A90D0CC, #2B7CB866); box-shadow: 0 0 16px #3A90D033;"></div>
      <div class="planet-label">okay</div>
    </div>
    <div class="planet-item">
      <div class="planet-dot" style="background: radial-gradient(circle at 38% 35%, #90F0B0CC, #7EE8A266); box-shadow: 0 0 16px #90F0B033;"></div>
      <div class="planet-label">peaceful</div>
    </div>
    <div class="planet-item">
      <div class="planet-dot" style="background: radial-gradient(circle at 38% 35%, #A8D0E8CC, #7AACC866); box-shadow: 0 0 16px #A8D0E833;"></div>
      <div class="planet-label">relaxed</div>
    </div>
    <div class="planet-item">
      <div class="planet-dot" style="background: radial-gradient(circle at 38% 35%, #60F0A8CC, #50E89866); box-shadow: 0 0 16px #60F0A833;"></div>
      <div class="planet-label">flowing</div>
    </div>
    <div class="planet-item">
      <div class="planet-dot" style="background: radial-gradient(circle at 38% 35%, #F0C040CC, #E8A82066); box-shadow: 0 0 16px #F0C04033;"></div>
      <div class="planet-label">joyful</div>
    </div>
  </div>
</section>

<!-- QUOTE -->
<div class="quote-section reveal">
  <div class="quote">most apps teach you to need them.<br>santi trains your body to remember.</div>
</div>

<!-- HOW IT WORKS -->
<section>
  <div class="reveal">
    <div class="section-label">how it works</div>
    <h2 class="section-heading">three ways to practice</h2>
    <p class="section-body" style="margin-bottom: 40px;">
      Each session meets you where you are. No library to browse. No choice paralysis. Just your body and the time you have.
    </p>
  </div>

  <div class="features reveal">
    <div class="feature-card">
      <div class="feature-title">arrive</div>
      <div class="feature-desc">Your body decides when it's done. Heart rate–adaptive — the session ends when your nervous system has actually settled. No timer. No guessing.</div>
    </div>
    <div class="feature-card">
      <div class="feature-title">settle</div>
      <div class="feature-desc">You choose the time. 3, 5, 7, or 10 minutes of guided breathing with haptic rhythm. The watch handles the rest.</div>
    </div>
    <div class="feature-card">
      <div class="feature-title">dive</div>
      <div class="feature-desc">The deep session. Check in, arrive, then settle with a longer, slower breath cycle. Two data points. The full journey. <span style="color: var(--text-dim); font-style: italic;">coming soon</span></div>
    </div>
  </div>
</section>

<!-- PROOF -->
<section>
  <div class="reveal">
    <div class="section-label">the difference</div>
    <h2 class="section-heading">your body keeps the score.<br>arrive keeps the proof.</h2>
  </div>

  <div class="proof-grid reveal">
    <div class="proof-item">
      <div class="proof-number" style="color: var(--hr);">↓ 18</div>
      <div class="proof-unit">bpm average drop</div>
      <div class="proof-desc">during a single session</div>
    </div>
    <div class="proof-item">
      <div class="proof-number">9</div>
      <div class="proof-unit">emotional states</div>
      <div class="proof-desc">mapped to planets &amp; colors</div>
    </div>
    <div class="proof-item">
      <div class="proof-number" style="color: var(--hr);">↓ 4</div>
      <div class="proof-unit">resting bpm</div>
      <div class="proof-desc">over 30 days of practice</div>
    </div>
  </div>
</section>

<!-- WATCH FIRST -->
<section>
  <div class="reveal">
    <div class="section-label">watch first</div>
    <h2 class="section-heading">the nervous system lives in the body.<br>the watch is on the body.</h2>
    <p class="section-body">
      Santi is built for Apple Watch first. The phone is the archive — your week as a constellation of planets, patterns over months, the intelligence that makes the practice meaningful over time. But the real experience? That's between your wrist and your breath.
    </p>
  </div>
</section>

<!-- DOWNLOAD -->
<div class="download-section reveal">
  <h2 class="section-heading">santi.</h2>
  <p class="section-body" style="max-width: 400px; margin: 0 auto;">breathe, check in, see the proof.</p>
  <a href="#" class="download-badge">download on the app store</a>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">santi</div>
  <div class="footer-links">
    <a href="#">privacy</a>
    <a href="#">support</a>
    <a href="#">press</a>
  </div>
  <div class="footer-copy">&copy; 2026 santi. your body knows the way.</div>
</footer>

<script>
// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));
</script>

</body>
</html>