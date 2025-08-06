const path = require('path');
const express = require('express');

function salesDashboardMiddleware() {
  const router = express.Router();

  // Serve static assets (JS/CSS/images)
  router.use('/dashboard/assets', express.static(path.join(__dirname, '..', 'public')));

  // Serve dashboard.html manually on /dashboard
  router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'dashboard.html'));
  });

  return router;
}

module.exports = { salesDashboardMiddleware };
