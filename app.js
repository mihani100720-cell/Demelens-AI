/**
 * CognitiveLens AI — Clinical Orchestrator & State Management
 * Research-Grade Longitudinal Dementia-Language Analytics Platform
 */

// ============================================================================
// COMPREHENSIVE CLINICAL COHORT DATABASE
// ============================================================================
const PATIENT_DATABASE = {
  '1042': {
    id: '#1042',
    name: 'Margaret H.',
    age: 74,
    gender: 'Female',
    cohort: 'ADRD Longitudinal Study Cohort',
    demographics: 'Female, 74 y/o • ADRD Longitudinal Cohort • 7 Bi-weekly Observations',
    statusTag: 'Elevated Risk Signal',
    statusClass: 'tag-alert',
    signalScore: 0.78,
    signalLabel: 'Elevated (0.78)',
    signalColorClass: 'val-elevated',
    baselineStatus: 'Calibrated (+2.48σ)',
    trajectoryText: 'Persistent Deviation Confirmed',
    trajectorySub: '2 consecutive out-of-distribution sessions (Weeks 5 & 6)',
    lastAssessment: 'Week 7 (Dec 27, 2025)',
    observationsCount: 7,
    confidenceInterval: '[0.72 – 0.84]',
    confidenceLevel: 'High Fidelity',
    snr: '28.4 dB',
    acousticQuality: '0.96 / 1.00',
    missingRate: '0.0%',
    modelAgreement: '3 / 3 Models Aligned (100%)',
    models: [
      { name: 'Regularized Logistic Regression', status: 'Elevated', val: '0.74', class: 'sig-elevated' },
      { name: 'Random Forest (100 Trees)', status: 'Elevated', val: '0.81', class: 'sig-elevated' },
      { name: 'Extreme Gradient Boosting (XGBoost)', status: 'Elevated', val: '0.79', class: 'sig-elevated' }
    ],
    showFirstSignal: true,
    firstSignalTitle: 'First Persistent Signal Detected — Observation #5 (Week 5)',
    firstSignalDesc: 'Linguistic divergence exceeded individual baseline threshold across multiple orthogonal markers (TTR drop: -2.1σ, Repetition surge: +2.8σ, Syntactic compression: -1.9σ) and persisted across subsequent sessions.',
    baselineRange: { min: 0.08, max: 0.22, baselineScore: 0.14 },
    trajectoryHistory: [
      { week: 1, date: 'Oct 04', score: 0.12, deviation: '+0.04σ', ttr: 0.72, rep: '6.2%', status: 'Nominal Baseline', class: 'tag-healthy', flagged: false },
      { week: 2, date: 'Oct 18', score: 0.14, deviation: '+0.08σ', ttr: 0.70, rep: '7.1%', status: 'Within Baseline', class: 'tag-healthy', flagged: false },
      { week: 3, date: 'Nov 01', score: 0.18, deviation: '+0.41σ', ttr: 0.68, rep: '9.4%', status: 'Mild Fluency Dip', class: 'tag-healthy', flagged: false },
      { week: 4, date: 'Nov 15', score: 0.38, deviation: '+1.24σ', ttr: 0.64, rep: '13.8%', status: 'Isolated Anomaly', class: 'tag-warning', flagged: false },
      { week: 5, date: 'Nov 29', score: 0.68, deviation: '+2.48σ', ttr: 0.51, rep: '18.4%', status: 'First Signal', class: 'tag-alert', flagged: true },
      { week: 6, date: 'Dec 13', score: 0.74, deviation: '+2.62σ', ttr: 0.46, rep: '22.0%', status: 'Sustained Shift', class: 'tag-alert', flagged: true },
      { week: 7, date: 'Dec 27', score: 0.78, deviation: '+2.85σ', ttr: 0.41, rep: '25.8%', status: 'Persistent Deviation', class: 'tag-alert', flagged: true }
    ],
    radarMetrics: [0.51, 0.58, 6.2 / 12, 0.45, 0.64, 0.62],
    shapImpacts: [
      { name: '1. Phrase Repetition Frequency (+2.8σ shift)', impact: '+0.34 SHAP impact', pct: 85, color: 'fill-red', isPositive: true },
      { name: '2. Type-Token Ratio Decay (-2.1σ shift)', impact: '+0.28 SHAP impact', pct: 70, color: 'fill-amber', isPositive: true },
      { name: '3. Mid-Utterance Pause Latency (>1.5s pauses)', impact: '+0.19 SHAP impact', pct: 48, color: 'fill-amber', isPositive: true },
      { name: '4. Subordinate Clause Simplification', impact: '+0.14 SHAP impact', pct: 35, color: 'fill-blue', isPositive: true },
      { name: '5. Fundamental Pitch Stability (F0 Preserved)', impact: '-0.06 SHAP protective', pct: 15, color: 'fill-teal', isPositive: false }
    ]
  },
  '2019': {
    id: '#2019',
    name: 'Robert C.',
    age: 68,
    gender: 'Male',
    cohort: 'Healthy Age-Matched Control Cohort',
    demographics: 'Male, 68 y/o • Healthy Age-Matched Control Cohort • 6 Bi-weekly Observations',
    statusTag: 'Nominal Baseline',
    statusClass: 'tag-healthy',
    signalScore: 0.14,
    signalLabel: 'Nominal (0.14)',
    signalColorClass: 'val-nominal',
    baselineStatus: 'Calibrated (+0.12σ)',
    trajectoryText: 'Normal Longitudinal Stability',
    trajectorySub: 'All observations remain comfortably inside personal tolerance band',
    lastAssessment: 'Week 6 (Dec 12, 2025)',
    observationsCount: 6,
    confidenceInterval: '[0.82 – 0.94]',
    confidenceLevel: 'High Fidelity',
    snr: '31.2 dB',
    acousticQuality: '0.98 / 1.00',
    missingRate: '0.0%',
    modelAgreement: '3 / 3 Models Aligned (100%)',
    models: [
      { name: 'Regularized Logistic Regression', status: 'Nominal', val: '0.12', class: 'sig-nominal' },
      { name: 'Random Forest (100 Trees)', status: 'Nominal', val: '0.15', class: 'sig-nominal' },
      { name: 'Extreme Gradient Boosting (XGBoost)', status: 'Nominal', val: '0.14', class: 'sig-nominal' }
    ],
    showFirstSignal: false,
    firstSignalTitle: '',
    firstSignalDesc: '',
    baselineRange: { min: 0.08, max: 0.20, baselineScore: 0.12 },
    trajectoryHistory: [
      { week: 1, date: 'Oct 03', score: 0.12, deviation: '+0.02σ', ttr: 0.78, rep: '4.1%', status: 'Baseline Established', class: 'tag-healthy', flagged: false },
      { week: 2, date: 'Oct 17', score: 0.11, deviation: '-0.01σ', ttr: 0.79, rep: '3.8%', status: 'Stable Pattern', class: 'tag-healthy', flagged: false },
      { week: 3, date: 'Oct 31', score: 0.15, deviation: '+0.11σ', ttr: 0.76, rep: '4.5%', status: 'Within Baseline', class: 'tag-healthy', flagged: false },
      { week: 4, date: 'Nov 14', score: 0.13, deviation: '+0.05σ', ttr: 0.78, rep: '4.2%', status: 'Within Baseline', class: 'tag-healthy', flagged: false },
      { week: 5, date: 'Nov 28', score: 0.14, deviation: '+0.08σ', ttr: 0.77, rep: '4.0%', status: 'Nominal Stability', class: 'tag-healthy', flagged: false },
      { week: 6, date: 'Dec 12', score: 0.14, deviation: '+0.07σ', ttr: 0.78, rep: '4.3%', status: 'Nominal Stability', class: 'tag-healthy', flagged: false }
    ],
    radarMetrics: [0.82, 0.85, 9.8 / 12, 0.88, 0.86, 0.84],
    shapImpacts: [
      { name: '1. Lexical Richness Maintenance (TTR: 0.78)', impact: '-0.24 SHAP protective', pct: 60, color: 'fill-teal', isPositive: false },
      { name: '2. Zero Perseverative Loops Detected', impact: '-0.21 SHAP protective', pct: 52, color: 'fill-teal', isPositive: false },
      { name: '3. Syntactic Subordination Intact', impact: '-0.18 SHAP protective', pct: 45, color: 'fill-teal', isPositive: false },
      { name: '4. Speech Fluency & Minimal Hesitations', impact: '-0.15 SHAP protective', pct: 38, color: 'fill-teal', isPositive: false },
      { name: '5. Information Unit Density (>0.75/cl)', impact: '-0.12 SHAP protective', pct: 30, color: 'fill-teal', isPositive: false }
    ]
  },
  '3084': {
    id: '#3084',
    name: 'Eleanor D.',
    age: 77,
    gender: 'Female',
    cohort: 'Vascular Cognitive Impairment Pattern',
    demographics: 'Female, 77 y/o • Subcortical Ischemia Cohort • 5 Bi-weekly Observations',
    statusTag: 'Moderate Variance',
    statusClass: 'tag-warning',
    signalScore: 0.58,
    signalLabel: 'Moderate (0.58)',
    signalColorClass: 'val-moderate',
    baselineStatus: 'Fluctuating (+1.85σ)',
    trajectoryText: 'Executive Fluency Dip',
    trajectorySub: 'Prominent pause latency (>2.8s) indicative of subcortical psychomotor friction',
    lastAssessment: 'Week 5 (Nov 28, 2025)',
    observationsCount: 5,
    confidenceInterval: '[0.64 – 0.76]',
    confidenceLevel: 'Moderate Precision',
    snr: '26.8 dB',
    acousticQuality: '0.92 / 1.00',
    missingRate: '0.0%',
    modelAgreement: '2 / 3 Models Aligned (67%)',
    models: [
      { name: 'Regularized Logistic Regression', status: 'Moderate', val: '0.54', class: 'sig-moderate' },
      { name: 'Random Forest (100 Trees)', status: 'Moderate', val: '0.61', class: 'sig-moderate' },
      { name: 'Extreme Gradient Boosting (XGBoost)', status: 'Borderline', val: '0.49', class: 'sig-nominal' }
    ],
    showFirstSignal: true,
    firstSignalTitle: 'Fluctuating Psychomotor Slowing Detected — Week 4',
    firstSignalDesc: 'Acoustic hesitation and prosodic flattening suggest vascular friction rather than classic hippocampal episodic amnesia. Vocabulary richness remains preserved.',
    baselineRange: { min: 0.12, max: 0.28, baselineScore: 0.18 },
    trajectoryHistory: [
      { week: 1, date: 'Oct 02', score: 0.15, deviation: '+0.10σ', ttr: 0.74, rep: '5.8%', status: 'Baseline Established', class: 'tag-healthy', flagged: false },
      { week: 2, date: 'Oct 16', score: 0.22, deviation: '+0.45σ', ttr: 0.71, rep: '6.4%', status: 'Mild Hesitation', class: 'tag-healthy', flagged: false },
      { week: 3, date: 'Oct 30', score: 0.35, deviation: '+1.10σ', ttr: 0.69, rep: '8.2%', status: 'Fluctuating Latency', class: 'tag-warning', flagged: false },
      { week: 4, date: 'Nov 14', score: 0.52, deviation: '+1.72σ', ttr: 0.66, rep: '10.5%', status: 'Executive Dip', class: 'tag-warning', flagged: true },
      { week: 5, date: 'Nov 28', score: 0.58, deviation: '+1.85σ', ttr: 0.65, rep: '11.2%', status: 'Moderate Variance', class: 'tag-warning', flagged: true }
    ],
    radarMetrics: [0.65, 0.72, 7.0 / 12, 0.74, 0.48, 0.58],
    shapImpacts: [
      { name: '1. Acoustic Pause Latency Fluctuation', impact: '+0.29 SHAP impact', pct: 72, color: 'fill-amber', isPositive: true },
      { name: '2. Articulatory Rate Reduction (Words/min)', impact: '+0.22 SHAP impact', pct: 56, color: 'fill-amber', isPositive: true },
      { name: '3. Subordinate Clause Simplification', impact: '+0.15 SHAP impact', pct: 38, color: 'fill-blue', isPositive: true },
      { name: '4. Vocabulary Richness (Preserved TTR: 0.65)', impact: '-0.12 SHAP protective', pct: 30, color: 'fill-teal', isPositive: false }
    ]
  },
  '1088': {
    id: '#1088',
    name: 'Arthur P.',
    age: 71,
    gender: 'Male',
    cohort: 'Frontotemporal Speech Subtype',
    demographics: 'Male, 71 y/o • Non-Fluent Variant Cohort • 6 Bi-weekly Observations',
    statusTag: 'Moderate Variance',
    statusClass: 'tag-warning',
    signalScore: 0.65,
    signalLabel: 'Moderate (0.65)',
    signalColorClass: 'val-moderate',
    baselineStatus: 'Divergent (+2.12σ)',
    trajectoryText: 'Progressive Semantic Drift',
    trajectorySub: 'Agrammatism and effortful speech production noted in narrative elicitation',
    lastAssessment: 'Week 6 (Dec 19, 2025)',
    observationsCount: 6,
    confidenceInterval: '[0.68 – 0.80]',
    confidenceLevel: 'High Fidelity',
    snr: '29.5 dB',
    acousticQuality: '0.95 / 1.00',
    missingRate: '0.0%',
    modelAgreement: '3 / 3 Models Aligned (100%)',
    models: [
      { name: 'Regularized Logistic Regression', status: 'Moderate', val: '0.62', class: 'sig-moderate' },
      { name: 'Random Forest (100 Trees)', status: 'Moderate', val: '0.68', class: 'sig-moderate' },
      { name: 'Extreme Gradient Boosting (XGBoost)', status: 'Moderate', val: '0.65', class: 'sig-moderate' }
    ],
    showFirstSignal: true,
    firstSignalTitle: 'Syntactic Agrammatism Shift Detected — Week 4',
    firstSignalDesc: 'Marked reduction in closed-class functor words and omission of grammatical inflection markers.',
    baselineRange: { min: 0.10, max: 0.24, baselineScore: 0.16 },
    trajectoryHistory: [
      { week: 1, date: 'Oct 10', score: 0.16, deviation: '+0.05σ', ttr: 0.70, rep: '5.2%', status: 'Baseline Established', class: 'tag-healthy', flagged: false },
      { week: 2, date: 'Oct 24', score: 0.21, deviation: '+0.32σ', ttr: 0.67, rep: '6.1%', status: 'Within Baseline', class: 'tag-healthy', flagged: false },
      { week: 3, date: 'Nov 07', score: 0.32, deviation: '+0.88σ', ttr: 0.63, rep: '7.8%', status: 'Functor Omission', class: 'tag-healthy', flagged: false },
      { week: 4, date: 'Nov 21', score: 0.54, deviation: '+1.75σ', ttr: 0.58, rep: '11.0%', status: 'Agrammatism Signal', class: 'tag-warning', flagged: true },
      { week: 5, date: 'Dec 05', score: 0.61, deviation: '+2.01σ', ttr: 0.52, rep: '13.5%', status: 'Persistent Shift', class: 'tag-warning', flagged: true },
      { week: 6, date: 'Dec 19', score: 0.65, deviation: '+2.12σ', ttr: 0.49, rep: '15.2%', status: 'Moderate Progression', class: 'tag-warning', flagged: true }
    ],
    radarMetrics: [0.55, 0.60, 5.0 / 12, 0.62, 0.52, 0.59],
    shapImpacts: [
      { name: '1. Syntactic Functor Omission Rate', impact: '+0.31 SHAP impact', pct: 78, color: 'fill-red', isPositive: true },
      { name: '2. Mean Length of Utterance (MLU Decay)', impact: '+0.25 SHAP impact', pct: 62, color: 'fill-amber', isPositive: true },
      { name: '3. Repetition Rate Acceleration', impact: '+0.16 SHAP impact', pct: 40, color: 'fill-blue', isPositive: true }
    ]
  },
  '4012': {
    id: '#4012',
    name: 'Grace M.',
    age: 65,
    gender: 'Female',
    cohort: 'Subjective Cognitive Decline Cohort',
    demographics: 'Female, 65 y/o • Subjective Cognitive Complaints (SCD) • 6 Bi-weekly Observations',
    statusTag: 'Nominal Baseline',
    statusClass: 'tag-healthy',
    signalScore: 0.18,
    signalLabel: 'Nominal (0.18)',
    signalColorClass: 'val-nominal',
    baselineStatus: 'Calibrated (+0.25σ)',
    trajectoryText: 'Objective Normative Stability',
    trajectorySub: 'Linguistic biomarker metrics demonstrate zero objective decline despite subjective concerns',
    lastAssessment: 'Week 6 (Dec 22, 2025)',
    observationsCount: 6,
    confidenceInterval: '[0.80 – 0.92]',
    confidenceLevel: 'High Fidelity',
    snr: '30.4 dB',
    acousticQuality: '0.97 / 1.00',
    missingRate: '0.0%',
    modelAgreement: '3 / 3 Models Aligned (100%)',
    models: [
      { name: 'Regularized Logistic Regression', status: 'Nominal', val: '0.16', class: 'sig-nominal' },
      { name: 'Random Forest (100 Trees)', status: 'Nominal', val: '0.19', class: 'sig-nominal' },
      { name: 'Extreme Gradient Boosting (XGBoost)', status: 'Nominal', val: '0.18', class: 'sig-nominal' }
    ],
    showFirstSignal: false,
    firstSignalTitle: '',
    firstSignalDesc: '',
    baselineRange: { min: 0.09, max: 0.22, baselineScore: 0.15 },
    trajectoryHistory: [
      { week: 1, date: 'Oct 13', score: 0.15, deviation: '+0.03σ', ttr: 0.77, rep: '4.4%', status: 'Baseline Established', class: 'tag-healthy', flagged: false },
      { week: 2, date: 'Oct 27', score: 0.14, deviation: '-0.02σ', ttr: 0.78, rep: '4.1%', status: 'Within Baseline', class: 'tag-healthy', flagged: false },
      { week: 3, date: 'Nov 10', score: 0.19, deviation: '+0.21σ', ttr: 0.75, rep: '4.8%', status: 'Transient Fatigue', class: 'tag-healthy', flagged: false },
      { week: 4, date: 'Nov 24', score: 0.16, deviation: '+0.08σ', ttr: 0.76, rep: '4.3%', status: 'Within Baseline', class: 'tag-healthy', flagged: false },
      { week: 5, date: 'Dec 08', score: 0.17, deviation: '+0.12σ', ttr: 0.77, rep: '4.5%', status: 'Within Baseline', class: 'tag-healthy', flagged: false },
      { week: 6, date: 'Dec 22', score: 0.18, deviation: '+0.15σ', ttr: 0.76, rep: '4.7%', status: 'Objective Stability', class: 'tag-healthy', flagged: false }
    ],
    radarMetrics: [0.78, 0.81, 9.2 / 12, 0.85, 0.82, 0.80],
    shapImpacts: [
      { name: '1. High Semantic Coherence Score', impact: '-0.22 SHAP protective', pct: 55, color: 'fill-teal', isPositive: false },
      { name: '2. Intact Lexical Diversity (TTR: 0.76)', impact: '-0.19 SHAP protective', pct: 48, color: 'fill-teal', isPositive: false },
      { name: '3. Normal Articulatory Speech Rate', impact: '-0.14 SHAP protective', pct: 35, color: 'fill-teal', isPositive: false }
    ]
  }
};

