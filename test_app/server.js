const express = require('express');
const { salesDashboardMiddleware } = require('sales-dashboard-charts');

const app = express();
app.use(salesDashboardMiddleware());

const PORT = 3013;
app.listen(PORT, () => {
   console.log(`\n✅ Dashboard running at: http://localhost:${PORT}/dashboard`);
});