import { useState } from 'react';
import { LANGUAGES, MAX_CODE_CHARS } from './config/appConfig.js';
import { useTestGenerator } from './hooks/useTestGenerator.js';
import LanguageSelector from './components/LanguageSelector.jsx';
import CodeEditor from './components/CodeEditor.jsx';
import ErrorBanner from './components/ErrorBanner.jsx';
import GeneratedTests from './components/GeneratedTests.jsx';

export default function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');
  const { result, loading, error, generate } = useTestGenerator();
  const selected = LANGUAGES.find(item => item.value === language);
  const canGenerate = code.trim() && !loading && code.length <= MAX_CODE_CHARS;

  return <div className="app">
    <header className="header"><div className="header-logo">🧪</div><span className="header-title">AI Unit Test Generator</span><span className="header-badge">Powered by Gemini</span></header>
    <section className="hero"><div className="hero-tag"><span className="hero-tag-dot" />AI-Powered Testing</div><h1>Generate <span className="gradient-text">Unit Tests</span><br />in Seconds</h1><p className="hero-sub">Paste your code, pick a language, and let Gemini AI write comprehensive unit tests — including edge cases and error scenarios.</p></section>
    <main className="main-content">
      <div className="controls-row"><LanguageSelector languages={LANGUAGES} value={language} onChange={setLanguage} /><button id="generate-btn" className="btn-generate" onClick={() => generate(code, language)} disabled={!canGenerate}>{loading ? 'Generating…' : '✨ Generate Unit Tests'}</button></div>
      <CodeEditor code={code} onChange={setCode} label={selected?.label || 'source'} maxChars={MAX_CODE_CHARS} />
      <ErrorBanner message={error} />
      {loading && <div className="card"><div className="loading-container"><div className="spinner" /><span className="loading-text">Gemini is analyzing your code and writing tests…</span></div></div>}
      <GeneratedTests result={result} sourceCode={code} framework={selected?.framework} />
      {!result && !loading && <div className="tips-row"><div className="tip"><span className="tip-icon">🎯</span><span className="tip-text">Includes <strong>normal cases</strong>, edge cases, and invalid input handling</span></div><div className="tip"><span className="tip-icon">🔒</span><span className="tip-text">Your API key stays <strong>server-side</strong> — never exposed to the browser</span></div><div className="tip"><span className="tip-icon">⚡</span><span className="tip-text">Uses <strong>Gemini</strong> for fast, accurate test generation</span></div></div>}
    </main>
    <footer className="footer">Built with React, Express &amp; the <a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer">Gemini API</a></footer>
  </div>;
}
