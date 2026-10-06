/**
 * 3D Cognitive-Linguistic State Space
 * Visualizes longitudinal observations in 3D latent space:
 * X-axis: Vocabulary Diversity (TTR)
 * Y-axis: Semantic Coherence
 * Z-axis: Repetition Rate
 */

class CognitiveStateSpace3D {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    // Rotation angles
    this.angleX = 0.45;
    this.angleY = -0.65;
    this.zoom = 1.0;
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    
    // Active observation highlight
    this.activePointIndex = 4; // Week 5 (First persistent signal)
    
    // Dataset for Case #1042
    this.observations = [
      { week: 1, x: 0.72, y: 0.81, z: 0.12, label: 'W1: Baseline Established', type: 'baseline', date: 'Oct 04' },
      { week: 2, x: 0.70, y: 0.79, z: 0.14, label: 'W2: Stable Pattern', type: 'baseline', date: 'Oct 18' },
      { week: 3, x: 0.68, y: 0.76, z: 0.15, label: 'W3: Mild Fluency Dip', type: 'baseline', date: 'Nov 01' },
      { week: 4, x: 0.64, y: 0.71, z: 0.22, label: 'W4: Isolated Word-Finding', type: 'anomaly', date: 'Nov 15' },
      { week: 5, x: 0.51, y: 0.58, z: 0.38, label: 'W5: First Persistent Signal', type: 'signal', date: 'Nov 29' },
      { week: 6, x: 0.46, y: 0.52, z: 0.42, label: 'W6: Sustained Shift', type: 'persistent', date: 'Dec 13' },
      { week: 7, x: 0.41, y: 0.48, z: 0.49, label: 'W7: Continued Deviation', type: 'persistent', date: 'Dec 27' }
    ];

    // Centroid of personal baseline
    this.baselineCentroid = { x: 0.70, y: 0.79, z: 0.14 };

