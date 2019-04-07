const express = require('express');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;
const distDir = path.join(__dirname, '../dist/');

app.use(cors());
app.use(history());
app.use(serveStatic(distDir));
app.listen(port);
