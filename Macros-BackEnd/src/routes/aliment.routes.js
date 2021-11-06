const express = require('express');
const app = express();
const AlimentControllers =  require('../controllers/aliment.controller');

app.get('/aliment' , AlimentControllers.getAliments);
app.post('/aliment' , AlimentControllers.createAliment);
app.put('/aliment/:id' , AlimentControllers.updateAliment);
app.delete('/aliment/:id' , AlimentControllers.deleteAliment);

module.exports = app;