const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('.'));

app.post('/api/chat', async (req, res) => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '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',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
