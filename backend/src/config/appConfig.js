const apiKey = process.env.GEMINI_API_KEY?.trim() || '';
export const appConfig = { port: Number(process.env.PORT) || 3001, clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173', geminiModel: process.env.GEMINI_MODEL || 'gemini-2.5-flash', maxCodeLength: 15000, hasApiKey: apiKey.length > 10 && apiKey !== 'your_gemini_api_key_here', geminiApiKey: apiKey };
if (!appConfig.hasApiKey) console.warn('⚠️  WARNING: GEMINI_API_KEY is not configured.');
