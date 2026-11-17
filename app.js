const storageKey = 'kumano-guide-checks-v1';
let state = {};
try {
  const stored = localStorage.getItem(storageKey);
  const parsed = stored ? JSON.parse(stored) : {};
  state = parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
} catch {
  state = {};
}
const toast = document.querySelector('[data-toast]');
let toastTimer;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    showToast('瀏覽器未允許儲存勾選狀態');
  }
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  const helper = document.createElement('textarea');
  helper.value = text;
  helper.setAttribute('readonly', '');
  helper.style.position = 'fixed';
  helper.style.opacity = '0';
  document.body.appendChild(helper);
  helper.select();
  const copied = document.execCommand('copy');
  helper.remove();
  return copied;
}

function hydrateChecks() {
  document.querySelectorAll('input[type="checkbox"][data-stamp], input[type="checkbox"][data-prep], input[type="checkbox"][data-final]').forEach((input) => {
    const key = input.dataset.stamp ? `stamp-${input.dataset.stamp}` : input.dataset.prep ? `prep-${input.dataset.prep}` : `final-${input.dataset.final}`;
    input.checked = Boolean(state[key]);
    input.addEventListener('change', () => {
      state[key] = input.checked;
      saveState();
      updateStampCount();
    });
  });
}

function updateStampCount() {
  const count = document.querySelectorAll('input[data-stamp]:checked').length;
  const counter = document.querySelector('[data-stamp-count]');
  if (counter) counter.textContent = `${count} / 10`;
}

function setDay(day) {
  document.querySelectorAll('[data-day-tab]').forEach((tab) => {
    const active = tab.dataset.dayTab === String(day);
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('[data-day-panel]').forEach((panel) => {
    const active = panel.dataset.dayPanel === String(day);
    panel.classList.toggle('is-visible', active);
    panel.hidden = !active;
  });
}

document.querySelectorAll('[data-day-tab]').forEach((tab) => tab.addEventListener('click', () => setDay(tab.dataset.dayTab)));

document.querySelectorAll('[data-print]').forEach((button) => button.addEventListener('click', () => window.print()));

document.querySelectorAll('[data-share]').forEach((button) => button.addEventListener('click', async () => {
  const shareData = { title: document.title, text: '日本朝聖之路｜熊野古道雙朝聖指南', url: window.location.href };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      showToast('已開啟分享面板');
    } else {
      const copied = await copyText(window.location.href);
      showToast(copied ? '指南連結已複製' : '請手動複製瀏覽器網址');
    }
  } catch (error) {
    if (error?.name !== 'AbortError') showToast('分享未完成，請再試一次');
  }
}));

document.querySelector('[data-reset]')?.addEventListener('click', () => {
  Object.keys(state).forEach((key) => delete state[key]);
  saveState();
  document.querySelectorAll('input[type="checkbox"]').forEach((input) => { input.checked = false; });
  updateStampCount();
  showToast('已清除這台裝置的勾選狀態');
});

hydrateChecks();
updateStampCount();


// Cache the first-party guide for offline viewing after the page is opened over HTTPS.
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { scope: './' }).catch(() => {
      showToast('離線快取未啟用；請先下載 GPX 與官方地圖 PDF');
    });
  });
}
