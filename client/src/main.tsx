import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const rootEl = document.getElementById('root')!;

function renderApp() {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

function showErrorOverlay(err: any) {
  const overlay = document.getElementById('error-overlay');
  if (!overlay) return;
  overlay.style.display = 'flex';
  overlay.innerText = `${err && err.stack ? err.stack : String(err)}`;
}

window.addEventListener('error', (e) => {
  console.error(e.error || e.message);
  showErrorOverlay(e.error || e.message);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error(e.reason || e);
  showErrorOverlay(e.reason || e);
});

try {
  renderApp();
} catch (err) {
  showErrorOverlay(err);
}
