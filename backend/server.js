const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*' }));

app.get('/fees', async (req, res) => {
  try {
    const { data } = await axios.get('https://mempool.space/api/v1/fees/recommended');
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Failed to fetch fees' });
  }
});

app.listen(3000, () => console.log('Backend running on 3000'));
