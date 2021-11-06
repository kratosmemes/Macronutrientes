const express = require("express");
const app = express();

app.use(require('./routes/user.routes'));
app.use(require('./routes/aliment.routes'));

module.exports = app;