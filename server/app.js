const express = require('express');
const cors = require('cors');
const history = require('connect-history-api-fallback');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(history());
app.use(express.static(__dirname + '/../dist/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../dist/index.html');
});

app.listen(port);