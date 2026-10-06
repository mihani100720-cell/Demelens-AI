/**
 * Case Replay Engine for CognitiveLens AI / DEMELENS AI
 * Allows automated playback through longitudinal observations
 * highlighting the exact moment of First Persistent Signal detection.
 */

const CASE_1042_DATA = [
  {
    week: 1,
    date: 'October 04, 2025',
    task: 'Cookie Theft Description',
    status: 'Baseline Established',
    statusClass: 'tag-healthy',
    signal: 'Nominal',
    confidence: '94%',
    deviation: '0.04 σ',
    ttr: 0.72,
    repetition: 6.2,
    coherence: 0.81,
    syntax: 9.4,
    fluency: 92,
    transcript: 'Well, the mother is wiping dishes at the kitchen sink and the water is running over onto the floor. Behind her, a boy is standing on a wobbly stool trying to reach into the cookie jar, and a little girl has her hand raised asking for one too.',
    notes: 'Fluid discourse, rich lexical variety, clear situational narrative.'
  },
  {
    week: 2,
    date: 'October 18, 2025',
    task: 'Cookie Theft Description',
    status: 'Within Baseline Range',
    statusClass: 'tag-healthy',
    signal: 'Nominal',
    confidence: '92%',
    deviation: '0.08 σ',
    ttr: 0.70,
    repetition: 7.1,
    coherence: 0.79,
    syntax: 9.1,
    fluency: 89,
    transcript: 'In this picture, the lady is drying dishes. The sink is overflowing with soapy water onto the linoleum. The boy is up on the stool getting cookies out of the cupboard, while the sister reaches up.',
    notes: 'Lexical richness stable. Coherent thematic flow maintained.'
  },
  {
    week: 3,
    date: 'November 01, 2025',
    task: 'Cookie Theft Description',
    status: 'Mild Transient Fluctuation',
    statusClass: 'tag-neutral',
    signal: 'Low Signal',
    confidence: '86%',
    deviation: '0.41 σ',
    ttr: 0.68,
    repetition: 9.4,
    coherence: 0.76,
    syntax: 8.6,
    fluency: 84,
    transcript: 'Here is a woman at the sink... <span class="word-highlight-pause">[pause 1.2s]</span> and the water is spilling over. The boy... the young lad is on a stool. He is reaching up into the jar for cookies and the girl is looking on.',
    notes: 'Single transient pause detected. Classified as isolated fluctuation; does not meet persistence criteria.'
  },
  {
    week: 4,
    date: 'November 15, 2025',
    task: 'Cookie Theft Description',
    status: 'Emerging Deviation',
    statusClass: 'tag-alert',
    signal: 'Moderate Signal',
    confidence: '81%',
    deviation: '1.24 σ',
    ttr: 0.64,
    repetition: 13.8,
    coherence: 0.71,
    syntax: 7.8,
    fluency: 76,
    transcript: 'The lady is washing... she is washing the dishes. The sink is full... the sink water is pouring on the floor. The boy is taking <span class="word-highlight-repetition">cookies, cookies</span> from the top cabinet and the stool is tipping over.',
    notes: 'Repetition rate increased +2.1 SD. Elevated circumlocution around kitchen objects.'
  },
  {
    week: 5,
    date: 'November 29, 2025',
    task: 'Cookie Theft Description',
    status: 'FIRST PERSISTENT SIGNAL DETECTED',
    statusClass: 'tag-alert',
    signal: 'Elevated Signal',
    confidence: '89%',
    deviation: '2.48 σ',
    ttr: 0.51,
    repetition: 18.4,
    coherence: 0.58,
    syntax: 6.2,
    fluency: 64,
    transcript: 'She is... <span class="word-highlight-pause">[pause 2.4s]</span> washing the things at the water place. The water is spilling. And the boy is... <span class="word-highlight-repetition">the boy is, the boy is</span> getting into the jar for the <span class="word-highlight-pause">[pause 1.8s]</span> the sweet things, cookies. The stool is falling.',
    notes: 'CRITERIA MET: Multi-marker divergence (Lexical diversity drop, syntactic simplification, repetitive phrasing) sustained across consecutive sessions. Flagged for clinical multidisciplinary review.'
  },
  {
    week: 6,
    date: 'December 13, 2025',
    task: 'Cookie Theft Description',
    status: 'Persistent Linguistic Shift',
    statusClass: 'tag-alert',
    signal: 'Elevated Signal',
    confidence: '91%',
    deviation: '2.86 σ',
    ttr: 0.46,
    repetition: 21.2,
    coherence: 0.52,
    syntax: 5.7,
    fluency: 58,
    transcript: 'The lady is... the water is going on the floor. She does not see it. The boy... <span class="word-highlight-repetition">the boy is up, the boy is up</span> there getting the round things to eat. His sister is reaching up.',
    notes: 'Semantic substitution ("water place", "round things to eat"). Persistent deviation confirmed.'
  },
  {
    week: 7,
    date: 'December 27, 2025',
    task: 'Cookie Theft Description',
    status: 'Established Clinical Trajectory',
    statusClass: 'tag-alert',
    signal: 'Elevated Signal',
    confidence: '93%',
    deviation: '3.12 σ',
    ttr: 0.41,
    repetition: 23.5,
    coherence: 0.48,
    syntax: 5.2,
    fluency: 52,
    transcript: 'Water... water running down. The mother... lady is looking out. The children are... <span class="word-highlight-repetition">one child, one child</span> is getting the food down from the cupboard. It is dangerous on that chair.',
    notes: 'Substantial syntactic reduction to simple canonical phrases. High RAG concordance with early AD semantic decay pattern.'
  }
];

