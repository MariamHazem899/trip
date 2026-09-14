const CONFIG = {
    KEY: '1e68f82406f3295714a44bb7f2bf66df',
    URL: 'https://openweathermap.org'
};

const nodes = {
    input: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),
    geoBtn: document.getElementById('geo-btn'),
    error: document.getElementById('error-box'),
    history: document.getElementById('history-list'),
    hero: document.getElementById('weather-hero'),
    forecast: document.getElementById('forecast-grid'),
    welcome: document.getElementById('welcome-message')
};

let history = JSON.parse(localStorage.getItem('search_history')) || [];

document.addEventListener('DOMContentLoaded', () => {
    setWelcomeGreeting();
    renderHistory();
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => handleGeoSuccess(pos),
            () => fallbackToDefault()
        );
    } else {
        fallbackToDefault();
    }
});

nodes.searchBtn.addEventListener('click', handleSearch);
nodes.input.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSearch(); });
nodes.geoBtn.addEventListener('click', handleManualGeo);

function setWelcomeGreeting() {
    const hours = new Date().getHours();
    if (hours < 12) {
        nodes.welcome.textContent = 'صباح الخير 🌤️';
    } else {
        nodes.welcome.textContent = 'مساء الخير ✨';
    }
}

function fallbackToDefault() {
    if (history.length > 0) {
        fetchQuery(history[0]);
    } else {
        fetchQuery('القاهرة');
    }
}

function handleSearch() {
    const value = nodes.input.value.trim();
    if (value) fetchQuery(value);
}

async function fetchQuery(city) {
    nodes.error.classList.add('hidden');
    nodes.hero.style.opacity = '0.5'; 
    
    try {
        const currentRes = await fetch(`${CONFIG.URL}weather?q=${encodeURIComponent(city)}&appid=${CONFIG.KEY}&units=metric&lang=ar`);
        if (!currentRes.ok) throw new Error('تأكد من كتابة اسم المدينة بشكل صحيح.');
        const current = await currentRes.json();

        const forecastRes = await fetch(`${CONFIG.URL}forecast?lat=${current.coord.lat}&lon=${current.coord.lon}&appid=${CONFIG.KEY}&units=metric&lang=ar`);
        const forecast = await forecastRes.json();

        updateHero(current);
        updateForecast(forecast);
        saveToHistory(current.name);
    } catch (err) {
        nodes.error.textContent = err.message;
        nodes.error.classList.remove('hidden');
    } finally {
        nodes.hero.style.opacity = '1';
    }
}

function handleManualGeo() {
    if (!navigator.geolocation) return;
    nodes.geoBtn.classList.add('active-geo');
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            handleGeoSuccess(pos);
            nodes.geoBtn.classList.remove('active-geo');
        },
        () => {
            nodes.error.textContent = 'تم رفض الوصول للموقع الحالي.';
            nodes.error.classList.remove('hidden');
            nodes.geoBtn.classList.remove('active-geo');
        }
    );
}

async function handleGeoSuccess(pos) {
    try {
        const res = await fetch(`${CONFIG.URL}weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${CONFIG.KEY}&units=metric&lang=ar`);
        const data = await res.json();
        fetchQuery(data.name);
    } catch {
        fallbackToDefault();
    }
}

function updateHero(data) {
    nodes.hero.innerHTML = `
        <div class="hero-data">
            <div>
                <h2>${data.name}، ${data.sys.country}</h2>
                <p style="color: var(--text-secondary); margin-top: 4px; text-transform: capitalize;">${data.weather.description}</p>
            </div>
            <div class="main-temp">${Math.round(data.main.temp)}°م</div>
        </div>
        <div class="weather-meta">
            <div class="meta-item"><span>الرطوبة</span><strong>${data.main.humidity}%</strong></div>
            <div class="meta-item"><span>سرعة الرياح</span><strong>${data.wind.speed} م/ث</strong></div>
            <div class="meta-item"><span>الحرارة المحسوسة</span><strong>${Math.round(data.main.feels_like)}°م</strong></div>
        </div>
    `;
}

function updateForecast(data) {
    nodes.forecast.innerHTML = '';
    const filtered = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    filtered.forEach((item, index) => {
        const dayName = new Date(item.dt * 1000).toLocaleDateString('ar-EG', { weekday: 'short' });
        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="day">${dayName}</div>
            <img src="https://openweathermap.org{item.weather.icon}.png" alt="icon">
            <div class="temp">${Math.round(item.main.temp)}°</div>
        `;
        nodes.forecast.appendChild(card);
    });
}

function saveToHistory(city) {
    history = history.filter(item => item.toLowerCase() !== city.toLowerCase());
    history.unshift(city);
    if (history.length > 3) history.pop();
    localStorage.setItem('search_history', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    nodes.history.innerHTML = '';
    history.forEach(city => {
        const btn = document.createElement('button');
        btn.className = 'history-item';
        btn.textContent = city;
        btn.addEventListener('click', () => fetchQuery(city));
        nodes.history.appendChild(btn);
    });
}
