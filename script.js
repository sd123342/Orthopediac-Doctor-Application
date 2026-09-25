// Services data
const SERVICES = [
  { t: "Sports Injury", d: "Diagnosis and treatment of ACL and meniscus tears, ligament sprains, tendon injuries and cartilage damage, with return-to-play plans for athletes and active adults." },
  { t: "Spine", d: "Assessment and management of chronic back and neck pain, slipped discs, sciatica and spinal deformities, using conservative care first and surgery when it's genuinely needed." },
  { t: "Frozen Shoulder", d: "Targeted treatment for stiff, painful shoulders — physiotherapy, guided injections and, where required, arthroscopic capsular release to restore full range of motion." },
  { t: "Joint Replacement", d: "Knee and hip replacement surgery using minimally invasive techniques, with a structured rehabilitation plan for each patient." },
  { t: "Fracture Care", d: "Emergency and planned treatment of fractures, from simple casting to complex trauma reconstruction." },
  { t: "Arthroscopy", d: "Keyhole surgery for knee and shoulder problems, reducing recovery time compared to open surgery." }
];

// Approach / process steps
const STEPS = [
  { n: "01", t: "Listen first", d: "Every visit starts with understanding your symptoms, history and what matters most to your recovery." },
  { n: "02", t: "Explain the options", d: "You'll see your scans and hear every treatment option in plain language, including the trade-offs of each." },
  { n: "03", t: "Treat conservatively when possible", d: "Surgery is recommended only when it's genuinely the best path — physiotherapy and medication come first when they'll work." },
  { n: "04", t: "Stay involved after treatment", d: "Follow-up visits and a clear rehab plan so recovery stays on track after you leave the clinic." }
];

function renderServices() {
  const grid = document.getElementById('services-grid');
  grid.innerHTML = SERVICES.map(s => `
    <div class="card">
      <h3>${s.t}</h3>
      <p>${s.d}</p>
    </div>
  `).join('');
}

function renderApproach() {
  const list = document.getElementById('approach-list');
  list.innerHTML = STEPS.map(s => `
    <div class="approach-row">
      <div class="num">${s.n}</div>
      <div>
        <h3>${s.t}</h3>
        <p>${s.d}</p>
      </div>
    </div>
  `).join('');
}

function setupForm() {
  const form = document.getElementById('book-form');
  const confirm = document.getElementById('confirm-msg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    confirm.style.display = 'block';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  renderServices();
  renderApproach();
  setupForm();
});