class CaseReplayEngine {
  constructor() {
    this.currentIndex = 4; // Default to Week 5 (First persistent signal)
    this.isPlaying = false;
    this.playTimer = null;
    this.init();
  }

  init() {
    this.bindControls();
    this.updateUI(this.currentIndex);
  }

  bindControls() {
    const btnPlay = document.getElementById('btn-replay-play');
    const btnPrev = document.getElementById('btn-replay-prev');
    const btnNext = document.getElementById('btn-replay-next');

    if (btnPlay) {
      btnPlay.addEventListener('click', () => this.togglePlay());
    }
    if (btnPrev) {
      btnPrev.addEventListener('click', () => this.prevStep());
    }
    if (btnNext) {
      btnNext.addEventListener('click', () => this.nextStep());
    }

    // Stepper nodes
    document.querySelectorAll('.timeline-step').forEach((step, idx) => {
      step.addEventListener('click', () => {
        this.pause();
        this.goToStep(idx);
      });
    });
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;
    const btn = document.getElementById('btn-replay-play');
    if (btn) btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg><span>Pause Replay</span>';

    if (this.currentIndex >= CASE_1042_DATA.length - 1) {
      this.currentIndex = 0;
    }

    this.playTimer = setInterval(() => {
      if (this.currentIndex < CASE_1042_DATA.length - 1) {
        this.currentIndex++;
        this.updateUI(this.currentIndex);
      } else {
        this.pause();
      }
    }, 2800);
  }

  pause() {
    this.isPlaying = false;
    if (this.playTimer) clearInterval(this.playTimer);
    const btn = document.getElementById('btn-replay-play');
    if (btn) btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><span>Play Longitudinal Replay</span>';
  }

  prevStep() {
    this.pause();
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateUI(this.currentIndex);
    }
  }

  nextStep() {
    this.pause();
    if (this.currentIndex < CASE_1042_DATA.length - 1) {
      this.currentIndex++;
      this.updateUI(this.currentIndex);
    }
  }

  goToStep(index) {
    this.currentIndex = index;
    this.updateUI(this.currentIndex);
  }

  loadObservation(index) {
    this.pause();
    this.goToStep(index);
  }

  updateUI(index) {
    const data = CASE_1042_DATA[index];
    if (!data) return;

    // Update active class on stepper
    document.querySelectorAll('.timeline-step').forEach((el, idx) => {
      el.classList.toggle('active', idx === index);
    });

    // Update text elements across Dashboard & Voice Lab
    const updateEl = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = val;
    };

    updateEl('current-week-num', `Week ${data.week}`);
    updateEl('current-session-date', data.date);
    updateEl('current-case-status', data.status);
    updateEl('current-signal-level', data.signal);
    updateEl('current-confidence-pct', data.confidence);
    updateEl('current-deviation-val', data.deviation);
    updateEl('replay-transcript-content', data.transcript);
    updateEl('replay-clinical-note', data.notes);

    // Update Feature Meters
    const setMeter = (barId, valId, pct, label) => {
      const bar = document.getElementById(barId);
      const val = document.getElementById(valId);
      if (bar) bar.style.width = `${pct}%`;
      if (val) val.innerText = label;
    };

    setMeter('bar-ttr', 'val-ttr', data.ttr * 100, `${(data.ttr).toFixed(2)} (TTR)`);
    setMeter('bar-rep', 'val-rep', Math.min(data.repetition * 3.5, 100), `${data.repetition}%`);
    setMeter('bar-coh', 'val-coh', data.coherence * 100, `${data.coherence.toFixed(2)}`);
    setMeter('bar-syn', 'val-syn', (data.syntax / 12) * 100, `${data.syntax} words/clause`);
    setMeter('bar-flu', 'val-flu', data.fluency, `${data.fluency}/100`);

    // First signal banner visibility
    const firstSignalBanner = document.getElementById('first-signal-alert-banner');
    if (firstSignalBanner) {
      if (data.week >= 5) {
        firstSignalBanner.style.display = 'flex';
        updateEl('signal-detected-week', `Confirmed at Week 5 (Persistence Factor: 0.92)`);
      } else {
        firstSignalBanner.style.display = 'none';
      }
    }

    // Sync with 3D State Space
    if (window.stateSpaceInstance) {
      window.stateSpaceInstance.setActiveObservation(data.week);
    }

    // Sync with Radar Fingerprint
    if (window.updateRadarFingerprint) {
      window.updateRadarFingerprint(data);
    }
  }
}

window.CaseReplayEngine = CaseReplayEngine;
window.CASE_1042_DATA = CASE_1042_DATA;
