const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/v1/posts', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'All Posts'
  })
});

app.listen(PORT, () => {
  console.log(`Server Start Port ${PORT}`);
})