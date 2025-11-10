// index.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok'});
});

// root (เลือกใส่ได้)
app.get('/', (req, res) => {
    res.send('Backend W01 is running');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
