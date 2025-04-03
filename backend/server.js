const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/test-server', async (req, res) => {
  const { serverConfig } = req.body;
  try {
    const response = await axios.get(serverConfig.url); // Adjust based on MCP API
    res.json({ status: 'Success', data: response.data });
  } catch (error) {
    res.json({ status: 'Error', message: error.message });
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
