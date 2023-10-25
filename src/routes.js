const express = require('express');
const userController = require('./controllers/user-controller');

const routes = express();

routes.get('/users', userController.get);
routes.get('/users/:id', userController.getById);
routes.post('/users', userController.post);
routes.put('/users/:id', userController.putById);
routes.delete('/users/:id', userController.deleteById);

module.exports = routes;