// ============================================================================
// STANDARDIZED ASSESSMENT TASKS DATABASE
// ============================================================================
const ASSESSMENT_TASKS = {
  'cookie-theft': {
    title: 'Boston Cookie Theft Picture Description',
    protocol: 'Protocol BDAE-02',
    img: 'assets/images/cookie-theft.jpg',
    caption: 'Boston Cookie Theft Picture Description. Subject describes everything happening in the scene for 60 seconds without interruption.',
    transcript: '"She is... <span class=\'word-highlight-pause\'>[pause 2.4s]</span> washing the things at the water place. The water is spilling. And the boy is... <span class=\'word-highlight-repetition\'>the boy is, the boy is</span> getting into the jar for the <span class=\'word-highlight-pause\'>[pause 1.8s]</span> the sweet things, cookies. The stool is falling."',
    meters: { ttr: 0.51, rep: 18.4, coh: 0.58, syn: 6.2, flu: 64 }
  },
  'animal-fluency': {
    title: 'Semantic Category Fluency (Animals - 60s)',
    protocol: 'Protocol BDAE-03',
    img: 'assets/images/cookie-theft.jpg',
    caption: 'Category Fluency Task: Name as many animals as possible within 60 seconds. Assesses rapid semantic clustering and executive search.',
    transcript: '"Dog, cat, horse... <span class=\'word-highlight-pause\'>[pause 3.2s]</span> cow, sheep, pig... <span class=\'word-highlight-pause\'>[pause 4.1s]</span>... and... dog again. Did I say dog? Horse... <span class=\'word-highlight-repetition\'>horse, horse</span>... tiger, lion."',
    meters: { ttr: 0.68, rep: 12.1, coh: 0.72, syn: 4.8, flu: 58 }
  },
  'story-recall': {
    title: 'Delayed Narrative Story Recall (WMS-IV)',
    protocol: 'Protocol WMS-IV',
    img: 'assets/images/cookie-theft.jpg',
    caption: 'Delayed Story Recall: Subject recalls all details from the standard short narrative presented 20 minutes prior.',
    transcript: '"The woman... <span class=\'word-highlight-pause\'>[pause 2.6s]</span> went to the grocery store. She bought... something to eat. She... <span class=\'word-highlight-repetition\'>she forgot, she forgot</span> her money or bag. A police officer helped her... that\'s all I remember."',
    meters: { ttr: 0.46, rep: 22.5, coh: 0.52, syn: 5.4, flu: 52 }
  }
};

