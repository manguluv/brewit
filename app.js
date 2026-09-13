// ===== Recipe Data =====
const defaultRecipes = [
  {
    id: '4-6-method',
    name: '4:6 메서드',
    author: 'Tetsu Kasuya (2016 WBrC 챔피언)',
    description: '전체 물량을 4:6 비율로 나누어 추출. 전반부 40%에서 맛의 균형을, 후반부 60%에서 추출 강도를 조절합니다.',
    coffeeDose: 20,
    totalWater: 300,
    waterTemp: '90-93°C',
    grindSize: '중간 굵기',
    comandanteClicks: '24–28',
    zp6Setting: '4.8–6.1',
    roastLevel: '미디엄',
    totalTime: 210,
    steps: [
      { time: 0,   pour: 50, label: '블루밍' },
      { time: 45,  pour: 70, label: '1차 투입' },
      { time: 90,  pour: 60, label: '2차 투입' },
      { time: 130, pour: 60, label: '3차 투입' },
      { time: 170, pour: 60, label: '4차 투입' },
    ]
  },
  {
    id: 'classic-v60',
    name: '클래식 V60',
    author: 'BrewIt! 기본 레시피',
    description: '가장 보편적인 V60 드립 레시피. 균등한 분할 투입으로 안정적인 추출을 목표로 합니다.',
    coffeeDose: 20,
    totalWater: 320,
    waterTemp: '92-94°C',
    grindSize: '중간 굵기',
    comandanteClicks: '24–28',
    zp6Setting: '4.8–6.1',
    roastLevel: '미디엄',
    totalTime: 180,
    steps: [
      { time: 0,   pour: 40, label: '블루밍 (2배)' },
      { time: 45,  pour: 80, label: '1차 투입' },
      { time: 75,  pour: 80, label: '2차 투입' },
      { time: 105, pour: 60, label: '3차 투입' },
      { time: 135, pour: 60, label: '4차 투입' },
    ]
  },
  {
    id: 'hoffman-v60',
    name: '호프만 V60',
    author: 'James Hoffman',
    description: '균등한 분할 투입으로 일관된 추출을 유도. 매 30초마다 동일한 양을 투입하여 고르게 추출합니다.',
    coffeeDose: 20,
    totalWater: 300,
    waterTemp: '94-96°C',
    grindSize: '중간 굵기',
    comandanteClicks: '22–26',
    zp6Setting: '4.1–5.4',
    roastLevel: '미디엄 라이트',
    totalTime: 195,
    steps: [
      { time: 0,   pour: 50, label: '블루밍 (2.5배)' },
      { time: 45,  pour: 50, label: '1차 투입' },
      { time: 75,  pour: 50, label: '2차 투입' },
      { time: 105, pour: 50, label: '3차 투입' },
      { time: 135, pour: 50, label: '4차 투입' },
      { time: 165, pour: 50, label: '5차 투입' },
    ]
  },
  {
    id: 'origami-light',
    name: '오리카미 라이트 로스트',
    author: 'BrewIt! 추천',
    description: '라이트 로스트를 위한 레시피. 높은 수온과 점진적 투입으로 산미와 단맛을 극대화합니다.',
    coffeeDose: 20,
    totalWater: 300,
    waterTemp: '93-95°C',
    grindSize: '중간 굵기',
    comandanteClicks: '22–26',
    zp6Setting: '4.1–5.4',
    roastLevel: '라이트',
    totalTime: 195,
    steps: [
      { time: 0,   pour: 45, label: '블루밍' },
      { time: 45,  pour: 55, label: '1차 투입' },
      { time: 90,  pour: 75, label: '2차 투입' },
      { time: 120, pour: 75, label: '3차 투입' },
      { time: 150, pour: 50, label: '4차 투입' },
    ]
  },
  {
    id: 'dark-roast',
    name: '다크 로스트 (저온)',
    author: 'BrewIt! 추천',
    description: '다크 로스트의 쓴맛을 줄이고 단맛을 끌어내는 저온 추출 레시피. 낮은 수온으로 탄맛을 억제합니다.',
    coffeeDose: 20,
    totalWater: 280,
    waterTemp: '85-88°C',
    grindSize: '중간 굵기',
    comandanteClicks: '26–30',
    zp6Setting: '5.4–6.8',
    roastLevel: '다크',
    totalTime: 180,
    steps: [
      { time: 0,   pour: 40, label: '블루밍' },
      { time: 45,  pour: 60, label: '1차 투입' },
      { time: 75,  pour: 60, label: '2차 투입' },
      { time: 105, pour: 60, label: '3차 투입' },
      { time: 135, pour: 60, label: '4차 투입' },
    ]
  },
  {
    id: 'ten-recipe',
    name: '텐(10) 레시피',
    author: 'Tetsu Kasuya (2016 WBrC 챔피언)',
    description: '분쇄도를 매우 굵게 세팅하고 물을 10번에 30g씩 나누어 부어 원두가 가진 극강의 단맛과 향미를 뽑아내는 방식. 식어가면서 단맛이 더 올라오므로 천천히 온도 변화를 느끼며 마시는 것이 좋습니다.',
    coffeeDose: 20,
    totalWater: 300,
    waterTemp: '96°C',
    grindSize: '매우 굵게',
    comandanteClicks: '40–45',
    zp6Setting: '10.1–11.8',
    roastLevel: '라이트',
    totalTime: 180,
    steps: [
      { time: 0,   pour: 30, label: '뜸 들이기' },
      { time: 30,  pour: 30, label: '2차 투입' },
      { time: 45,  pour: 30, label: '3차 투입' },
      { time: 60,  pour: 30, label: '4차 투입' },
      { time: 75,  pour: 30, label: '5차 투입' },
      { time: 90,  pour: 30, label: '6차 투입' },
      { time: 105, pour: 30, label: '7차 투입' },
      { time: 120, pour: 30, label: '8차 투입' },
      { time: 135, pour: 30, label: '9차 투입' },
      { time: 150, pour: 30, label: '10차 투입' },
    ],
    tips: [
      '낙차를 크게 주지 말고 가까이에서 젠틀하게 부어 물이 드리퍼 안에 고이지 않고 바로 흘러가게 합니다.',
      '차수가 늘어날수록 물 빠짐이 느려지지만, 시간에 맞춰 계속 부어주시면 됩니다.',
      '처음이라면 분쇄도 40클릭부터 시작해 보세요. 42클릭을 가장 선호하는 의견이 많습니다.',
      '식어가면서 단맛이 더 기분 좋게 올라오므로, 천천히 온도 변화를 느끼며 드세요.',
    ],
  },
  {
    id: 'simple-3pour',
    name: '간편 3단계 (초보자용)',
    author: 'BrewIt! 기본',
    description: '3번의 투입만으로 완성되는 초보자 친화적 레시피. 블루밍 후 2회 분할 투입으로 간단하게 추출합니다.',
    coffeeDose: 20,
    totalWater: 300,
    waterTemp: '90-93°C',
    grindSize: '중간 굵기',
    comandanteClicks: '24–28',
    zp6Setting: '4.8–6.1',
    roastLevel: '미디엄',
    totalTime: 165,
    steps: [
      { time: 0,   pour: 50,  label: '블루밍' },
      { time: 45,  pour: 125, label: '메인 투입' },
      { time: 105, pour: 125, label: '마무리 투입' },
    ]
  },
];

