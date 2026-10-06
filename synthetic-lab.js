/**
 * Synthetic Dementia Research Laboratory
 * Generates controlled synthetic longitudinal cases with parametric degradation,
 * acoustic noise injection, and missing observation simulation.
 */

class SyntheticLaboratory {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.init();
  }

  init() {
    this.bindSliders();
    this.generateTrajectory();
  }

  bindSliders() {
    const sliders = ['syn-slider-decay', 'syn-slider-rep', 'syn-slider-noise', 'syn-slider-missing'];
    sliders.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => {
          this.updateSliderLabel(id, el.value);
          this.generateTrajectory();
        });
      }
    });

    const caseSelect = document.getElementById('syn-profile-select');
    if (caseSelect) {
      caseSelect.addEventListener('change', () => this.generateTrajectory());
    }

    const btnGenerate = document.getElementById('btn-syn-generate');
    if (btnGenerate) {
      btnGenerate.addEventListener('click', () => this.generateTrajectory());
    }

    const btnExportCSV = document.getElementById('btn-syn-export-csv');
    if (btnExportCSV) {
      btnExportCSV.addEventListener('click', () => {
        if (!this.lastPoints || this.lastPoints.length === 0) return;
        let csv = "Week,LinguisticCompositeScore,ObservationStatus,IsFirstSignalFlag\n";
        this.lastPoints.forEach(p => {
          if (p.isMissing) {
            csv += `${p.week},NaN,MissingSession,false\n`;
          } else {
            csv += `${p.week},${p.score.toFixed(3)},${p.isAnomaly ? 'OutlierDeviation' : 'NominalBaseline'},${p.isFirstSignal ? 'true' : 'false'}\n`;
          }
        });
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Synthetic_Longitudinal_Trajectory_${Date.now()}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        if (window.showToast) window.showToast('Exported 12-Week Synthetic Dataset (CSV)', 'success');
      });
    }
  }

  updateSliderLabel(id, val) {
    const label = document.getElementById(`${id}-val`);
    if (!label) return;
    if (id.includes('noise') || id.includes('missing')) {
      label.innerText = `${val}%`;
    } else {
      label.innerText = `${val}`;
    }
  }

  generateTrajectory() {
    const decay = parseFloat(document.getElementById('syn-slider-decay')?.value || 35) / 100;
    const repSurge = parseFloat(document.getElementById('syn-slider-rep')?.value || 40) / 100;
    const noise = parseFloat(document.getElementById('syn-slider-noise')?.value || 10) / 100;
    const missingRate = parseFloat(document.getElementById('syn-slider-missing')?.value || 5) / 100;

    const weeks = 12;
    const points = [];
    let detectedWeek = null;
    let consecutiveAnomalies = 0;

    for (let w = 1; w <= weeks; w++) {
      // Simulate missing sessions
      if (Math.random() < missingRate && w > 2 && w < 11) {
        points.push({ week: w, isMissing: true });
        continue;
      }

      // Base linguistic score (higher is healthier)
      const declineFactor = Math.pow(w / 12, 1.8) * decay;
      const noiseOffset = (Math.random() - 0.5) * noise * 0.4;
      const repetitionPenalty = (w > 4 ? (w - 4) * 0.05 * repSurge : 0);

      let score = 0.88 - declineFactor - repetitionPenalty + noiseOffset;
      score = Math.max(0.15, Math.min(0.95, score));

      // Test against baseline threshold (established in w1-w3, mean approx 0.85, 2 SD = 0.65)
      const isAnomaly = score < 0.65;
      if (isAnomaly) {
        consecutiveAnomalies++;
        if (consecutiveAnomalies >= 2 && !detectedWeek) {
          detectedWeek = w;
        }
      } else {
        consecutiveAnomalies = 0;
      }

      points.push({
        week: w,
        score,
        isMissing: false,
        isAnomaly,
        isFirstSignal: detectedWeek === w
      });
    }

    this.lastPoints = points;
    this.renderChart(points, detectedWeek);

    // Update summary text
    const summaryEl = document.getElementById('syn-trajectory-summary');
    if (summaryEl) {
      if (detectedWeek) {
        summaryEl.innerHTML = `<strong>First Persistent Signal:</strong> Detected at <strong>Week ${detectedWeek}</strong>. Consecutive multi-marker deviation confirmed across 2+ observation intervals.`;
      } else {
        summaryEl.innerHTML = `<strong>Status:</strong> Stable trajectory. Deviation remained within individual normal variance (no persistent signal detected).`;
      }
    }
  }

  renderChart(points, detectedWeek) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const width = this.canvas.parentElement.clientWidth || 600;
    const height = 240;
    const dpr = window.devicePixelRatio || 1;

    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);

    const padL = 45;
    const padR = 25;
    const padT = 30;
    const padB = 40;
    const chartW = width - padL - padR;
    const chartH = height - padT - padB;

    // Background threshold zone (Baseline green band)
    const yBaselineLow = padT + (1 - 0.65) * chartH;
    ctx.fillStyle = 'rgba(31, 133, 122, 0.08)';
    ctx.fillRect(padL, padT, chartW, yBaselineLow - padT);

    // Baseline boundary line (2 sigma)
    ctx.strokeStyle = 'rgba(31, 133, 122, 0.45)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(padL, yBaselineLow);
    ctx.lineTo(padL + chartW, yBaselineLow);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = 'rgba(31, 133, 122, 0.85)';
    ctx.font = '10px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Personal Baseline Threshold (2σ)', padL + 8, yBaselineLow - 5);

    // Draw grid lines
    ctx.strokeStyle = '#e9eff2';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padT + (i / 4) * chartH;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padL + chartW, y);
      ctx.stroke();

      ctx.fillStyle = '#8ca2b0';
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillText((1 - i * 0.25).toFixed(2), 14, y + 3);
    }

    // Connect valid trajectory points
    ctx.strokeStyle = '#5b86e5';
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    let started = false;
    points.forEach((p, i) => {
      if (p.isMissing) return;
      const x = padL + (i / (points.length - 1)) * chartW;
      const y = padT + (1 - p.score) * chartH;

      if (!started) {
        ctx.moveTo(x, y);
        started = true;
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Draw individual points
    points.forEach((p, i) => {
      const x = padL + (i / (points.length - 1)) * chartW;

      // X-axis label
      ctx.fillStyle = '#64748b';
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillText(`W${p.week}`, x - 7, height - 14);

      if (p.isMissing) {
        ctx.strokeStyle = '#cbd5e1';
        ctx.setLineDash([2, 2]);
        ctx.beginPath();
        ctx.moveTo(x, padT);
        ctx.lineTo(x, padT + chartH);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '8px sans-serif';
        ctx.fillText('miss', x - 8, padT + chartH / 2);
        return;
      }

      const y = padT + (1 - p.score) * chartH;

      ctx.beginPath();
      ctx.arc(x, y, p.isFirstSignal ? 7 : 4, 0, Math.PI * 2);

      if (p.isFirstSignal) {
        ctx.fillStyle = '#d97736';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Banner callout
        ctx.fillStyle = '#923a07';
        ctx.font = 'bold 9px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('First Signal', x - 24, y - 10);
      } else if (p.isAnomaly) {
        ctx.fillStyle = '#f87171';
        ctx.fill();
      } else {
        ctx.fillStyle = '#1f857a';
        ctx.fill();
      }
    });
  }
}

window.SyntheticLaboratory = SyntheticLaboratory;
