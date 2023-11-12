const express = require('express');
const authenticationController = require('./controllers/authentication-controller');
const userController = require('./controllers/user-controller');
const platformController = require('./controllers/platform-controller');
const categoryRepository = require('./controllers/category-controller');
const gameRepository = require('./controllers/game-controller');
const scoreRepository = require('./controllers/score-controller');

const routes = express();

routes.post('/authentication', authenticationController.postAuth);

routes.get('/users', authenticationController.verifyToken, userController.get);
routes.get('/users/:id', authenticationController.verifyToken, userController.getById);
routes.post('/users', authenticationController.verifyToken, userController.post);
routes.put('/users/:id', authenticationController.verifyToken, userController.putById);
routes.delete('/users/:id', authenticationController.verifyToken, userController.deleteById);

routes.get('/platforms', authenticationController.verifyToken, platformController.get);
routes.get('/platforms/:id', authenticationController.verifyToken, platformController.getById);
routes.post('/platforms', authenticationController.verifyToken, platformController.post);
routes.put('/platforms/:id', authenticationController.verifyToken, platformController.putById);
routes.delete('/platforms/:id', authenticationController.verifyToken, platformController.deleteById);

routes.get('/categories', authenticationController.verifyToken, categoryRepository.get);
routes.get('/categories/:id', authenticationController.verifyToken, categoryRepository.getById);
routes.post('/categories', authenticationController.verifyToken, categoryRepository.post);
routes.put('/categories/:id', authenticationController.verifyToken, categoryRepository.putById);
routes.delete('/categories/:id', authenticationController.verifyToken, categoryRepository.deleteById);

routes.get('/games', authenticationController.verifyToken, gameRepository.get);
routes.get('/games/:id', authenticationController.verifyToken, gameRepository.getById);
routes.post('/games', authenticationController.verifyToken, gameRepository.post);
routes.put('/games/:id', authenticationController.verifyToken, gameRepository.putById);
routes.delete('/games/:id', authenticationController.verifyToken, gameRepository.deleteById);

routes.get('/scores', authenticationController.verifyToken, scoreRepository.get);
routes.get('/scores/:id', authenticationController.verifyToken, scoreRepository.getById);
routes.post('/scores', authenticationController.verifyToken, scoreRepository.post);
routes.put('/scores/:id', authenticationController.verifyToken, scoreRepository.putById);
routes.delete('/scores/:id', authenticationController.verifyToken, scoreRepository.deleteById);

module.exports = routes;