// ===== State =====
const state = {
  currentRecipeId: null,
  scaledRecipe: null,
  timer: {
    running: false,
    elapsed: 0,
    interval: null,
    currentStepIndex: -1,
    completed: false,
  },
  wakeLock: null,
};

// ===== Utilities =====
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function getAllRecipes() {
  const custom = getCustomRecipes();
  return [...defaultRecipes, ...custom];
}

function getCustomRecipes() {
  try {
    return JSON.parse(localStorage.getItem('brewit-recipes') || '[]');
  } catch { return []; }
}

function saveCustomRecipes(recipes) {
  localStorage.setItem('brewit-recipes', JSON.stringify(recipes));
}

function deleteCustomRecipe(id) {
  const recipes = getCustomRecipes().filter(r => r.id !== id);
  saveCustomRecipes(recipes);
}

// Precompute cumulative amounts
function precompute(recipe) {
  let cum = 0;
  const steps = recipe.steps.map(s => {
    cum += s.pour;
    return { ...s, cumulative: cum };
  });
  return { ...recipe, steps };
}

// Scale recipe by dose
function scaleRecipe(recipe, newDose) {
  if (newDose === recipe.coffeeDose) return precompute(recipe);
  const scale = newDose / recipe.coffeeDose;
  return {
    ...recipe,
    coffeeDose: newDose,
    totalWater: Math.round(recipe.totalWater * scale),
    steps: recipe.steps.map(s => ({
      ...s,
      pour: Math.round(s.pour * scale),
    })),
  };
}

