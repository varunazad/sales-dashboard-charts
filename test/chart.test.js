const { salesDashboardMiddleware } = require('../src/index');

describe('Sales Dashboard Middleware', () => {
  test('should return an express router', () => {
    const router = salesDashboardMiddleware();
    expect(typeof router.use).toBe('function');
  });
});
