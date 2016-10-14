const express = require('express');
const path = require('path');

const app = express();

app.use('/assets', express.static('assets'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'assets', 'index.html')));

app.listen(process.env.PORT || 8080);