// ===== Navigation =====
function navigate(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${view}`).classList.add('active');
  window.scrollTo(0, 0);
}

// ===== Recipe List =====
function renderRecipeList() {
  const recipes = getAllRecipes().map(precompute);
  const container = document.getElementById('recipe-list');
  container.innerHTML = recipes.map(r => {
    const ratio = `1:${(r.totalWater / r.coffeeDose).toFixed(0)}`;
    const isCustom = !defaultRecipes.find(d => d.id === r.id);
    return `
      <div class="recipe-card ${isCustom ? 'custom' : ''}" onclick="openRecipe('${r.id}')">
        <h2>${r.name}</h2>
        <p class="author">${r.author}</p>
        <p class="desc">${r.description}</p>
        <div class="tags">
          <span class="tag">${ratio}</span>
          <span class="tag">${r.roastLevel}</span>
          <span class="tag">${r.totalWater}g</span>
          <span class="tag">${r.steps.length}단계</span>
        </div>
        ${isCustom ? `<button class="delete-btn" onclick="event.stopPropagation(); confirmDelete('${r.id}')">삭제</button>` : ''}
      </div>
    `;
  }).join('');
}

function confirmDelete(id) {
  if (confirm('이 레시피를 삭제할까요?')) {
    deleteCustomRecipe(id);
    renderRecipeList();
  }
}

// ===== Recipe Detail =====
function openRecipe(id) {
  const all = getAllRecipes();
  const recipe = all.find(r => r.id === id);
  if (!recipe) return;
  state.currentRecipeId = id;
  state.scaledRecipe = precompute(recipe);
  renderRecipeDetail(state.scaledRecipe);
  navigate('detail');
}

function renderRecipeDetail(recipe) {
  const ratio = (recipe.totalWater / recipe.coffeeDose).toFixed(1);
  const container = document.getElementById('recipe-detail');
  container.innerHTML = `
    <h1>${recipe.name}</h1>
    <p class="author">${recipe.author}</p>
    <p class="desc">${recipe.description}</p>
    <div class="info-grid">
      <div class="info-item"><span class="label">원두</span><span class="value">${recipe.coffeeDose}g</span></div>
      <div class="info-item"><span class="label">물 총량</span><span class="value">${recipe.totalWater}g</span></div>
      <div class="info-item"><span class="label">비율</span><span class="value">1:${ratio}</span></div>
      <div class="info-item"><span class="label">수온</span><span class="value">${recipe.waterTemp}</span></div>
      <div class="info-item"><span class="label">분쇄도</span><span class="value">${recipe.grindSize}</span></div>
      <div class="info-item"><span class="label">C40 클릭</span><span class="value">${recipe.comandanteClicks || '—'}</span></div>
      <div class="info-item"><span class="label">ZP6 설정</span><span class="value">${recipe.zp6Setting || '—'}</span></div>
      <div class="info-item"><span class="label">로스트</span><span class="value">${recipe.roastLevel}</span></div>
    </div>
    <div class="dose-control">
      <label>원두량</label>
      <input type="number" id="dose-input" value="${recipe.coffeeDose}" min="5" max="100" step="1">
      <span class="unit">g</span>
    </div>
    <div class="steps-section">
      <h3>추출 단계</h3>
      <div class="steps-table" id="steps-table"></div>
    </div>
    <button class="brewit-btn" onclick="startBrewing()">BrewIt! ☕</button>
  `;
  document.getElementById('dose-input').addEventListener('input', (e) => {
    const dose = parseInt(e.target.value) || recipe.coffeeDose;
    if (dose < 1) return;
    const baseRecipe = getAllRecipes().find(r => r.id === state.currentRecipeId);
    state.scaledRecipe = precompute(scaleRecipe(baseRecipe, dose));
    renderStepsTable(state.scaledRecipe);
  });
  renderStepsTable(state.scaledRecipe);
}

function renderStepsTable(recipe) {
  const container = document.getElementById('steps-table');
  container.innerHTML = `
    <div class="step-row header">
      <span>시간</span><span>단계</span><span>투입량</span><span>누적</span>
    </div>
    ${recipe.steps.map(s => `
      <div class="step-row">
        <span class="time">${formatTime(s.time)}</span>
        <span>${s.label}</span>
        <span class="pour">+${s.pour}g</span>
        <span class="cumulative">${s.cumulative}g</span>
      </div>
    `).join('')}
  `;
}

// ===== Timer =====
function startBrewing() {
  state.timer.running = false;
  state.timer.elapsed = 0;
  state.timer.currentStepIndex = -1;
  state.timer.completed = false;
  renderTimer(state.scaledRecipe);
  navigate('timer');
}

function renderTimer(recipe) {
  const container = document.getElementById('timer-content');
  container.innerHTML = `
    <h2 class="timer-recipe-name">${recipe.name}</h2>
    <div class="timer-time" id="timer-display">0:00</div>
    <div class="pour-card" id="pour-card">
      <div class="pour-label" id="pour-label">준비</div>
      <div class="pour-amount" id="pour-amount">시작 버튼을 누르세요</div>
      <div class="pour-step" id="pour-step-name">원두 ${recipe.coffeeDose}g · 물 ${recipe.totalWater}g</div>
      <div class="pour-cumulative" id="pour-cumulative"></div>
    </div>
    <div class="progress-section">
      <div class="progress-text">
        <span><span class="current" id="water-current">0g</span> <span class="total">/ ${recipe.totalWater}g</span></span>
        <span class="percent" id="water-percent">0%</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" id="progress-fill"></div></div>
    </div>
    <div class="timer-steps" id="timer-steps"></div>
    <div class="timer-controls">
      <button class="btn-start" id="btn-start" onclick="toggleTimer()">시작</button>
      <button class="btn-reset" id="btn-reset" onclick="resetTimer()">초기화</button>
    </div>
  `;
  document.getElementById('timer-back-btn').onclick = () => {
    pauseTimer();
    navigate('detail');
  };
  renderTimerSteps(recipe, -1);
}

function toggleTimer() {
  if (state.timer.completed) {
    resetTimer();
    return;
  }
  if (state.timer.running) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  state.timer.running = true;
  state.timer.interval = setInterval(tick, 1000);
  requestWakeLock();
  const btn = document.getElementById('btn-start');
  btn.textContent = '일시정지';
  btn.classList.add('paused');
}

function pauseTimer() {
  state.timer.running = false;
  if (state.timer.interval) {
    clearInterval(state.timer.interval);
    state.timer.interval = null;
  }
  releaseWakeLock();
  const btn = document.getElementById('btn-start');
  if (btn) {
    btn.textContent = state.timer.completed ? '다시 시작' : '계속';
    btn.classList.remove('paused');
  }
}

function resetTimer() {
  pauseTimer();
  state.timer.elapsed = 0;
  state.timer.currentStepIndex = -1;
  state.timer.completed = false;
  document.title = 'BrewIt! ☕';
  if (state.scaledRecipe) renderTimer(state.scaledRecipe);
}

function tick() {
  state.timer.elapsed++;
  const recipe = state.scaledRecipe;
  const steps = recipe.steps;

  // Find current step
  let currentStep = -1;
  for (let i = steps.length - 1; i >= 0; i--) {
    if (state.timer.elapsed >= steps[i].time) {
      currentStep = i;
      break;
    }
  }

  // Step change detection
  if (currentStep !== state.timer.currentStepIndex && currentStep >= 0) {
    state.timer.currentStepIndex = currentStep;
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
    const pourCard = document.getElementById('pour-card');
    if (pourCard) {
      pourCard.classList.remove('pulse');
      void pourCard.offsetWidth;
      pourCard.classList.add('pulse');
    }
  }

  // Completion check
  if (state.timer.elapsed >= recipe.totalTime) {
    state.timer.running = false;
    state.timer.completed = true;
    clearInterval(state.timer.interval);
    state.timer.interval = null;
    releaseWakeLock();
    if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 300]);
  }

  updateTimerDisplay();
}

function updateTimerDisplay() {
  const recipe = state.scaledRecipe;
  const steps = recipe.steps;
  const stepIdx = state.timer.currentStepIndex;

  // Timer
  document.getElementById('timer-display').textContent = formatTime(state.timer.elapsed);

  // Calculate cumulative poured amount
  const totalPoured = stepIdx >= 0
    ? steps.slice(0, stepIdx + 1).reduce((sum, s) => sum + s.pour, 0)
    : 0;
  const displayPoured = state.timer.completed ? recipe.totalWater : totalPoured;

  // Pour card
  const pourCard = document.getElementById('pour-card');
  const pourLabel = document.getElementById('pour-label');
  const pourAmount = document.getElementById('pour-amount');
  const pourStep = document.getElementById('pour-step-name');
  const pourCumulative = document.getElementById('pour-cumulative');

  if (state.timer.completed) {
    pourCard.classList.add('completed');
    pourLabel.textContent = '✅ 완료!';
    pourAmount.textContent = '맛있는 커피 완성';
    pourStep.textContent = `${formatTime(state.timer.elapsed)} 소요`;
    pourCumulative.textContent = `누적 ${recipe.totalWater}g`;
  } else if (stepIdx >= 0) {
    const step = steps[stepIdx];
    const stepElapsed = state.timer.elapsed - step.time;
    const nextStep = steps[stepIdx + 1];
    const stepDuration = nextStep ? (nextStep.time - step.time) : (recipe.totalTime - step.time);
    pourLabel.textContent = '💧 부으세요';
    pourAmount.innerHTML = `${step.pour}g <span class="pour-step-time">${formatTime(stepElapsed)}/${formatTime(stepDuration)}</span>`;
    pourStep.textContent = step.label;
    pourCumulative.textContent = `누적 ${totalPoured}g`;
  } else {
    pourCumulative.textContent = '';
  }

  // Water progress
  const percent = Math.round((displayPoured / recipe.totalWater) * 100);
  document.getElementById('water-current').textContent = `${displayPoured}g`;
  document.getElementById('water-percent').textContent = `${percent}%`;
  document.getElementById('progress-fill').style.width = `${percent}%`;

  // Steps
  renderTimerSteps(recipe, stepIdx);

  // Document title
  if (state.timer.running && stepIdx >= 0) {
    document.title = `${formatTime(state.timer.elapsed)} | ${steps[stepIdx].pour}g | BrewIt!`;
  } else if (state.timer.completed) {
    document.title = '✅ 완료! | BrewIt!';
  }

  // Start button
  const btn = document.getElementById('btn-start');
  if (state.timer.completed) {
    btn.textContent = '다시 시작';
    btn.classList.remove('paused');
  } else if (state.timer.running) {
    btn.textContent = '일시정지';
    btn.classList.add('paused');
  } else {
    btn.textContent = state.timer.elapsed > 0 ? '계속' : '시작';
    btn.classList.remove('paused');
  }
}

function renderTimerSteps(recipe, activeIdx) {
  const container = document.getElementById('timer-steps');
  if (!container) return;
  container.innerHTML = recipe.steps.map((s, i) => {
    let cls = '';
    let check = '○';
    if (i < activeIdx) { cls = 'completed'; check = '✓'; }
    else if (i === activeIdx && !state.timer.completed) { cls = 'active'; check = '▶'; }
    else if (state.timer.completed) { cls = 'completed'; check = '✓'; }
    return `
      <div class="t-step ${cls}">
        <span class="t-check">${check}</span>
        <span class="t-time">${formatTime(s.time)}</span>
        <span class="t-label">${s.label}</span>
        <span class="t-pour">${s.pour}g</span>
      </div>
    `;
  }).join('');
}

// ===== Wake Lock =====
async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      state.wakeLock = await navigator.wakeLock.request('screen');
    }
  } catch {}
}

async function releaseWakeLock() {
  if (state.wakeLock) {
    try { await state.wakeLock.release(); } catch {}
    state.wakeLock = null;
  }
}

// Re-acquire wake lock on visibility change
document.addEventListener('visibilitychange', () => {
  if (document.hidden === false && state.timer.running) {
    requestWakeLock();
  }
});

// ===== Add Recipe Form =====
function renderAddForm() {
  const form = document.getElementById('add-recipe-form');
  form.innerHTML = `
    <div class="form-group">
      <label>레시피 이름</label>
      <input type="text" id="r-name" placeholder="예: 나만의 V60" required>
    </div>
    <div class="form-group">
      <label>설명</label>
      <textarea id="r-desc" placeholder="레시피 설명을 입력하세요"></textarea>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>원두 (g)</label>
        <input type="number" id="r-dose" value="20" min="5" max="100">
      </div>
      <div class="form-group">
        <label>물 총량 (g)</label>
        <input type="number" id="r-water" value="300" min="50" max="1000">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>수온</label>
        <input type="text" id="r-temp" placeholder="90-93°C">
      </div>
      <div class="form-group">
        <label>분쇄도</label>
        <input type="text" id="r-grind" placeholder="중간 굵기">
      </div>
      <div class="form-group">
        <label>로스트</label>
        <input type="text" id="r-roast" placeholder="미디엄">
      </div>
    </div>
    <div class="form-group">
      <label>추출 단계</label>
      <div class="form-steps" id="form-steps"></div>
      <button type="button" class="add-step-btn" onclick="addFormStep()">＋ 단계 추가</button>
    </div>
    <button type="button" class="submit-btn" onclick="handleAddRecipe()">저장</button>
  `;
  addFormStep(); // bloom
  addFormStep(); // 1st pour
}

function addFormStep() {
  const container = document.getElementById('form-steps');
  const idx = container.children.length;
  const row = document.createElement('div');
  row.className = 'form-step-row';
  row.innerHTML = `
    <input type="text" placeholder="0:00" class="step-time" value="${idx === 0 ? '0:00' : ''}">
    <input type="number" placeholder="물(g)" class="step-pour" min="0" max="500">
    <input type="text" placeholder="단계명" class="step-label" value="${idx === 0 ? '블루밍' : ''}">
    <button type="button" class="remove-step" onclick="this.parentElement.remove()">×</button>
  `;
  container.appendChild(row);
}

function handleAddRecipe() {
  const name = document.getElementById('r-name').value.trim();
  if (!name) { alert('레시피 이름을 입력하세요'); return; }

  const dose = parseInt(document.getElementById('r-dose').value) || 20;
  const water = parseInt(document.getElementById('r-water').value) || 300;
  const desc = document.getElementById('r-desc').value.trim() || '나만의 커피 레시피';
  const temp = document.getElementById('r-temp').value.trim() || '90-93°C';
  const grind = document.getElementById('r-grind').value.trim() || '중간 굵기';
  const roast = document.getElementById('r-roast').value.trim() || '미디엄';

  const stepRows = document.querySelectorAll('#form-steps .form-step-row');
  const steps = [];
  let maxTime = 0;
  stepRows.forEach(row => {
    const timeStr = row.querySelector('.step-time').value.trim();
    const pour = parseInt(row.querySelector('.step-pour').value) || 0;
    const label = row.querySelector('.step-label').value.trim() || '투입';
    // Parse mm:ss
    const parts = timeStr.split(':');
    let time = 0;
    if (parts.length === 2) {
      time = parseInt(parts[0]) * 60 + parseInt(parts[1]);
    } else {
      time = parseInt(parts[0]) || 0;
    }
    if (pour > 0) {
      steps.push({ time, pour, label });
      maxTime = Math.max(maxTime, time);
    }
  });

  if (steps.length === 0) { alert('최소 1개 이상의 단계를 입력하세요'); return; }

  const totalPour = steps.reduce((sum, s) => sum + s.pour, 0);
  const totalTime = maxTime + 40; // 40s buffer for last pour to drain

  const recipe = {
    id: `custom-${Date.now()}`,
    name, author: '나만의 레시피', description: desc,
    coffeeDose: dose, totalWater: totalPour,
    waterTemp: temp, grindSize: grind, roastLevel: roast,
    totalTime, steps,
  };

  const customs = getCustomRecipes();
  customs.push(recipe);
  saveCustomRecipes(customs);

  renderRecipeList();
  navigate('list');
}

// ===== Grind Guide =====
const grindGuideData = [
  { kr: '매우 곱게', en: 'Very Fine', c40: '6–10', zp6: '0.2–0.5', micron: '~400μm', color: '#d96650', use: '에스프레소, 모카포트' },
  { kr: '곱게', en: 'Fine', c40: '10–14', zp6: '0.5–1.5', micron: '~600μm', color: '#e8b87d', use: '에스프레소, 터키커피' },
  { kr: '중간 곱게', en: 'Medium-Fine', c40: '14–18', zp6: '1.5–2.8', micron: '~800μm', color: '#c8a882', use: '커피필터, 사이폰' },
  { kr: '중간', en: 'Medium', c40: '18–22', zp6: '2.8–4.1', micron: '~1000μm', color: '#a08565', use: '드립커피 기본, 에어로프레스' },
  { kr: '중간 굵기', en: 'Medium-Coarse', c40: '22–28', zp6: '4.1–6.1', micron: '~1200μm', color: '#8bbf6a', use: 'V60, 칼리타, 오리가미' },
  { kr: '굵게', en: 'Coarse', c40: '28–35', zp6: '6.1–8.5', micron: '~1500μm', color: '#6a9fbb', use: '프렌치프레스, 콜드브루' },
  { kr: '매우 굵게', en: 'Very Coarse', c40: '35–45', zp6: '8.5–11.8', micron: '~1800μm', color: '#7a8dbf', use: '콜드브루, 텐(10) 레시피' },
];

function renderGrindGuide() {
  const container = document.getElementById('grind-guide-content');
  container.innerHTML = `
    <div class="grind-guide-intro">
      <strong>Comandante C40</strong> (1클릭당 약 60μm)와 <strong>1Zpresso ZP6 Special</strong> (1회전 90클릭, 1클릭당 약 22μm) 두 그라인더의 설정을 함께 표시합니다. ZP6 설정값은 변환 공식 <strong>ZP6 ≈ C40클릭 ÷ 3 − 3.2</strong>를 기준으로 계산되었습니다.
    </div>
    <div class="grind-table">
      <div class="grind-row header">
        <span>분쇄도</span><span>C40 클릭</span><span>ZP6 설정</span><span>입자 크기</span>
      </div>
      ${grindGuideData.map(g => `
        <div class="grind-row">
          <span class="g-label"><span class="g-kr">${g.kr}</span><span class="g-en">${g.en}</span></span>
          <span class="g-clicks">${g.c40}</span>
          <span class="g-clicks">${g.zp6}</span>
          <span class="g-micron">${g.micron}</span>
        </div>
      `).join('')}
    </div>
    <div class="grind-use">
      <h3>추출 방법별 추천 분쇄도</h3>
      <div class="grind-use-list">
        ${grindGuideData.map(g => `
          <div class="grind-use-item">
            <span class="dot" style="background:${g.color}"></span>
            <span><strong>${g.kr}</strong> (C40 ${g.c40} / ZP6 ${g.zp6}) — ${g.use}</span>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="grind-conversion-note">
      <h3>변환 참고표 (C40 → ZP6)</h3>
      <div class="conv-table" id="conv-table"></div>
    </div>
  `;
  // Render conversion table
  const convData = [
    { c40: 15, zp6: 1.8 }, { c40: 16, zp6: 2.1 }, { c40: 17, zp6: 2.4 },
    { c40: 18, zp6: 2.8 }, { c40: 19, zp6: 3.1 }, { c40: 20, zp6: 3.4 },
    { c40: 21, zp6: 3.8 }, { c40: 22, zp6: 4.1 }, { c40: 23, zp6: 4.4 },
    { c40: 24, zp6: 4.8 }, { c40: 25, zp6: 5.1 }, { c40: 26, zp6: 5.4 },
    { c40: 27, zp6: 5.8 }, { c40: 28, zp6: 6.1 }, { c40: 29, zp6: 6.4 },
    { c40: 30, zp6: 6.8 },
  ];
  document.getElementById('conv-table').innerHTML = `
    <div class="conv-row header"><span>C40 클릭</span><span>ZP6 설정</span></div>
    ${convData.map(c => `
      <div class="conv-row"><span class="conv-c40">${c.c40}</span><span class="conv-zp6">${c.zp6}</span></div>
    `).join('')}
  `;
}

// ===== Init =====
function init() {
  renderRecipeList();
  renderGrindGuide();
  document.getElementById('add-recipe-btn').addEventListener('click', () => {
    renderAddForm();
    navigate('add');
  });
}

document.addEventListener('DOMContentLoaded', init);
