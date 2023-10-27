const gameRepository = require('../repositories/game-repository');

async function get(req, res) {
    const games = await gameRepository.findAll();
    res.json(games);
}

async function getById(req, res) {
    const game = await gameRepository.findById(req.params.id);
    res.json(game);
}

async function post(req, res) {
    const game = await gameRepository.insert(req.body);
    res.status(201).json(game);
}

async function putById(req, res) {
    const game = await gameRepository.findById(req.params.id);
    if (!game) res.status(404).json({message: 'game not found!'});
    await gameRepository.update(req.body);
    res.status(204).json()
}

async function deleteById(req, res) {
    const game = await gameRepository.findById(req.params.id);
    if (!game) res.status(404).json({message: 'game not found!'});
    await gameRepository.deleteById(game.id);
    res.status(204).json()
}

module.exports = { get, getById, post, putById, deleteById };