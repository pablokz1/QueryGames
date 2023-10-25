const express = require('express');
const userController = require('./controllers/user-controller');
const platformController = require('./controllers/platform-controller');
const categoryRepository = require('./controllers/category-controller');

const routes = express();

routes.get('/users', userController.get);
routes.get('/users/:id', userController.getById);
routes.post('/users', userController.post);
routes.put('/users/:id', userController.putById);
routes.delete('/users/:id', userController.deleteById);

routes.get('/platforms', platformController.get);
routes.get('/platforms/:id', platformController.getById);
routes.post('/platforms', platformController.post);
routes.put('/platforms/:id', platformController.putById);
routes.delete('/platforms/:id', platformController.deleteById);

routes.get('/categories', categoryRepository.get);
routes.get('/categories/:id', categoryRepository.getById);
routes.post('/categories', categoryRepository.post);
routes.put('/categories/:id', categoryRepository.putById);
routes.delete('/categories/:id', categoryRepository.deleteById);

module.exports = routes;