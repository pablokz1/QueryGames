const platformRepository = require('../repositories/platform-repository');

async function get(req, res) {
    const users = await platformRepository.findAll();
    res.json(users);
}

async function getById(req, res) {
    const user = await platformRepository.findById(req.params.id);
    res.json(user);
}

async function post(req, res) {
    const user = await platformRepository.insert(req.body);
    res.status(201).json(user);
}

async function putById(req, res) {
    const user = await platformRepository.findById(req.params.id);
    if (!user) res.status(404).json({message: 'Platform not found!'});
    await platformRepository.update(req.body);
    res.status(204).json()
}

async function deleteById(req, res) {
    const user = await platformRepository.findById(req.params.id);
    if (!user) res.status(404).json({message: 'Platform not found!'});
    await platformRepository.deleteById(user.id);
    res.status(204).json()
}

module.exports = { get, getById, post, putById, deleteById };