// Global App State
let activePatientId = '1042';

// ============================================================================
// DOM INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Toast Notification System
  initToastSystem();

  // 2. Navigation & View Routing
  initNavigation();

  // 3. Collapsible Sidebar
  initSidebarToggle();

  // 4. Spotlight Command Palette (Ctrl + K)
  initSpotlightSearch();

  // 5. Patient Cohort Switcher & Synchronization
  initPatientEngine();

  // 6. Interactive Trajectory Canvas Chart
  initTrajectoryChart();

  // 7. Case Repository Interactive Table
  initCaseRepositoryEngine();

  // 8. Voice Screening Multi-Task Engine
  initVoiceScreeningEngine();

  // 9. Modals: Clinical Report, New Session, Settings, Profile, Notifications
  initModalSystem();

  // 10. 3D Latent State Space Engine
  if (typeof CognitiveStateSpace3D !== 'undefined') {
    const stateSpaceInstance = new CognitiveStateSpace3D('canvas-3d-space');
    window.stateSpaceInstance = stateSpaceInstance;
  }

  // 11. Case Replay Engine
  if (typeof CaseReplayEngine !== 'undefined') {
    const caseReplayInstance = new CaseReplayEngine();
    window.caseReplayInstance = caseReplayInstance;
  }

  // 12. Evidence RAG Engine
  if (typeof EvidenceRAGEngine !== 'undefined') {
    const evidenceRAGInstance = new EvidenceRAGEngine();
    window.evidenceRAGInstance = evidenceRAGInstance;
  }

  // 13. Synthetic Laboratory
  if (typeof SyntheticLaboratory !== 'undefined') {
    const syntheticLabInstance = new SyntheticLaboratory('canvas-synthetic-chart');
    window.syntheticLabInstance = syntheticLabInstance;
  }

  // 14. Cognitive Fingerprint Radar
  initRadarFingerprint();

  // 15. Research Benchmark Threshold Slider
  initEvaluationThresholdSlider();

  // 16. Longitudinal Timeline Stepper
  initTimelineStepInteractions();

  // Initial Load of Case #1042
  window.loadPatient('1042');
});

