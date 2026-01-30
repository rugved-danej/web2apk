// --- CALCULATOR LOGIC ---
let rawExpression = ""; 
const mainInput = document.getElementById('equationText');
const previewOutput = document.getElementById('previewResult');
const historyList = document.getElementById('history-list');
let history = []; 

function formatDisplay(expression) {
    return expression
        .replace(/\*/g, '×')
        .replace(/\//g, '÷')
        .replace(/-/g, '−')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function calculate(exp) {
    try {
        let cleanExp = exp.replace(/,/g, ''); 
        if (/[+\-*/%]$/.test(cleanExp)) return "";
        if (cleanExp.trim() === "") return "";
        const result = eval(cleanExp);
        if (!isFinite(result) || isNaN(result)) return "";
        let formatted = parseFloat(result.toFixed(6));
        return formatted.toLocaleString(); 
    } catch (e) { return ""; }
}

function updateUI() {
    mainInput.textContent = formatDisplay(rawExpression);
    if (rawExpression.match(/[+\-*/%]/) && rawExpression.length > 0) {
        const result = calculate(rawExpression);
        previewOutput.textContent = result;
    } else {
        previewOutput.textContent = "";
    }
}

function appendNumber(num) {
    rawExpression += num;
    updateUI();
}

function appendOperator(op) {
    const lastChar = rawExpression.slice(-1);
    const ops = ['+', '-', '*', '/', '%'];
    if (ops.includes(lastChar)) {
        rawExpression = rawExpression.slice(0, -1) + op;
    } else {
        rawExpression += op;
    }
    updateUI();
}

function deleteChar() {
    if (rawExpression.length > 0) {
        rawExpression = rawExpression.slice(0, -1);
        updateUI();
    }
}

function clearAll() {
    rawExpression = "";
    previewOutput.textContent = "";
    updateUI();
}

function toggleSign() {
    if(rawExpression === "") return;
    rawExpression += "*(-1)";
    updateUI();
}

function finalizeResult() {
    const result = calculate(rawExpression);
    if (result !== "") {
        addToHistory(rawExpression, result);
        rawExpression = result.replace(/,/g, '');
        previewOutput.textContent = ""; 
        mainInput.textContent = result;
    }
}

// --- HISTORY LOGIC ---
function addToHistory(expression, result) {
    let formattedExp = formatDisplay(expression);
    history.unshift({ exp: formattedExp, res: result });
    renderHistory();
}

function renderHistory() {
    if (history.length === 0) {
        historyList.innerHTML = '<p class="empty-msg" style="text-align:center; opacity:0.5;">No history yet</p>';
        return;
    }
    historyList.innerHTML = '';
    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `<div class="history-eq">${item.exp}</div><div class="history-res">= ${item.res}</div>`;
        div.onclick = () => {
            rawExpression = item.res.replace(/,/g, '');
            updateUI();
            toggleHistory(); 
        };
        historyList.appendChild(div);
    });
}

function clearHistory() {
    history = [];
    renderHistory();
}

function toggleHistory() {
    document.getElementById('history-overlay').classList.toggle('hidden');
    document.getElementById('settings-overlay').classList.add('hidden');
}

function toggleSettings() {
    document.getElementById('settings-overlay').classList.toggle('hidden');
    document.getElementById('history-overlay').classList.add('hidden');
}

// --- ADVANCED THEME ENGINE ---

