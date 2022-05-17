/* main process file run */
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan')
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // res.send('Hello World wow');
    res.render('index', {username: 'BomaPD', customers: ["bom", "boonruam", "eieiei"]});
})

app.listen(port, () => {
    debug("Listening on port"+ chalk.green(" : " + port));
})