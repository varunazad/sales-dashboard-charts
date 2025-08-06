# Sales Dashboard Charts 📊

A reusable Node.js + Express middleware package for rendering interactive sales dashboards with Chart.js.


## Features
- Ready-to-use sales dashboard with 4 chart types
- Easy integration with Express applications
- Customizable data sources
- Responsive design works on all devices

## Dependencies

    **This package requires the following peer dependencies (automatically installed with the package):**

    | Dependency      | Version   | Purpose                          |
    |-----------------|-----------|----------------------------------|
    | `express`       | ^4.18.2   | Web server framework             |
    | `chart.js`      | ^4.4.0    | Interactive chart rendering      |
    | `path`          | (built-in)| Node.js path utilities           |

   ** For development/testing:**
    ```bash
    npm install --save-dev jest @types/jest

## Installation
    npm install sales-dashboard-charts

    
## Quick Start
>>**Install the package in your Express application:

     npm install sales-dashboard-charts chart.js


>>**Add the middleware to your Express app::

      const express = require('express');
      const { salesDashboardMiddleware } = require('sales-dashboard-charts');
      
      const app = express();
      
      // Use the dashboard middleware
      app.use(salesDashboardMiddleware());
      
      app.listen(3000, () => {
        console.log('Dashboard available at http://localhost:3000/dashboard');
      });