// 1. Theme Database
const themes = {
    dark: {
        '--bg-color': '#000000',
        '--text-color': '#ffffff',
        '--btn-num-bg': '#2E2E2E',
        '--btn-top-bg': '#3A3A3A',
        '--btn-op-bg': '#4B4B4B',
        '--accent-color': '#35C759',
        '--overlay-bg': '#1c1c1c'
    },
    light: {
        '--bg-color': '#f2f2f7',
        '--text-color': '#000000',
        '--btn-num-bg': '#ffffff',
        '--btn-top-bg': '#d1d1d6',
        '--btn-op-bg': '#ff9f0a',
        '--accent-color': '#007aff',
        '--overlay-bg': '#ffffff'
    },
    dracula: {
        '--bg-color': '#282a36',
        '--text-color': '#f8f8f2',
        '--btn-num-bg': '#44475a',
        '--btn-top-bg': '#6272a4',
        '--btn-op-bg': '#ff79c6',
        '--accent-color': '#bd93f9',
        '--overlay-bg': '#383a59'
    },
    ocean: {
        '--bg-color': '#001e26',
        '--text-color': '#e0f7fa',
        '--btn-num-bg': '#004d40',
        '--btn-top-bg': '#006064',
        '--btn-op-bg': '#00bcd4',
        '--accent-color': '#18ffff',
        '--overlay-bg': '#002f38'
    },
    forest: {
        '--bg-color': '#1b2e1b',
        '--text-color': '#e8f5e9',
        '--btn-num-bg': '#2e4a2e',
        '--btn-top-bg': '#3e5c3e',
        '--btn-op-bg': '#4caf50',
        '--accent-color': '#81c784',
        '--overlay-bg': '#263c26'
    },
    sunset: {
        '--bg-color': '#2d1306',
        '--text-color': '#fff3e0',
        '--btn-num-bg': '#4e2a1e',
        '--btn-top-bg': '#6d4c41',
        '--btn-op-bg': '#ff9800',
        '--accent-color': '#ff5722',
        '--overlay-bg': '#3e1f11'
    },
    neon: {
        '--bg-color': '#0a0a0a',
        '--text-color': '#ffffff',
        '--btn-num-bg': '#212121',
        '--btn-top-bg': '#333333',
        '--btn-op-bg': '#c2185b',
        '--accent-color': '#f50057',
        '--overlay-bg': '#141414'
    }
};

let currentThemeMode = 'system'; // 'system', 'manual', 'custom'

// 2. Apply Theme Function
function applyTheme(themeName) {
    const root = document.documentElement;
    currentThemeMode = themeName;
    
    // Save preference
    if(themeName !== 'custom') {
        localStorage.setItem('calc_theme', themeName);
    }

    if (themeName === 'system') {
        // Detect System Preference
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const selected = isDark ? themes.dark : themes.light;
        setProperties(selected);
    } else if (themeName === 'custom') {
        // We handle custom logic in preview/save
    } else {
        // Apply Preset
        if (themes[themeName]) {
            setProperties(themes[themeName]);
        }
    }
}

// Helper to set CSS vars
function setProperties(themeObj) {
    for (const [key, value] of Object.entries(themeObj)) {
        document.documentElement.style.setProperty(key, value);
    }
}

// 3. Custom Theme Logic
function previewCustomTheme() {
    const custom = {
        '--bg-color': document.getElementById('cust-bg').value,
        '--text-color': document.getElementById('cust-text').value,
        '--btn-num-bg': document.getElementById('cust-btn').value,
        '--btn-top-bg': adjustColor(document.getElementById('cust-btn').value, 20), // Auto-lighter
        '--btn-op-bg': adjustColor(document.getElementById('cust-bg').value, 30), // Auto-lighter
        '--accent-color': document.getElementById('cust-accent').value,
        '--overlay-bg': document.getElementById('cust-bg').value
    };
    setProperties(custom);
    currentThemeMode = 'custom';
}

function saveCustomTheme() {
    const customData = {
        '--bg-color': document.getElementById('cust-bg').value,
        '--text-color': document.getElementById('cust-text').value,
        '--btn-num-bg': document.getElementById('cust-btn').value,
        '--btn-top-bg': adjustColor(document.getElementById('cust-btn').value, 20),
        '--btn-op-bg': adjustColor(document.getElementById('cust-bg').value, 30),
        '--accent-color': document.getElementById('cust-accent').value,
        '--overlay-bg': document.getElementById('cust-bg').value
    };
    
    localStorage.setItem('calc_custom_theme', JSON.stringify(customData));
    localStorage.setItem('calc_theme', 'custom');
    
    alert("Custom Theme Saved!");
    toggleSettings();
}

// Helper to lighten/darken colors for custom theme generation
function adjustColor(color, percent) {
    // Simple hex adjustment logic could go here, 
    // for now we just return the input to keep it bug-free
    return color; 
}

// 4. Initialization & System Listener
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if (currentThemeMode === 'system') {
        applyTheme('system');
    }
});

// Load Saved Theme on Start
window.onload = () => {
    const savedTheme = localStorage.getItem('calc_theme');
    const savedCustom = localStorage.getItem('calc_custom_theme');

    if (savedTheme === 'custom' && savedCustom) {
        setProperties(JSON.parse(savedCustom));
    } else if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('system'); // Default
    }
};
