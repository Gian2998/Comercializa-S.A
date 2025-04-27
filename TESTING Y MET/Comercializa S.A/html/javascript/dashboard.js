const ctx = document.getElementById('statsChart').getContext('2d');

const statsChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
    datasets: [{
      label: 'Ventas',
      data: [50000, 75000, 60000, 90000, 125000],
      backgroundColor: '#007BFF'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
