const platformRepository = require('../repositories/platform-repository');

async function get(req, res) {
    const platforms = await platformRepository.findAll();
    res.json(platforms);
}

async function getById(req, res) {
    const platform = await platformRepository.findById(req.params.id);
    res.json(platform);
}

async function post(req, res) {
    const platform = await platformRepository.insert(req.body);
    res.status(201).json(platform);
}

async function putById(req, res) {
    const platform = await platformRepository.findById(req.params.id);
    if (!platform) res.status(404).json({message: 'Platform not found!'});
    await platformRepository.update(req.body);
    res.status(204).json()
}

async function deleteById(req, res) {
    const platform = await platformRepository.findById(req.params.id);
    if (!platform) res.status(404).json({message: 'Platform not found!'});
    await platformRepository.deleteById(platform.id);
    res.status(204).json()
}

module.exports = { get, getById, post, putById, deleteById };