// ============================================================================
// TOAST NOTIFICATION SYSTEM
// ============================================================================
function initToastSystem() {
  const container = document.getElementById('toast-container');

  window.showToast = function(title, message = '', type = 'success') {
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast-msg toast-${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    } else if (type === 'warning') {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
    } else {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `
      ${iconSvg}
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        ${message ? `<div class="toast-text">${message}</div>` : ''}
      </div>
      <button class="toast-close-btn" onclick="this.parentElement.remove()">✕</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 250);
    }, 4500);
  };
}

// ============================================================================
// NAVIGATION & VIEW SYSTEM
// ============================================================================
function initNavigation() {
  const views = document.querySelectorAll('.module-view');
  const viewNameMap = {
    'landing': 'Home Overview',
    'dashboard': 'Clinical Dashboard',
    'cases': 'Case Repository',
    'voice-screening': 'Voice Screening Studio',
    'nlp-lab': 'NLP & SHAP Lab',
    'longitudinal-3d': '3D Latent State Space',
    'evidence-rag': 'Evidence Battle RAG',
    'case-replay': 'Case Replay Studio',
    'synthetic-lab': 'Synthetic Cohort Lab',
    'research-lab': 'Model Benchmarks & ROC',
    'about-ethics': 'Scientific & Ethical Scope'
  };

  window.switchView = function(viewId) {
    views.forEach(v => {
      v.classList.remove('active-view');
      if (v.id === `view-${viewId}`) {
        v.classList.add('active-view');
      }
    });

    // Update active state in sidebar
    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.classList.toggle('active', link.dataset.targetView === viewId);
    });

    // Update topbar breadcrumb
    const breadcrumbEl = document.getElementById('topbar-current-view-name');
    if (breadcrumbEl && viewNameMap[viewId]) {
      breadcrumbEl.innerText = viewNameMap[viewId];
    }

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Handle view specific re-renders
    if (viewId === 'dashboard' && window.renderTrajectoryChart) {
      setTimeout(() => window.renderTrajectoryChart(), 60);
    }
    if (viewId === 'cases' && window.renderCaseRepository) {
      setTimeout(() => window.renderCaseRepository(), 40);
    }
    if (viewId === 'longitudinal-3d' && window.stateSpaceInstance) {
      setTimeout(() => {
        window.stateSpaceInstance.initCanvasSize();
        window.stateSpaceInstance.render();
      }, 50);
    }
    if (viewId === 'synthetic-lab' && window.syntheticLabInstance) {
      setTimeout(() => {
        window.syntheticLabInstance.generateTrajectory();
      }, 50);
    }
  };

  // Wire click events on elements with data-target-view
  document.querySelectorAll('[data-target-view]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const target = elem.dataset.targetView;
      if (target) {
        window.switchView(target);
      }
    });
  });
}

// ============================================================================
// COLLAPSIBLE SIDEBAR
// ============================================================================
function initSidebarToggle() {
  const sidebar = document.getElementById('app-sidebar');
  const appLayout = document.getElementById('app-layout');
  const btnCollapse = document.getElementById('sidebar-collapse-btn');
  const btnTopbarToggle = document.getElementById('topbar-sidebar-toggle');

  function toggleSidebar() {
    if (window.innerWidth <= 768) {
      sidebar.classList.toggle('mobile-open');
    } else {
      const isCollapsed = sidebar.classList.toggle('collapsed');
      appLayout.classList.toggle('sidebar-collapsed', isCollapsed);
      setTimeout(() => {
        if (window.renderTrajectoryChart) window.renderTrajectoryChart();
        if (window.stateSpaceInstance) {
          window.stateSpaceInstance.initCanvasSize();
          window.stateSpaceInstance.render();
        }
      }, 250);
    }
  }

  if (btnCollapse) btnCollapse.addEventListener('click', toggleSidebar);
  if (btnTopbarToggle) btnTopbarToggle.addEventListener('click', toggleSidebar);

  // Close mobile sidebar on navigation click
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('mobile-open');
      }
    });
  });
}

// ============================================================================
// PATIENT COHORT ENGINE
// ============================================================================
function initPatientEngine() {
  const topSelect = document.getElementById('topbar-patient-select');
  const wizardSelect = document.getElementById('wizard-patient-select');
  const btnSidebarSwitch = document.getElementById('sidebar-patient-switch-btn');

  window.loadPatient = function(patientId) {
    activePatientId = patientId;
    const p = PATIENT_DATABASE[patientId];
    if (!p) return;

    // 1. Sync dropdowns
    if (topSelect) topSelect.value = patientId;
    if (wizardSelect) wizardSelect.value = patientId;

    // 2. Update sidebar patient card
    const sbName = document.getElementById('sidebar-patient-name-display');
    const sbMeta = document.getElementById('sidebar-patient-meta-display');
    if (sbName) sbName.innerText = `${p.id} — ${p.name}`;
    if (sbMeta) sbMeta.innerText = p.cohort;

    // 3. Update dashboard header & case overview
    const dashId = document.getElementById('dash-case-id');
    const dashName = document.getElementById('dash-patient-name');
    const dashDemog = document.getElementById('dash-patient-demographics');
    const dashTag = document.getElementById('dash-status-tag');
    const dashLast = document.getElementById('dash-last-assessment');
    const dashObs = document.getElementById('dash-total-obs');

    if (dashId) dashId.innerText = p.id;
    if (dashName) dashName.innerText = p.name;
    if (dashDemog) dashDemog.innerText = p.demographics;
    if (dashTag) {
      dashTag.innerText = p.statusTag;
      dashTag.className = `stat-tag ${p.statusClass}`;
    }
    if (dashLast) dashLast.innerText = p.lastAssessment;
    if (dashObs) dashObs.innerText = `${p.observationsCount} Sessions`;

    // 4. Update KPI Cards
    const kpiSignal = document.getElementById('kpi-cognitive-signal');
    const kpiSignalTag = document.getElementById('kpi-signal-tag');
    const kpiTrajectory = document.getElementById('kpi-trajectory-status');
    const kpiTrajectorySub = document.getElementById('kpi-trajectory-sub');
    const kpiCi = document.getElementById('kpi-confidence-interval');
    const kpiCiLevel = document.getElementById('kpi-confidence-level');
    const kpiQuality = document.getElementById('kpi-signal-quality');
    const kpiSnr = document.getElementById('kpi-snr-db');

    if (kpiSignal) {
      kpiSignal.innerText = p.signalScore.toFixed(2);
      kpiSignal.className = `kpi-value ${p.signalColorClass}`;
    }
    if (kpiSignalTag) {
      kpiSignalTag.innerText = p.signalLabel;
      kpiSignalTag.className = `stat-tag ${p.statusClass}`;
    }
    if (kpiTrajectory) kpiTrajectory.innerText = p.trajectoryText;
    if (kpiTrajectorySub) kpiTrajectorySub.innerText = p.trajectorySub;
    if (kpiCi) kpiCi.innerText = p.confidenceInterval;
    if (kpiCiLevel) kpiCiLevel.innerText = p.confidenceLevel;
    if (kpiQuality) kpiQuality.innerText = p.acousticQuality;
    if (kpiSnr) kpiSnr.innerText = `SNR ${p.snr}`;

    // 5. Update First Signal Alert Banner
    const firstSignalEl = document.getElementById('first-signal-alert-banner');
    if (firstSignalEl) {
      firstSignalEl.style.display = p.showFirstSignal ? 'flex' : 'none';
      if (p.showFirstSignal) {
        const titleEl = firstSignalEl.querySelector('.first-signal-body h4');
        const descEl = firstSignalEl.querySelector('.first-signal-body p');
        if (titleEl) titleEl.innerText = p.firstSignalTitle;
        if (descEl) descEl.innerHTML = p.firstSignalDesc;
      }
    }

    // 6. Update Model Consensus
    const modelContainer = document.getElementById('model-consensus-rows');
    const modelAgreementTag = document.getElementById('model-agreement-tag');
    if (modelAgreementTag) modelAgreementTag.innerText = p.modelAgreement;

    if (modelContainer && p.models) {
      modelContainer.innerHTML = p.models.map(m => `
        <div class="model-consensus-row">
          <span class="model-row-name">${m.name}</span>
          <div class="model-row-meta">
            <span class="stat-tag ${m.class === 'sig-elevated' ? 'tag-alert' : m.class === 'sig-moderate' ? 'tag-warning' : 'tag-healthy'}">${m.status}</span>
            <span class="model-score-chip ${m.class}">${m.val}</span>
          </div>
        </div>
      `).join('');
    }

    // 7. Update Uncertainty & Signal Integrity
    const uncertCi = document.getElementById('uncert-ci');
    const uncertSnr = document.getElementById('uncert-snr');
    const uncertAcoustic = document.getElementById('uncert-acoustic');
    const uncertMissing = document.getElementById('uncert-missing');
    if (uncertCi) uncertCi.innerText = p.confidenceInterval;
    if (uncertSnr) uncertSnr.innerText = p.snr;
    if (uncertAcoustic) uncertAcoustic.innerText = p.acousticQuality;
    if (uncertMissing) uncertMissing.innerText = p.missingRate;

    // 8. Update SHAP Feature Bars
    const shapContainer = document.getElementById('shap-features-list');
    if (shapContainer && p.shapImpacts) {
      shapContainer.innerHTML = p.shapImpacts.map(it => `
        <div class="shap-row">
          <div class="shap-row-header">
            <span class="shap-name">${it.name}</span>
            <span class="shap-impact ${it.isPositive ? 'positive' : 'negative'}">${it.impact}</span>
          </div>
          <div class="shap-track">
            <div class="shap-fill ${it.color}" style="width: ${it.pct}%;"></div>
          </div>
        </div>
      `).join('');
    }

    // 9. Update Observations Timeline Table
    renderObservationsTable(p);

    // 10. Redraw Interactive Trajectory Chart
    if (window.renderTrajectoryChart) {
      window.renderTrajectoryChart();
    }

    // 11. Update Radar Fingerprint if available
    if (window.drawRadarChart && p.radarMetrics) {
      window.drawRadarChart(p.radarMetrics);
    }

    // 12. Update Report Modal Data
    const rId = document.getElementById('report-patient-id');
    const rDemog = document.getElementById('report-patient-demog');
    const rTag = document.getElementById('report-case-tag');
    if (rId) rId.innerText = `CASE ${p.id}`;
    if (rDemog) rDemog.innerText = p.demographics;
    if (rTag) {
      rTag.innerText = p.statusTag;
      rTag.className = `stat-tag ${p.statusClass}`;
    }
  };

  if (topSelect) topSelect.addEventListener('change', (e) => {
    window.loadPatient(e.target.value);
    window.showToast(`Switched active subject to ${e.target.value}`, `Loaded clinical profile`, 'info');
  });

  if (btnSidebarSwitch) btnSidebarSwitch.addEventListener('click', () => {
    const keys = Object.keys(PATIENT_DATABASE);
    const curr = activePatientId;
    const nextIdx = (keys.indexOf(curr) + 1) % keys.length;
    window.loadPatient(keys[nextIdx]);
    window.showToast(`Switched active subject to ${PATIENT_DATABASE[keys[nextIdx]].name}`, 'info');
  });
}

// ============================================================================
// OBSERVATIONS TIMELINE TABLE
// ============================================================================
function renderObservationsTable(patient) {
  const tbody = document.getElementById('observations-table-body');
  if (!tbody || !patient.trajectoryHistory) return;

  tbody.innerHTML = patient.trajectoryHistory.map(obs => `
    <tr class="${obs.flagged ? 'row-flagged' : ''}">
      <td><strong style="font-family: var(--font-mono); color: var(--text-primary);">Week ${obs.week}</strong></td>
      <td>${obs.date}, 2025</td>
      <td><span style="font-family: var(--font-mono); font-weight: 600;">${obs.score.toFixed(2)}</span></td>
      <td><span style="font-family: var(--font-mono); color: ${obs.deviation.startsWith('+2') || obs.deviation.startsWith('+1') ? '#b91c1c' : 'var(--text-secondary)'}; font-weight: 500;">${obs.deviation}</span></td>
      <td><span style="font-family: var(--font-mono);">${obs.ttr}</span></td>
      <td><span style="font-family: var(--font-mono);">${obs.rep}</span></td>
      <td><span class="stat-tag ${obs.class}">${obs.status}</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="window.switchView('case-replay'); window.caseReplayInstance && window.caseReplayInstance.loadObservation(${obs.week - 1});">
          Inspect
        </button>
      </td>
    </tr>
  `).join('');
}

// ============================================================================
// LONGITUDINAL TRAJECTORY CHART (High-DPI Interactive Canvas)
// ============================================================================
function initTrajectoryChart() {
  const canvas = document.getElementById('canvas-trajectory');
  const tooltip = document.getElementById('trajectory-tooltip');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let currentPoints = [];

  function drawChart() {
    const p = PATIENT_DATABASE[activePatientId];
    if (!p || !p.trajectoryHistory) return;

    const history = p.trajectoryHistory;
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = rect.width;
    const h = rect.height;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.resetTransform();
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, w, h);

    const padLeft = 44;
    const padRight = 24;
    const padTop = 20;
    const padBottom = 34;

    const plotW = w - padLeft - padRight;
    const plotH = h - padTop - padBottom;

    // Y Axis: 0.0 to 1.0
    // 1. Shaded Expected Baseline Band
    const bandMinY = padTop + plotH * (1 - p.baselineRange.max);
    const bandMaxY = padTop + plotH * (1 - p.baselineRange.min);
    ctx.fillStyle = 'rgba(16, 185, 129, 0.08)';
    ctx.fillRect(padLeft, bandMinY, plotW, bandMaxY - bandMinY);

    // Baseline tolerance text
    ctx.font = '10px "Inter", sans-serif';
    ctx.fillStyle = '#059669';
    ctx.textAlign = 'right';
    ctx.fillText('Personal Baseline Range', w - padRight - 6, (bandMinY + bandMaxY) / 2 + 3);

    // 2. Horizontal Grid Lines & Y Labels
    const yTicks = [0.0, 0.25, 0.50, 0.75, 1.0];
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    yTicks.forEach(val => {
      const y = padTop + plotH * (1 - val);
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(padLeft + plotW, y);
      ctx.strokeStyle = val === 0.50 ? '#fde68a' : '#f1f5f9';
      ctx.lineWidth = val === 0.50 ? 1.5 : 1;
      if (val === 0.50) ctx.setLineDash([4, 4]);
      else ctx.setLineDash([]);
      ctx.stroke();

      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillStyle = val === 0.50 ? '#d97706' : '#94a3b8';
      ctx.fillText(val.toFixed(2), padLeft - 8, y);
    });
    ctx.setLineDash([]);

    // Cutoff annotation
    ctx.font = '9px "Inter", sans-serif';
    ctx.fillStyle = '#b45309';
    ctx.textAlign = 'left';
    ctx.fillText('First Signal Cutoff (0.50)', padLeft + 6, padTop + plotH * 0.5 - 6);

    // 3. X Coordinates for Observations
    const numPoints = history.length;
    currentPoints = [];

    history.forEach((obs, i) => {
      const x = padLeft + (numPoints === 1 ? plotW / 2 : (plotW / (numPoints - 1)) * i);
      const y = padTop + plotH * (1 - Math.min(1, Math.max(0, obs.score)));
      currentPoints.push({ x, y, obs });

      // X Axis Label
      ctx.font = '11px "Inter", sans-serif';
      ctx.fillStyle = obs.flagged ? '#b91c1c' : '#64748b';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(`W${obs.week}`, x, padTop + plotH + 8);

      ctx.font = '9px "Inter", sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(obs.date, x, padTop + plotH + 22);
    });

    // 4. Draw Smoothed Trajectory Path
    if (currentPoints.length > 1) {
      ctx.beginPath();
      ctx.moveTo(currentPoints[0].x, currentPoints[0].y);

      for (let i = 0; i < currentPoints.length - 1; i++) {
        const p0 = currentPoints[i];
        const p1 = currentPoints[i + 1];
        const midX = (p0.x + p1.x) / 2;
        ctx.bezierCurveTo(midX, p0.y, midX, p1.y, p1.x, p1.y);
      }

      ctx.strokeStyle = p.statusClass === 'tag-alert' ? '#ef4444' : p.statusClass === 'tag-warning' ? '#f59e0b' : '#0d9488';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Soft Area Gradient Under Curve
      ctx.lineTo(currentPoints[currentPoints.length - 1].x, padTop + plotH);
      ctx.lineTo(currentPoints[0].x, padTop + plotH);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, padTop, 0, padTop + plotH);
      if (p.statusClass === 'tag-alert') {
        grad.addColorStop(0, 'rgba(239, 68, 68, 0.12)');
        grad.addColorStop(1, 'rgba(239, 68, 68, 0.0)');
      } else {
        grad.addColorStop(0, 'rgba(13, 148, 136, 0.12)');
        grad.addColorStop(1, 'rgba(13, 148, 136, 0.0)');
      }
      ctx.fillStyle = grad;
      ctx.fill();
    }

    // 5. Draw Individual Observation Point Nodes
    currentPoints.forEach(pt => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.obs.flagged ? 6 : 4.5, 0, Math.PI * 2);
      ctx.fillStyle = pt.obs.flagged ? '#ef4444' : '#ffffff';
      ctx.fill();
      ctx.strokeStyle = pt.obs.flagged ? '#ffffff' : '#0d9488';
      ctx.lineWidth = 2;
      ctx.stroke();

      if (pt.obs.flagged) {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 9, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.35)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    });
  }

  // Hover Interaction & Floating Tooltip
  canvas.addEventListener('mousemove', (e) => {
    if (!currentPoints.length || !tooltip) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let closest = null;
    let minDist = 24;

    currentPoints.forEach(pt => {
      const dist = Math.hypot(pt.x - mouseX, pt.y - mouseY);
      if (dist < minDist) {
        minDist = dist;
        closest = pt;
      }
    });

    if (closest) {
      tooltip.style.left = `${closest.x}px`;
      tooltip.style.top = `${closest.y}px`;
      tooltip.innerHTML = `
        <div style="font-weight: 700; color: #38bdf8;">Week ${closest.obs.week} (${closest.obs.date}, 2025)</div>
        <div>Cognitive Signal: <strong>${closest.obs.score.toFixed(2)}</strong> (${closest.obs.deviation})</div>
        <div>TTR: ${closest.obs.ttr} • Repetition: ${closest.obs.rep}</div>
        <div style="color: ${closest.obs.flagged ? '#f87171' : '#4ade80'}; font-weight: 600; margin-top: 2px;">${closest.obs.status}</div>
      `;
      tooltip.classList.add('active');
    } else {
      tooltip.classList.remove('active');
    }
  });

  canvas.addEventListener('mouseleave', () => {
    if (tooltip) tooltip.classList.remove('active');
  });

  window.renderTrajectoryChart = drawChart;
  window.addEventListener('resize', drawChart);
  drawChart();
}

// ============================================================================
// CASE REPOSITORY INTERACTIVE ENGINE
// ============================================================================
function initCaseRepositoryEngine() {
  const searchInput = document.getElementById('repo-search-input');
  const cohortFilter = document.getElementById('repo-cohort-filter');
  const statusFilter = document.getElementById('repo-status-filter');
  const sortSelect = document.getElementById('repo-sort-select');
  const tbody = document.getElementById('repo-table-body');
  const countEl = document.getElementById('repo-count-badge');

  window.renderCaseRepository = function() {
    if (!tbody) return;

    const query = (searchInput?.value || '').toLowerCase().trim();
    const cohort = cohortFilter?.value || 'all';
    const status = statusFilter?.value || 'all';
    const sort = sortSelect?.value || 'last';

    let cases = Object.values(PATIENT_DATABASE);

    // 1. Text Search Filter
    if (query) {
      cases = cases.filter(c => 
        c.id.toLowerCase().includes(query) ||
        c.name.toLowerCase().includes(query) ||
        c.cohort.toLowerCase().includes(query)
      );
    }

    // 2. Cohort Filter
    if (cohort !== 'all') {
      cases = cases.filter(c => c.cohort.toLowerCase().includes(cohort.toLowerCase()));
    }

    // 3. Status Filter
    if (status !== 'all') {
      cases = cases.filter(c => {
        if (status === 'elevated') return c.statusClass === 'tag-alert';
        if (status === 'nominal') return c.statusClass === 'tag-healthy';
        if (status === 'moderate') return c.statusClass === 'tag-warning';
        return true;
      });
    }

    // 4. Sorting
    if (sort === 'score-desc') {
      cases.sort((a, b) => b.signalScore - a.signalScore);
    } else if (sort === 'score-asc') {
      cases.sort((a, b) => a.signalScore - b.signalScore);
    } else if (sort === 'id') {
      cases.sort((a, b) => a.id.localeCompare(b.id));
    } else {
      cases.sort((a, b) => b.observationsCount - a.observationsCount);
    }

    if (countEl) countEl.innerText = `${cases.length} Cohort Subjects`;

    if (cases.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 32px; color: var(--text-muted);">
            No matching research subjects found. Try adjusting your search or filters.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = cases.map(c => `
      <tr>
        <td><strong style="font-family: var(--font-mono); color: var(--text-primary);">${c.id}</strong></td>
        <td>
          <div style="font-weight: 600; color: var(--text-primary);">${c.name}</div>
          <div style="font-size: 0.72rem; color: var(--text-muted);">${c.age} y/o • ${c.gender}</div>
        </td>
        <td><span style="font-size: 0.8rem; color: var(--text-secondary);">${c.cohort}</span></td>
        <td><span style="font-size: 0.8rem; font-family: var(--font-mono);">${c.lastAssessment}</span></td>
        <td><span class="stat-tag ${c.statusClass}">${c.statusTag}</span></td>
        <td><span style="font-size: 0.8rem; font-family: var(--font-mono);">${c.confidenceLevel}</span></td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="window.loadPatient('${c.id.replace('#', '')}'); window.switchView('dashboard');">
            Open Case →
          </button>
        </td>
      </tr>
    `).join('');
  };

  if (searchInput) searchInput.addEventListener('input', window.renderCaseRepository);
  if (cohortFilter) cohortFilter.addEventListener('change', window.renderCaseRepository);
  if (statusFilter) statusFilter.addEventListener('change', window.renderCaseRepository);
  if (sortSelect) sortSelect.addEventListener('change', window.renderCaseRepository);

  window.renderCaseRepository();
}

// ============================================================================
// VOICE SCREENING MULTI-TASK & AUDIO STUDIO
// ============================================================================
function initVoiceScreeningEngine() {
  const taskChips = document.querySelectorAll('.task-chip-btn');
  const stimImg = document.getElementById('screening-stimulus-img');
  const stimCap = document.getElementById('screening-stimulus-caption');
  const protoTag = document.getElementById('voice-screening-protocol-tag');
  const transcriptEl = document.getElementById('live-transcript-stream');
  const btnPlaySample = document.getElementById('btn-play-sample-audio');
  const inputUpload = document.getElementById('input-audio-upload');
  const btnExtract = document.getElementById('btn-extract-features');
  const btnRecord = document.getElementById('btn-record-audio');
  const canvasWave = document.getElementById('canvas-waveform');
  const timerEl = document.getElementById('recording-timer');

  let currentTask = 'cookie-theft';
  let isPlayingSample = false;
  let isRecording = false;
  let audioContext = null;

  taskChips.forEach(chip => {
    chip.addEventListener('click', () => {
      taskChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const taskId = chip.dataset.taskId;
      currentTask = taskId;
      const t = ASSESSMENT_TASKS[taskId];
      if (!t) return;

      if (stimImg) stimImg.src = t.img;
      if (stimCap) stimCap.innerHTML = `<strong>Stimulus Task:</strong> ${t.caption}`;
      if (protoTag) protoTag.innerText = t.protocol;
      if (transcriptEl) transcriptEl.innerHTML = t.transcript;

      // Update meters
      const valTtr = document.getElementById('val-ttr');
      const barTtr = document.getElementById('bar-ttr');
      if (valTtr) valTtr.innerText = `${t.meters.ttr} (TTR)`;
      if (barTtr) barTtr.style.width = `${t.meters.ttr * 100}%`;

      const valRep = document.getElementById('val-rep');
      const barRep = document.getElementById('bar-rep');
      if (valRep) valRep.innerText = `${t.meters.rep}%`;
      if (barRep) barRep.style.width = `${Math.min(100, t.meters.rep * 3)}%`;

      const valCoh = document.getElementById('val-coh');
      const barCoh = document.getElementById('bar-coh');
      if (valCoh) valCoh.innerText = `${t.meters.coh}`;
      if (barCoh) barCoh.style.width = `${t.meters.coh * 100}%`;

      window.showToast(`Loaded ${t.title}`, 'info');
    });
  });

  // Waveform canvas rendering
  const ctx = canvasWave ? canvasWave.getContext('2d') : null;
  function drawWaveform() {
    if (!canvasWave || !ctx) return;
    const w = canvasWave.parentElement.clientWidth || 300;
    const h = 36;
    canvasWave.width = w;
    canvasWave.height = h;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(0, 0, w, h);

    const bars = Math.floor(w / 4);
    const active = isRecording || isPlayingSample;
    for (let i = 0; i < bars; i++) {
      const heightMultiplier = active ? (Math.sin(Date.now() * 0.009 + i * 0.28) * 0.5 + 0.5) * (Math.random() * 0.65 + 0.35) : 0.08;
      const barH = Math.max(3, heightMultiplier * 30);
      const x = i * 4;
      const y = (h - barH) / 2;

      ctx.fillStyle = active ? '#0d9488' : '#cbd5e1';
      ctx.fillRect(x, y, 2.5, barH);
    }

    requestAnimationFrame(drawWaveform);
  }
  if (canvasWave) drawWaveform();

  // Audio Recording Trigger
  if (btnRecord) {
    let timerInt = null;
    let recSecs = 0;

    btnRecord.addEventListener('click', () => {
      isRecording = !isRecording;
      btnRecord.classList.toggle('recording', isRecording);

      if (isRecording) {
        btnRecord.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>';
        recSecs = 0;
        timerInt = setInterval(() => {
          recSecs++;
          const mins = String(Math.floor(recSecs / 60)).padStart(2, '0');
          const secs = String(recSecs % 60).padStart(2, '0');
          if (timerEl) timerEl.innerText = `${mins}:${secs}`;
        }, 1000);
        window.showToast('Microphone Recording Started', 'Clinical acoustic intake active', 'success');
      } else {
        btnRecord.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>';
        clearInterval(timerInt);
        window.showToast('Recording Saved', 'Audio passed SNR quality check (28.4 dB)', 'success');
      }
    });
  }

  // Play Sample Audio
  if (btnPlaySample) {
    btnPlaySample.addEventListener('click', () => {
      isPlayingSample = !isPlayingSample;
      const icon = document.getElementById('btn-play-sample-icon');
      const text = document.getElementById('btn-play-sample-text');

      if (isPlayingSample) {
        if (icon) icon.innerText = '⏸';
        if (text) text.innerText = 'Pause Assessment Audio';
        window.showToast('Playing standardized assessment audio recording', 'info');

        try {
          audioContext = new (window.AudioContext || window.webkitAudioContext)();
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, audioContext.currentTime);
          gain.gain.setValueAtTime(0.04, audioContext.currentTime);
          osc.connect(gain);
          gain.connect(audioContext.destination);
          osc.start();
          setTimeout(() => {
            if (audioContext) {
              osc.stop();
              audioContext.close();
            }
            isPlayingSample = false;
            if (icon) icon.innerText = '▶';
            if (text) text.innerText = 'Play Assessment Audio';
          }, 3500);
        } catch (err) {
          setTimeout(() => {
            isPlayingSample = false;
            if (icon) icon.innerText = '▶';
            if (text) text.innerText = 'Play Assessment Audio';
          }, 3500);
        }
      } else {
        if (icon) icon.innerText = '▶';
        if (text) text.innerText = 'Play Assessment Audio';
        if (audioContext) audioContext.close();
      }
    });
  }

  // Upload Custom WAV
  if (inputUpload) {
    inputUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        window.showToast(`Uploaded: ${file.name}`, '44.1 kHz WAV • Automated feature extraction initialized', 'success');
        isPlayingSample = true;
        setTimeout(() => { isPlayingSample = false; }, 2500);
      }
    });
  }

  // Run NLP Feature Extraction
  if (btnExtract) {
    btnExtract.addEventListener('click', () => {
      btnExtract.innerHTML = `<span>Extracting Features...</span>`;
      btnExtract.disabled = true;

      setTimeout(() => {
        btnExtract.innerHTML = `<span>Run NLP Extraction</span>`;
        btnExtract.disabled = false;
        window.showToast('Feature Extraction Complete', 'Computed TTR, Brunét W, MLU, and clause depth vectors', 'success');
      }, 800);
    });
  }
}

// ============================================================================
// COGNITIVE FINGERPRINT RADAR VISUALIZER
// ============================================================================
function initRadarFingerprint() {
  const canvas = document.getElementById('canvas-radar-fingerprint');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const axes = [
    { label: 'Vocabulary Richness (TTR)', baseline: 0.85, current: 0.54 },
    { label: 'Semantic Coherence', baseline: 0.88, current: 0.62 },
    { label: 'Syntactic Complexity', baseline: 0.80, current: 0.50 },
    { label: 'Repetition Control', baseline: 0.90, current: 0.42 },
    { label: 'Speech Fluency', baseline: 0.85, current: 0.58 },
    { label: 'Discourse Density', baseline: 0.82, current: 0.65 }
  ];

  function drawRadar(currentValues) {
    const size = 280;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.resetTransform();
    ctx.scale(dpr, dpr);

    const cX = size / 2;
    const cY = size / 2;
    const maxR = size * 0.35;
    const numAxes = axes.length;

    ctx.clearRect(0, 0, size, size);

    // Concentric Polygon Rings
    for (let ring = 1; ring <= 4; ring++) {
      const r = (ring / 4) * maxR;
      ctx.beginPath();
      for (let i = 0; i < numAxes; i++) {
        const angle = (Math.PI * 2 / numAxes) * i - Math.PI / 2;
        const x = cX + Math.cos(angle) * r;
        const y = cY + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = ring === 4 ? '#cbd5e1' : '#f1f5f9';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Radial Axis Lines & Labels
    for (let i = 0; i < numAxes; i++) {
      const angle = (Math.PI * 2 / numAxes) * i - Math.PI / 2;
      const x = cX + Math.cos(angle) * maxR;
      const y = cY + Math.sin(angle) * maxR;

      ctx.beginPath();
      ctx.moveTo(cX, cY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = '#e2e8f0';
      ctx.stroke();

      const labelDist = maxR + 18;
      const lx = cX + Math.cos(angle) * labelDist;
      const ly = cY + Math.sin(angle) * labelDist;

      ctx.font = '500 10px "Inter", sans-serif';
      ctx.fillStyle = '#475569';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(axes[i].label, lx, ly);
    }

    // 1. Personal Baseline Poly (Teal Dashed)
    ctx.beginPath();
    for (let i = 0; i < numAxes; i++) {
      const angle = (Math.PI * 2 / numAxes) * i - Math.PI / 2;
      const val = axes[i].baseline;
      const x = cX + Math.cos(angle) * (val * maxR);
      const y = cY + Math.sin(angle) * (val * maxR);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(13, 148, 136, 0.1)';
    ctx.fill();
    ctx.strokeStyle = '#0d9488';
    ctx.setLineDash([3, 3]);
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]);

    // 2. Current Observation Poly (Amber/Red Solid)
    ctx.beginPath();
    for (let i = 0; i < numAxes; i++) {
      const angle = (Math.PI * 2 / numAxes) * i - Math.PI / 2;
      const val = currentValues ? currentValues[i] : axes[i].current;
      const x = cX + Math.cos(angle) * (val * maxR);
      const y = cY + Math.sin(angle) * (val * maxR);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(239, 68, 68, 0.15)';
    ctx.fill();
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  drawRadar();
  window.drawRadarChart = drawRadar;
  window.updateRadarFingerprint = function(data) {
    if (window.drawRadarChart && data) {
      const vals = [
        data.ttr || 0.6,
        data.coherence || 0.6,
        (data.syntax || 6) / 12,
        Math.max(0.1, 1 - ((data.repetition || 10) / 35)),
        (data.fluency || 60) / 100,
        0.65
      ];
      window.drawRadarChart(vals);
    }
  };
}

// ============================================================================
// MODALS SYSTEM (REPORT, NEW SESSION, SETTINGS, PROFILE, NOTIFICATIONS)
// ============================================================================
function initModalSystem() {
  function wireModal(modalId, triggerIds, closeIds) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    triggerIds.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.addEventListener('click', () => modal.classList.add('active'));
    });

    closeIds.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.addEventListener('click', () => modal.classList.remove('active'));
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  // 1. Clinical Report Modal
  wireModal('modal-clinical-report', ['topbar-btn-report', 'btn-sidebar-report', 'dash-btn-report'], ['modal-report-close']);
  const btnReportPrint = document.getElementById('btn-report-print');
  if (btnReportPrint) {
    btnReportPrint.addEventListener('click', () => window.print());
  }

  const btnReportJson = document.getElementById('btn-report-download-json');
  if (btnReportJson) {
    btnReportJson.addEventListener('click', () => {
      const record = {
        platform: 'CognitiveLens AI',
        version: 'v2.4-demelens',
        exportDate: new Date().toISOString(),
        patientData: PATIENT_DATABASE[activePatientId]
      };
      const blob = new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `CognitiveLens_Assessment_${activePatientId}_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      window.showToast('Downloaded Clinical JSON Record', 'success');
    });
  }

  // 2. New Screening Session Wizard Modal
  wireModal('modal-new-session', ['topbar-btn-new-session', 'dash-btn-new-session'], ['modal-new-session-close', 'btn-new-session-cancel']);
  const btnWizardStart = document.getElementById('btn-new-session-start');
  if (btnWizardStart) {
    btnWizardStart.addEventListener('click', () => {
      const modal = document.getElementById('modal-new-session');
      modal.classList.remove('active');
      const selectedPatient = document.getElementById('wizard-patient-select')?.value || '1042';
      const selectedTask = document.querySelector('input[name="wizard-task"]:checked')?.value || 'cookie-theft';
      const sessionDate = document.getElementById('wizard-session-date')?.value || 'Today';

      // Load patient
      window.loadPatient(selectedPatient);

      // Append new observation to active patient
      const p = PATIENT_DATABASE[selectedPatient];
      if (p) {
        const nextWeek = p.observationsCount + 1;
        p.observationsCount = nextWeek;
        p.lastAssessment = `Week ${nextWeek} (Current Session)`;
        p.trajectoryHistory.push({
          week: nextWeek,
          date: sessionDate,
          score: p.signalScore,
          deviation: p.statusClass === 'tag-alert' ? '+2.88σ' : '+0.10σ',
          ttr: 0.50,
          rep: '19.2%',
          status: 'Active Assessment',
          class: p.statusClass,
          flagged: p.statusClass === 'tag-alert'
        });
        window.loadPatient(selectedPatient);
      }

      // Activate task in Voice Screening
      const targetChip = document.querySelector(`.task-chip-btn[data-task-id="${selectedTask}"]`);
      if (targetChip) targetChip.click();

      window.switchView('voice-screening');
      window.showToast('New Assessment Session Created', `Initialized protocol: ${selectedTask.toUpperCase()}`, 'success');
    });
  }

  // 3. Notification Center Drawer
  const btnNotif = document.getElementById('topbar-btn-notif');
  const drawer = document.getElementById('notif-drawer');
  const drawerOverlay = document.getElementById('notif-drawer-overlay');
  const drawerClose = document.getElementById('notif-drawer-close');

  function openNotif() {
    drawer.classList.add('active');
    drawerOverlay.classList.add('active');
  }

  function closeNotif() {
    drawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
  }

  if (btnNotif) btnNotif.addEventListener('click', openNotif);
  if (drawerClose) drawerClose.addEventListener('click', closeNotif);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeNotif);

  const btnMarkRead = document.getElementById('btn-notif-mark-read');
  if (btnMarkRead) {
    btnMarkRead.addEventListener('click', () => {
      document.querySelectorAll('.notif-card').forEach(c => c.classList.remove('unread'));
      const badge = document.getElementById('notif-count-badge');
      if (badge) badge.innerText = '0 New';
      const notifDot = document.querySelector('.notif-badge-dot');
      if (notifDot) notifDot.style.display = 'none';
      window.showToast('Marked all alerts as read', 'info');
    });
  }

  const btnClearAll = document.getElementById('btn-notif-clear');
  if (btnClearAll) {
    btnClearAll.addEventListener('click', () => {
      const container = document.getElementById('notif-list-container');
      if (container) container.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No active clinical notifications.</div>`;
      const badge = document.getElementById('notif-count-badge');
      if (badge) badge.innerText = '0 New';
      const notifDot = document.querySelector('.notif-badge-dot');
      if (notifDot) notifDot.style.display = 'none';
      window.showToast('Cleared all clinical alerts', 'info');
    });
  }

  // 4. Settings Modal
  wireModal('modal-settings', ['btn-sidebar-settings'], ['modal-settings-close']);
  const persistSlider = document.getElementById('setting-persist-slider');
  const cutoffSlider = document.getElementById('setting-cutoff-slider');
  if (persistSlider) {
    persistSlider.addEventListener('input', () => {
      const v = persistSlider.value;
      const el = document.getElementById('setting-persist-val');
      if (el) el.innerText = `${v} Consecutive Observation${v > 1 ? 's' : ''}`;
    });
  }
  if (cutoffSlider) {
    cutoffSlider.addEventListener('input', () => {
      const v = cutoffSlider.value;
      const el = document.getElementById('setting-cutoff-val');
      if (el) el.innerText = `${v}`;
    });
  }

  const btnSaveSettings = document.getElementById('btn-settings-save');
  if (btnSaveSettings) {
    btnSaveSettings.addEventListener('click', () => {
      document.getElementById('modal-settings').classList.remove('active');
      window.showToast('Saved System Preferences', 'Calibrated detector thresholds updated', 'success');
    });
  }

  const btnResetSettings = document.getElementById('btn-settings-reset');
  if (btnResetSettings) {
    btnResetSettings.addEventListener('click', () => {
      if (persistSlider) persistSlider.value = 2;
      if (cutoffSlider) cutoffSlider.value = 0.75;
      const pVal = document.getElementById('setting-persist-val');
      const cVal = document.getElementById('setting-cutoff-val');
      if (pVal) pVal.innerText = '2 Consecutive Observations';
      if (cVal) cVal.innerText = '0.75';
      window.showToast('Settings Reset to Default Values', 'info');
    });
  }

  // 5. Clinician Profile Modal
  wireModal('modal-profile', ['topbar-btn-profile', 'sidebar-profile-card'], ['modal-profile-close']);

  const btnSwitchAccount = document.getElementById('btn-profile-switch-account');
  if (btnSwitchAccount) {
    btnSwitchAccount.addEventListener('click', () => {
      document.getElementById('modal-profile').classList.remove('active');
      const authModal = document.getElementById('modal-auth');
      if (authModal) authModal.classList.add('active');
    });
  }

  // 6. Investigator Auth & Registration Modal
  wireModal('modal-auth', ['topbar-btn-auth'], ['modal-auth-close']);

  // Tab switching inside auth modal
  window.switchAuthTab = function(tab) {
    const tabLogin = document.getElementById('tab-auth-login');
    const tabReg = document.getElementById('tab-auth-register');
    const formLogin = document.getElementById('form-auth-login');
    const formReg = document.getElementById('form-auth-register');
    const titleEl = document.getElementById('auth-modal-title');

    if (tab === 'register') {
      tabLogin.classList.remove('active');
      tabReg.classList.add('active');
      formLogin.style.display = 'none';
      formReg.style.display = 'block';
      if (titleEl) titleEl.innerText = 'Register New Investigator';
    } else {
      tabReg.classList.remove('active');
      tabLogin.classList.add('active');
      formReg.style.display = 'none';
      formLogin.style.display = 'block';
      if (titleEl) titleEl.innerText = 'Investigator Portal';
    }
  };

  // Handle Login
  window.handleInvestigatorLogin = function() {
    const email = document.getElementById('login-email')?.value || 'dr.investigator@institution.edu';
    const authModal = document.getElementById('modal-auth');
    if (authModal) authModal.classList.remove('active');
    
    // Update topbar auth button text to show signed in
    const authLabel = document.getElementById('topbar-auth-label');
    if (authLabel) authLabel.innerText = 'Investigator Active';
    window.showToast('Authentication Successful', `Welcome back, ${email.split('@')[0]}`, 'success');
  };

  // Handle Registration
  window.handleInvestigatorRegister = function() {
    const firstName = document.getElementById('reg-first-name')?.value || 'Doctor';
    const lastName = document.getElementById('reg-last-name')?.value || 'Clinician';
    const role = document.getElementById('reg-role')?.value || 'Principal Investigator';
    const inst = document.getElementById('reg-inst')?.value || 'Cognitive Research Institute';
    const irb = document.getElementById('reg-irb')?.value || 'IRB-2026';

    const fullName = `Dr. ${firstName} ${lastName}`;

    // Update UI profile elements
    const profileNameEl = document.querySelector('.sidebar-profile-name');
    const profileRoleEl = document.querySelector('.sidebar-profile-role');
    const profileHeaderTitle = document.querySelector('#modal-profile h3');
    const profileModalBody = document.querySelector('#modal-profile .modal-body');

    if (profileNameEl) profileNameEl.innerText = fullName;
    if (profileRoleEl) profileRoleEl.innerText = role;
    if (profileHeaderTitle) profileHeaderTitle.innerText = fullName;
    if (profileModalBody) {
      profileModalBody.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.82rem;">
          <div style="padding: 10px; background: var(--bg-subtle); border-radius: var(--radius-sm);">
            <div><strong>Affiliation:</strong> ${inst}</div>
            <div><strong>Active IRB Protocol:</strong> #${irb}</div>
            <div><strong>Role & Clearance:</strong> ${role} (Authorized)</div>
          </div>
        </div>
      `;
    }

    const authModal = document.getElementById('modal-auth');
    if (authModal) authModal.classList.remove('active');

    const authLabel = document.getElementById('topbar-auth-label');
    if (authLabel) authLabel.innerText = 'Verified Investigator';

    window.showToast('Investigator Profile Registered', `Active Credentials: ${role} under #${irb}`, 'success');
  };

  // 7. Subject Enrollment Modal
  wireModal('modal-enroll-subject', ['btn-enroll-subject-open'], ['modal-enroll-subject-close']);

  window.handleEnrollSubject = function() {
    const name = document.getElementById('enroll-subject-name')?.value || 'Subject';
    const rawId = document.getElementById('enroll-subject-id')?.value || String(Math.floor(1000 + Math.random() * 9000));
    const age = parseInt(document.getElementById('enroll-subject-age')?.value) || 70;
    const gender = document.getElementById('enroll-subject-gender')?.value || 'Female';
    const cohort = document.getElementById('enroll-cohort-select')?.value || 'ADRD Longitudinal Study Cohort';
    const statusText = document.getElementById('enroll-baseline-status')?.value || 'Nominal Baseline';
    const baselineScore = parseFloat(document.getElementById('enroll-baseline-score')?.value) || 0.20;

    const cleanId = rawId.replace('#', '').trim();
    const formattedId = `#${cleanId}`;

    let statusClass = 'tag-healthy';
    let signalColorClass = 'val-nominal';
    if (statusText.includes('Elevated')) {
      statusClass = 'tag-alert';
      signalColorClass = 'val-elevated';
    } else if (statusText.includes('Moderate')) {
      statusClass = 'tag-warning';
      signalColorClass = 'val-warning';
    }

    // Register into PATIENT_DATABASE
    PATIENT_DATABASE[cleanId] = {
      id: formattedId,
      name: name,
      age: age,
      gender: gender,
      cohort: cohort,
      demographics: `${gender}, ${age} y/o • ${cohort} • 1 Baseline Observation`,
      statusTag: statusText,
      statusClass: statusClass,
      signalScore: baselineScore,
      signalLabel: `${statusText.split(' ')[0]} (${baselineScore.toFixed(2)})`,
      signalColorClass: signalColorClass,
      baselineStatus: 'Baseline Initialized',
      trajectoryText: 'Initial Intake Calibration Established',
      trajectorySub: 'Baseline screening protocol recorded under study intake',
      lastAssessment: 'Week 1 (Intake)',
      observationsCount: 1,
      confidenceInterval: '[0.78 – 0.90]',
      confidenceLevel: 'Calibrating',
      snr: '30.1 dB',
      acousticQuality: '0.97 / 1.00',
      missingRate: '0.0%',
      modelAgreement: '3 / 3 Models Aligned (100%)',
      models: [
        { name: 'Regularized Logistic Regression', status: statusText.split(' ')[0], val: (baselineScore * 0.96).toFixed(2), class: statusClass === 'tag-alert' ? 'sig-elevated' : 'sig-nominal' },
        { name: 'Random Forest (100 Trees)', status: statusText.split(' ')[0], val: (baselineScore * 1.02).toFixed(2), class: statusClass === 'tag-alert' ? 'sig-elevated' : 'sig-nominal' },
        { name: 'Extreme Gradient Boosting (XGBoost)', status: statusText.split(' ')[0], val: (baselineScore * 0.99).toFixed(2), class: statusClass === 'tag-alert' ? 'sig-elevated' : 'sig-nominal' }
      ],
      showFirstSignal: statusClass === 'tag-alert',
      firstSignalTitle: statusClass === 'tag-alert' ? 'Intake Baseline Divergence Detected' : '',
      firstSignalDesc: statusClass === 'tag-alert' ? 'Intake speech features diverge from age-matched nominal envelope.' : '',
      baselineRange: { min: Math.max(0.05, baselineScore - 0.08), max: baselineScore + 0.08, baselineScore: baselineScore },
      trajectoryHistory: [
        { week: 1, date: 'Today', score: baselineScore, deviation: '+0.04σ', ttr: 0.70, rep: '6.5%', status: statusText, class: statusClass, flagged: statusClass === 'tag-alert' }
      ],
      radarMetrics: [0.70, 0.72, 7.5 / 12, 0.75, 0.78, 0.76],
      shapImpacts: [
        { name: '1. Baseline Type-Token Ratio', impact: '+0.12 SHAP impact', pct: 35, color: 'fill-teal', isPositive: true },
        { name: '2. Intake Pause Rate (<1.2s)', impact: '-0.08 SHAP protective', pct: 20, color: 'fill-teal', isPositive: false }
      ]
    };

    // Add to dropdown selectors across topbar & session wizard
    const topSelect = document.getElementById('topbar-patient-select');
    const wizSelect = document.getElementById('wizard-patient-select');
    const newOpt = document.createElement('option');
    newOpt.value = cleanId;
    newOpt.text = `Case ${formattedId} — ${name} (${cohort.split(' ')[0]})`;

    if (topSelect) {
      topSelect.appendChild(newOpt.cloneNode(true));
      topSelect.value = cleanId;
    }
    if (wizSelect) {
      wizSelect.appendChild(newOpt.cloneNode(true));
    }

    // Update Case Repository & Badge count
    const repoBadge = document.getElementById('sidebar-repo-count');
    const totalCases = Object.keys(PATIENT_DATABASE).length;
    if (repoBadge) repoBadge.innerText = totalCases;

    if (window.renderCaseRepository) {
      window.renderCaseRepository();
    }

    // Close Modal & Switch to Patient
    const enrollModal = document.getElementById('modal-enroll-subject');
    if (enrollModal) enrollModal.classList.remove('active');

    window.loadPatient(cleanId);
    window.switchView('cases');

    window.showToast('Subject Enrolled Successfully', `${name} (${formattedId}) added to active cohort`, 'success');
  };

  // 8. Help button in sidebar
  const btnHelp = document.getElementById('btn-sidebar-help');
  if (btnHelp) {
    btnHelp.addEventListener('click', () => {
      window.switchView('about-ethics');
      window.showToast('Navigated to Scientific & Ethical Scope', 'info');
    });
  }
}

