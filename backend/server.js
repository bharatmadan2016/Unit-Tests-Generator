import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { appConfig } from './src/config/appConfig.js';
import { errorHandler, notFoundHandler } from './src/middleware/errorHandler.js';
import testRoutes from './src/routes/testRoutes.js';

const app = express();
app.use(cors({ origin: appConfig.clientOrigin }));
app.use(express.json({ limit: '1mb' }));
app.use('/api', testRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(appConfig.port, '0.0.0.0', () => {
  console.log(`\n🚀 AI Unit Test Generator backend running on http://localhost:${appConfig.port}`);
  console.log(`   API key configured: ${appConfig.hasApiKey ? '✅' : '❌ (add GEMINI_API_KEY to .env)'}\n`);
});

export default app;
