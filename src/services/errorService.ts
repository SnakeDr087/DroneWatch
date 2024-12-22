class ErrorService {
  private static instance: ErrorService;

  private constructor() {}

  static getInstance(): ErrorService {
    if (!ErrorService.instance) {
      ErrorService.instance = new ErrorService();
    }
    return ErrorService.instance;
  }

  captureError(error: Error, context?: Record<string, any>) {
    console.error('Error:', error);
    console.error('Context:', context);
    // Implement actual error tracking service here
  }

  captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info') {
    console.log(`[${level.toUpperCase()}] ${message}`);
    // Implement actual error tracking service here
  }
}

export const errorService = ErrorService.getInstance();