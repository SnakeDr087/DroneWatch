class AnalyticsService {
  private static instance: AnalyticsService;

  private constructor() {}

  static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  trackPageView(path: string) {
    // Implement actual analytics tracking here
    console.log(`Page view: ${path}`);
  }

  trackEvent(category: string, action: string, label?: string) {
    // Implement actual event tracking here
    console.log(`Event: ${category} - ${action} ${label ? `(${label})` : ''}`);
  }

  trackReportSubmission(reportId: string) {
    this.trackEvent('Report', 'Submit', reportId);
  }

  trackResourceClick(resourceName: string) {
    this.trackEvent('Resource', 'Click', resourceName);
  }
}

export const analyticsService = AnalyticsService.getInstance();