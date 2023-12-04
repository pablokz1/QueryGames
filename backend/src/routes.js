const express = require('express');
const authenticationController = require('./controllers/authentication-controller');
const userController = require('./controllers/user-controller');
const platformController = require('./controllers/platform-controller');
const categoryRepository = require('./controllers/category-controller');
const gameRepository = require('./controllers/game-controller');
const scoreRepository = require('./controllers/score-controller');
const profileRepository = require('./controllers/profile-controller');
const roleRepository = require('./controllers/role-controller');

const routes = express();

routes.post('/authentication', authenticationController.postAuth);

routes.get('/users', userController.get);
routes.get('/users/:id', userController.getById);
routes.post('/users', userController.post);
routes.put('/users/:id', authenticationController.verifyToken, userController.putById);
routes.delete('/users/:id', authenticationController.verifyToken, userController.deleteById);

routes.get('/platforms', platformController.get);
routes.get('/platforms/:id', platformController.getById);
routes.post('/platforms', authenticationController.verifyToken, platformController.post);
routes.put('/platforms/:id', authenticationController.verifyToken, platformController.putById);
routes.delete('/platforms/:id', authenticationController.verifyToken, platformController.deleteById);

routes.get('/categories', categoryRepository.get);
routes.get('/categories/:id', categoryRepository.getById);
routes.post('/categories', authenticationController.verifyToken, categoryRepository.post);
routes.put('/categories/:id', authenticationController.verifyToken, categoryRepository.putById);
routes.delete('/categories/:id', authenticationController.verifyToken, categoryRepository.deleteById);

routes.get('/games', gameRepository.get);
routes.get('/games/:id', gameRepository.getById);
routes.post('/games', authenticationController.verifyToken, gameRepository.post);
routes.put('/games/:id', authenticationController.verifyToken, gameRepository.putById);
routes.delete('/games/:id', authenticationController.verifyToken, gameRepository.deleteById);

routes.get('/scores', scoreRepository.get);
routes.get('/scores/:id', scoreRepository.getById);
routes.post('/scores', authenticationController.verifyToken, scoreRepository.post);
routes.put('/scores/:id', authenticationController.verifyToken, scoreRepository.putById);
routes.delete('/scores/:id', authenticationController.verifyToken, scoreRepository.deleteById);

routes.get('/profiles', profileRepository.get);
routes.get('/profiles/:id', profileRepository.getById);
routes.post('/profiles', authenticationController.verifyToken, profileRepository.post);
routes.put('/profiles/:id', authenticationController.verifyToken, profileRepository.putById);
routes.delete('/profiles/:id', authenticationController.verifyToken, profileRepository.deleteById);

routes.get('/roles', roleRepository.get);
routes.get('/roles/:id', roleRepository.getById);
routes.post('/roles', authenticationController.verifyToken, roleRepository.post);
routes.put('/roles/:id', authenticationController.verifyToken, roleRepository.putById);
routes.delete('/roles/:id', authenticationController.verifyToken, roleRepository.deleteById);

module.exports = routes;