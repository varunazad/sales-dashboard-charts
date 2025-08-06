document.addEventListener('DOMContentLoaded', () => {
  const mockData = {
    products: { labels: ['Product A', 'Product B', 'Product C'], data: [120, 90, 50] },
    categories: { labels: ['Electronics', 'Clothing', 'Home'], data: [300, 150, 100] },
    monthly: { labels: ['Jan', 'Feb', 'Mar'], data: [500, 700, 800] },
    weekly: { labels: ['Week 1', 'Week 2', 'Week 3'], data: [200, 300, 400] }
  };

  const ctx1 = document.getElementById('topProducts');
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: mockData.products.labels,
      datasets: [{ label: 'Top Products', data: mockData.products.data, backgroundColor: 'rgba(255, 99, 132, 0.5)' }]
    }
  });

  const ctx2 = document.getElementById('topCategories');
  new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: mockData.categories.labels,
      datasets: [{ data: mockData.categories.data, backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'] }]
    }
  });

  const ctx3 = document.getElementById('monthlyRevenue');
  new Chart(ctx3, {
    type: 'line',
    data: {
      labels: mockData.monthly.labels,
      datasets: [{ label: 'Monthly Revenue', data: mockData.monthly.data, borderColor: '#4CAF50', fill: false }]
    }
  });

  const ctx4 = document.getElementById('weeklyRevenue');
  new Chart(ctx4, {
    type: 'bar',
    data: {
      labels: mockData.weekly.labels,
      datasets: [{ label: 'Weekly Revenue', data: mockData.weekly.data, backgroundColor: '#2196F3' }]
    }
  });
});
