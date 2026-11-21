export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
export const MAX_CODE_CHARS = 15000;
export const LANGUAGES = [
  { value: 'python', label: 'Python', emoji: '🐍', framework: 'pytest' },
  { value: 'javascript', label: 'JavaScript', emoji: '🟨', framework: 'Jest' },
  { value: 'java', label: 'Java', emoji: '☕', framework: 'JUnit 5' },
  { value: 'cpp', label: 'C++', emoji: '⚙️', framework: 'Google Test' },
];
