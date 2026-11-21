import { Router } from 'express';
import { generateTestsController, healthController } from '../controllers/testController.js';
const router = Router();
router.get('/health', healthController);
router.post('/generate-tests', generateTestsController);
export default router;
