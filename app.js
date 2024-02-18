const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to AfriMarket');
});

app.listen(port, () => {
  console.log(`AfriMarket app listening at http://localhost:${port}`);
});