    this.initCanvasSize();
    this.bindEvents();
    this.render();
  }

  initCanvasSize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.width = rect.width || 700;
    this.height = rect.height || 440;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.scale(dpr, dpr);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.initCanvasSize();
      this.render();
    });

    this.canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.lastMouseX;
      const dy = e.clientY - this.lastMouseY;
      this.angleY += dx * 0.008;
      this.angleX += dy * 0.008;
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
      this.render();
    });

    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.zoom += e.deltaY * -0.001;
      this.zoom = Math.min(Math.max(0.6, this.zoom), 2.2);
      this.render();
    });

    // Control buttons
    const btnReset = document.getElementById('btn-reset-3d');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        this.angleX = 0.45;
        this.angleY = -0.65;
        this.zoom = 1.0;
        this.render();
      });
    }

    const btnZoomIn = document.getElementById('btn-zoomin-3d');
    if (btnZoomIn) {
      btnZoomIn.addEventListener('click', () => {
        this.zoom = Math.min(this.zoom + 0.2, 2.2);
        this.render();
      });
    }

    const btnZoomOut = document.getElementById('btn-zoomout-3d');
    if (btnZoomOut) {
      btnZoomOut.addEventListener('click', () => {
        this.zoom = Math.max(this.zoom - 0.2, 0.6);
        this.render();
      });
    }

    const btnAutoRotate = document.getElementById('btn-autorotate-3d');
    if (btnAutoRotate) {
      btnAutoRotate.addEventListener('click', () => {
        this.autoRotate = !this.autoRotate;
        btnAutoRotate.innerText = `Auto-Rotate: ${this.autoRotate ? 'On' : 'Off'}`;
        btnAutoRotate.style.background = this.autoRotate ? 'var(--brand-teal)' : '#ffffff';
        btnAutoRotate.style.color = this.autoRotate ? '#ffffff' : 'var(--text-secondary)';
        if (this.autoRotate) {
          this.startAutoRotate();
        } else if (this.autoRotateId) {
          cancelAnimationFrame(this.autoRotateId);
        }
      });
    }

    const btnTopDown = document.getElementById('btn-topdown-3d');
    if (btnTopDown) {
      btnTopDown.addEventListener('click', () => {
        this.angleX = Math.PI / 2 - 0.08;
        this.angleY = 0;
        this.zoom = 1.05;
        this.render();
        if (window.showToast) window.showToast('3D View: Top-Down 2D Projection', 'info');
      });
    }

    const btnIsometric = document.getElementById('btn-isometric-3d');
    if (btnIsometric) {
      btnIsometric.addEventListener('click', () => {
        this.angleX = 0.55;
        this.angleY = -0.78;
        this.zoom = 1.0;
        this.render();
        if (window.showToast) window.showToast('3D View: Isometric Trajectory Perspective', 'info');
      });
    }
  }

  startAutoRotate() {
    const loop = () => {
      if (!this.autoRotate) return;
      if (!this.isDragging) {
        this.angleY += 0.005;
        this.render();
      }
      this.autoRotateId = requestAnimationFrame(loop);
    };
    this.autoRotateId = requestAnimationFrame(loop);
  }

  project(x, y, z) {
    // Normalization to center space: range [-1, 1]
    const nx = (x - 0.5) * 260 * this.zoom;
    const ny = -(y - 0.5) * 240 * this.zoom;
    const nz = (z - 0.5) * 240 * this.zoom;

    // Rotation around Y
    const cosY = Math.cos(this.angleY);
    const sinY = Math.sin(this.angleY);
    const x1 = nx * cosY + nz * sinY;
    const z1 = -nx * sinY + nz * cosY;

    // Rotation around X
    const cosX = Math.cos(this.angleX);
    const sinX = Math.sin(this.angleX);
    const y2 = ny * cosX - z1 * sinX;
    const z2 = ny * sinX + z1 * cosX;

    // Perspective projection
    const fov = 650;
    const distance = 500;
    const factor = fov / (distance + z2);

    const screenX = this.width / 2 + x1 * factor;
    const screenY = this.height / 2 + y2 * factor;

    return { x: screenX, y: screenY, z: z2, factor };
  }

  setActiveObservation(weekNumber) {
    this.activePointIndex = weekNumber - 1;
    this.render();
  }

  render() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // Deep research dark backdrop with subtle star-grid
    const gradient = ctx.createLinearGradient(0, 0, 0, this.height);
    gradient.addColorStop(0, '#0d1822');
    gradient.addColorStop(1, '#081017');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, this.width, this.height);

    // Draw coordinate grid floor
    this.drawFloorGrid(ctx);

    // Draw Coordinate Axes
    this.drawAxes(ctx);

    // Draw Personal Baseline Safe Region (Green glowing ellipsoid)
    this.drawBaselineRegion(ctx);

    // Draw Trajectory connecting observations
    this.drawTrajectory(ctx);

    // Draw Observation Nodes
    this.drawObservations(ctx);
  }

  drawFloorGrid(ctx) {
    ctx.strokeStyle = 'rgba(40, 75, 100, 0.22)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 6; i++) {
      const p1 = this.project(i / 6, 0.1, 0);
      const p2 = this.project(i / 6, 0.1, 1);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      const p3 = this.project(0, 0.1, i / 6);
      const p4 = this.project(1, 0.1, i / 6);
      ctx.beginPath();
      ctx.moveTo(p3.x, p3.y);
      ctx.lineTo(p4.x, p4.y);
      ctx.stroke();
    }
  }

  drawAxes(ctx) {
    const origin = this.project(0, 0, 0);
    const xAxis = this.project(1, 0, 0);
    const yAxis = this.project(0, 1, 0);
    const zAxis = this.project(0, 0, 1);

    ctx.lineWidth = 1.5;

    // X: Vocabulary Diversity (Teal)
    ctx.strokeStyle = 'rgba(31, 175, 160, 0.6)';
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(xAxis.x, xAxis.y);
    ctx.stroke();

    // Y: Semantic Coherence (Blue)
    ctx.strokeStyle = 'rgba(91, 134, 229, 0.6)';
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(yAxis.x, yAxis.y);
    ctx.stroke();

    // Z: Repetition Rate (Amber)
    ctx.strokeStyle = 'rgba(217, 119, 54, 0.6)';
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(zAxis.x, zAxis.y);
    ctx.stroke();

    // Axis Labels
    ctx.font = '10px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#65cfc2';
    ctx.fillText('Vocabulary Diversity →', xAxis.x + 8, xAxis.y);

    ctx.fillStyle = '#9cb8f5';
    ctx.fillText('Semantic Coherence ↑', yAxis.x - 20, yAxis.y - 10);

    ctx.fillStyle = '#f09f6e';
    ctx.fillText('Repetition Index ↗', zAxis.x + 8, zAxis.y + 12);
  }

  drawBaselineRegion(ctx) {
    const center = this.project(this.baselineCentroid.x, this.baselineCentroid.y, this.baselineCentroid.z);
    const radius = 34 * center.factor;

    // Outer glow
    const grad = ctx.createRadialGradient(center.x, center.y, radius * 0.2, center.x, center.y, radius);
    grad.addColorStop(0, 'rgba(31, 175, 160, 0.35)');
    grad.addColorStop(0.7, 'rgba(31, 175, 160, 0.12)');
    grad.addColorStop(1, 'rgba(31, 175, 160, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(31, 175, 160, 0.45)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = 'rgba(142, 230, 218, 0.9)';
    ctx.font = '10px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Personal Baseline Centroid (W1-W3)', center.x - 70, center.y - radius - 6);
  }

  drawTrajectory(ctx) {
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    this.observations.forEach((obs, idx) => {
      const p = this.project(obs.x, obs.y, obs.z);
      if (idx === 0) {
        ctx.moveTo(p.x, p.y);
      } else {
        ctx.lineTo(p.x, p.y);
      }
    });

    // Gradient stroke for trajectory
    ctx.strokeStyle = '#4a90e2';
    ctx.stroke();
  }

  drawObservations(ctx) {
    this.observations.forEach((obs, idx) => {
      const p = this.project(obs.x, obs.y, obs.z);
      const isActive = idx === this.activePointIndex;
      const radius = (isActive ? 9 : 6) * p.factor;

      // Color coding based on status
      let color = '#2dd4bf'; // Baseline teal
      if (obs.type === 'anomaly') color = '#fbbf24'; // Mild dip
      if (obs.type === 'signal') color = '#f97316'; // First signal
      if (obs.type === 'persistent') color = '#ef4444'; // Persistent shift

      // Node shadow
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius + (isActive ? 6 : 2), 0, Math.PI * 2);
      ctx.fillStyle = isActive ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.3)';
      ctx.fill();

      // Node Body
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = isActive ? 2.5 : 1.5;
      ctx.stroke();

      // Label callout
      ctx.font = `${isActive ? '600 11px' : '500 10px'} Inter, sans-serif`;
      ctx.fillStyle = isActive ? '#0f172a' : '#64748b';
      ctx.fillText(`W${obs.week}`, p.x + radius + 5, p.y + 4);

      if (obs.type === 'signal') {
        ctx.fillStyle = '#b91c1c';
        ctx.font = '600 10px Inter, sans-serif';
        ctx.fillText('FIRST PERSISTENT SIGNAL', p.x - 45, p.y - radius - 8);
      }
    });
  }
}

window.CognitiveStateSpace3D = CognitiveStateSpace3D;
