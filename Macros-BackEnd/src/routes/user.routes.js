const express = require('express');
const app = express();
const UsersControllers = require('../controllers/user.controller');

app.get('/user' , UsersControllers.getUsers);
app.post('/user' , UsersControllers.addUser);
app.put('/user/:id' , UsersControllers.updateUser);
app.delete('/user/:id' , UsersControllers.deleteUser);

module.exports = app;