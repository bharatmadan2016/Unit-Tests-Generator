import { AppError } from '../utils/appError.js';
export function notFoundHandler(req, res, next) { next(new AppError(`Route ${req.method} ${req.originalUrl} not found.`, 404, 'NOT_FOUND')); }
export function errorHandler(error, req, res, _next) {
  const normalized = error instanceof AppError ? error : new AppError('An unexpected server error occurred.', 500);
  if (!normalized.isOperational) console.error(error);
  res.status(normalized.statusCode).json({ error: normalized.message, code: normalized.code });
}
