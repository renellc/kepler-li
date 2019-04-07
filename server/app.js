const express = require('express');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;
const distDir = path.join(__dirname, '../dist/');

app.use(cors());
app.use(history());
app.use(express.static(distDir));

app.get('/', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port);
