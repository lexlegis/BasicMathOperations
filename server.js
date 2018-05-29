const express = require('express');
const path = require('path')
const ejs = require('ejs');
const bodyParser = require("body-parser");

const PORT = 8000

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', require('./routes/index'));

app.listen(PORT, () => {
  console.log(`Basic Math Operations app listening on port ${PORT}`);
});