// ============================================================================
// SPOTLIGHT COMMAND PALETTE (CTRL + K)
// ============================================================================
function initSpotlightSearch() {
  const modal = document.getElementById('spotlight-modal');
  const input = document.getElementById('spotlight-search-input');
  const resultsContainer = document.getElementById('spotlight-results-list');
  const triggerBtn = document.getElementById('topbar-search-trigger');
  const closeBtn = document.getElementById('spotlight-close-btn');

  const COMMAND_ITEMS = [
    { type: 'view', title: 'Clinical Dashboard', desc: 'Case overview, trajectory chart & model consensus', target: 'dashboard', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>' },
    { type: 'view', title: 'Case Repository', desc: 'Browse, filter & search all cohort subjects', target: 'cases', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg>' },
    { type: 'view', title: 'Voice Screening Studio', desc: 'Standardized acoustic intake & Whisper NLP meters', target: 'voice-screening', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>' },
    { type: 'view', title: 'NLP & SHAP Lab', desc: 'Lexical, syntactic & SHAP feature attributions', target: 'nlp-lab', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>' },
    { type: 'view', title: '3D Latent State Space', desc: 'Interactive 3D manifold & 6-axis radar fingerprint', target: 'longitudinal-3d', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>' },
    { type: 'view', title: 'Evidence Battle RAG', desc: 'Dual-pole grounded evidence synthesis & caregiver advice', target: 'evidence-rag', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>' },
    { type: 'view', title: 'Case Replay Demo', desc: 'Step-by-step longitudinal playback of Case #1042', target: 'case-replay', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>' },
    { type: 'view', title: 'Synthetic Cohort Lab', desc: 'Parametric simulation testing sensitivity against noise', target: 'synthetic-lab', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>' },
    { type: 'view', title: 'Model Benchmarks & ROC', desc: 'Confusion matrix, ROC-AUC and F1 evaluation', target: 'research-lab', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>' },
    { type: 'view', title: 'Scientific & Ethical Scope', desc: 'Clinical positioning & non-diagnostic bounds', target: 'about-ethics', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></svg>' },
    { type: 'patient', title: 'Case #1042 — Margaret H.', desc: 'ADRD Longitudinal Cohort (Elevated Signal, 0.78)', action: () => { window.loadPatient('1042'); window.switchView('dashboard'); }, icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' },
    { type: 'patient', title: 'Case #2019 — Robert C.', desc: 'Healthy Control Cohort (Nominal Baseline, 0.14)', action: () => { window.loadPatient('2019'); window.switchView('dashboard'); }, icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' },
    { type: 'patient', title: 'Case #3084 — Eleanor D.', desc: 'Vascular Pattern (Moderate Variance, 0.58)', action: () => { window.loadPatient('3084'); window.switchView('dashboard'); }, icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' },
    { type: 'action', title: 'Generate Clinical Assessment PDF', desc: 'Open printable clinical summary report', action: () => document.getElementById('modal-clinical-report').classList.add('active'), icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>' },
    { type: 'action', title: 'Start New Screening Session', desc: 'Open intake and protocol session wizard', action: () => document.getElementById('modal-new-session').classList.add('active'), icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>' },
    { type: 'action', title: 'System Settings & Calibration', desc: 'Configure detection sensitivity thresholds', action: () => document.getElementById('modal-settings').classList.add('active'), icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>' }
  ];

  let selectedIdx = 0;
  let filteredItems = [...COMMAND_ITEMS];

  function openSpotlight() {
    modal.classList.add('active');
    input.value = '';
    renderResults(COMMAND_ITEMS);
    input.focus();
  }

  function closeSpotlight() {
    modal.classList.remove('active');
  }

  function renderResults(items) {
    filteredItems = items;
    selectedIdx = 0;
    if (items.length === 0) {
      resultsContainer.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No matching modules or cases found.</div>`;
      return;
    }

    resultsContainer.innerHTML = items.map((it, idx) => `
      <div class="spotlight-item ${idx === 0 ? 'selected' : ''}" data-idx="${idx}">
        <div class="spotlight-item-left">
          <span style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: var(--radius-xs); background: var(--bg-subtle); border: 1px solid var(--border-color); color: var(--brand-teal); flex-shrink: 0;">${it.icon}</span>
          <div>
            <div class="spotlight-item-title">${it.title}</div>
            <div class="spotlight-item-desc">${it.desc}</div>
          </div>
        </div>
        <span class="sidebar-badge">${it.type}</span>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.spotlight-item').forEach(el => {
      el.addEventListener('click', () => executeItem(filteredItems[parseInt(el.dataset.idx)]));
    });
  }

  function executeItem(item) {
    closeSpotlight();
    if (item.target) {
      window.switchView(item.target);
    } else if (item.action) {
      item.action();
    }
  }

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (modal.classList.contains('active')) closeSpotlight();
      else openSpotlight();
    }
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeSpotlight();
    }
  });

  if (triggerBtn) triggerBtn.addEventListener('click', openSpotlight);
  if (closeBtn) closeBtn.addEventListener('click', closeSpotlight);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSpotlight();
  });

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) {
      renderResults(COMMAND_ITEMS);
      return;
    }
    const matched = COMMAND_ITEMS.filter(it => 
      it.title.toLowerCase().includes(q) || 
      it.desc.toLowerCase().includes(q) ||
      it.type.toLowerCase().includes(q)
    );
    renderResults(matched);
  });

  input.addEventListener('keydown', (e) => {
    const itemEls = resultsContainer.querySelectorAll('.spotlight-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIdx = (selectedIdx + 1) % filteredItems.length;
      itemEls.forEach((el, idx) => el.classList.toggle('selected', idx === selectedIdx));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIdx = (selectedIdx - 1 + filteredItems.length) % filteredItems.length;
      itemEls.forEach((el, idx) => el.classList.toggle('selected', idx === selectedIdx));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIdx]) {
        executeItem(filteredItems[selectedIdx]);
      }
    }
  });
}

// ============================================================================
// INTERACTIVE CLASSIFIER OPERATING THRESHOLD SLIDER
// ============================================================================
function initEvaluationThresholdSlider() {
  const slider = document.getElementById('classifier-threshold-slider');
  const valDisplay = document.getElementById('threshold-val-display');
  const tagEl = document.getElementById('operating-mode-tag');

  if (!slider) return;

  slider.addEventListener('input', () => {
    const t = parseFloat(slider.value);
    if (valDisplay) valDisplay.innerText = t.toFixed(2);

    const tp = Math.round(240 * (1 - Math.pow(t - 0.2, 1.4)));
    const fn = 240 - tp;
    const tn = Math.round(240 * Math.pow(t, 0.45));
    const fp = 240 - tn;

    const cellTp = document.querySelector('.cell-tp span:first-child');
    const cellFn = document.querySelector('.cell-fn span:first-child');
    const cellFp = document.querySelector('.cell-fp span:first-child');
    const cellTn = document.querySelector('.cell-tn span:first-child');

    if (cellTp) cellTp.innerText = tp;
    if (cellFn) cellFn.innerText = fn;
    if (cellFp) cellFp.innerText = fp;
    if (cellTn) cellTn.innerText = tn;

    if (tagEl) {
      if (t < 0.45) {
        tagEl.innerText = 'High Sensitivity (Early Detection)';
        tagEl.className = 'stat-tag tag-alert';
      } else if (t > 0.65) {
        tagEl.innerText = 'High Specificity (Conservative)';
        tagEl.className = 'stat-tag tag-healthy';
      } else {
        tagEl.innerText = 'Standard Balance (F1: 0.912)';
        tagEl.className = 'stat-tag tag-healthy';
      }
    }
  });
}

// ============================================================================
// TIMELINE STEPPER INTERACTIONS
// ============================================================================
function initTimelineStepInteractions() {
  const steps = document.querySelectorAll('.timeline-step');
  const stepMetrics = [
    { ttr: 0.72, rep: 6.2, coh: 0.81, syntax: 9.6, fluency: 88 },
    { ttr: 0.70, rep: 6.8, coh: 0.79, syntax: 9.4, fluency: 85 },
    { ttr: 0.68, rep: 7.2, coh: 0.76, syntax: 9.1, fluency: 82 },
    { ttr: 0.64, rep: 9.4, coh: 0.71, syntax: 8.4, fluency: 76 },
    { ttr: 0.51, rep: 18.4, coh: 0.58, syntax: 6.2, fluency: 64 },
    { ttr: 0.46, rep: 22.0, coh: 0.52, syntax: 5.6, fluency: 58 },
    { ttr: 0.41, rep: 25.8, coh: 0.48, syntax: 5.0, fluency: 52 }
  ];

  steps.forEach(step => {
    step.addEventListener('click', () => {
      steps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
      const idx = parseInt(step.dataset.step);

      if (window.stateSpaceInstance) {
        window.stateSpaceInstance.activePointIndex = idx;
        window.stateSpaceInstance.render();
      }

      if (window.drawRadarChart && stepMetrics[idx]) {
        const m = stepMetrics[idx];
        const vals = [m.ttr, m.coh, m.syntax / 12, Math.max(0.1, 1 - (m.rep / 35)), m.fluency / 100, 0.65];
        window.drawRadarChart(vals);
      }

      window.showToast(`Selected Observation: Week ${idx + 1}`, idx >= 4 ? 'Deviating from personal baseline' : 'Within baseline tolerance', idx >= 4 ? 'warning' : 'success');
    });
  });
}

// ============================================================================
// THEME TOGGLE — Light / Dark Mode
// ============================================================================
(function initThemeSystem() {
  const HTML_EL     = document.documentElement;
  const STORAGE_KEY = 'coglensDarkMode';

  function applyTheme(theme) {
    if (theme === 'dark') {
      HTML_EL.setAttribute('data-theme', 'dark');
    } else {
      HTML_EL.removeAttribute('data-theme');
    }
  }

  function toggleTheme() {
    const isDark = HTML_EL.getAttribute('data-theme') === 'dark';
    const next   = isDark ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* private mode */ }

    if (typeof window.showToast === 'function') {
      window.showToast(
        next === 'dark' ? '🌙 Dark Mode Enabled' : '☀️ Light Mode Enabled',
        next === 'dark'
          ? 'Interface switched to dark clinical theme'
          : 'Interface switched to light clinical theme',
        'info'
      );
    }
  }

  // Restore saved preference immediately (before first paint)
  let savedTheme = 'light';
  try { savedTheme = localStorage.getItem(STORAGE_KEY) || 'light'; } catch (e) { /* */ }
  applyTheme(savedTheme);

  // Wire toggle button
  function wireThemeButton() {
    const btn = document.getElementById('topbar-btn-theme');
    if (btn) btn.addEventListener('click', toggleTheme);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireThemeButton);
  } else {
    wireThemeButton();
  }
})();
