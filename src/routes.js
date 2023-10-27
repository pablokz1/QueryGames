const express = require('express');
const userController = require('./controllers/user-controller');
const platformController = require('./controllers/platform-controller');
const categoryRepository = require('./controllers/category-controller');
const gameRepository = require('./controllers/game-controller');
const scoreRepository = require('./controllers/score-controller');

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

routes.get('/games', gameRepository.get);
routes.get('/games/:id', gameRepository.getById);
routes.post('/games', gameRepository.post);
routes.put('/games/:id', gameRepository.putById);
routes.delete('/games/:id', gameRepository.deleteById);

routes.get('/scores', scoreRepository.get);
routes.get('/scores/:id', scoreRepository.getById);
routes.post('/scores', scoreRepository.post);
routes.put('/scores/:id', scoreRepository.putById);
routes.delete('/scores/:id', scoreRepository.deleteById);

module.exports = routes;