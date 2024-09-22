const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// API route to serve chart data
app.get('/api/chartdata', (req, res) => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [10, 20, 30, 40, 50, 60]  // Example data, could be fetched from a database
  };
  res.json(chartData);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
