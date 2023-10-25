const userRepository = require('../repositories/user-repository');

async function get(req, res) {
    const users = await userRepository.findAll();
    res.json(users);
}

async function getById(req, res) {
    const user = await userRepository.findById(req.params.id);
    res.json(user);
}

async function post(req, res) {
    const user = await userRepository.insert(req.body);
    res.status(201).json(user);
}

async function putById(req, res) {
    const user = await userRepository.findById(req.params.id);
    if (!user) res.status(404).json({message: 'User not found!'});
    await userRepository.update(req.body);
    res.status(204).json()
}

async function deleteById(req, res) {
    const user = await userRepository.findById(req.params.id);
    if (!user) res.status(404).json({message: 'User not found!'});
    await userRepository.deleteById(user.id);
    res.status(204).json()
}

module.exports = { get, getById, post, putById, deleteById };