const scoreRepository = require('../repositories/score-repositort');

async function get(req, res) {
    if (req.params.gameId) {
        const scores = await scoreRepository.findAllByGameId(req.params.gameId);
        res.json(scores);    
    }
    const scores = await scoreRepository.findAll();
    res.json(scores);
}

async function getById(req, res) {
    const score = await scoreRepository.findById(req.params.id);
    res.json(score);
}

async function post(req, res) {
    const score = await scoreRepository.insert(req.body);
    res.status(201).json(score);
}

async function putById(req, res) {
    const score = await scoreRepository.findById(req.params.id);
    if (!score) {
        res.status(404).json({message: 'score not found!'});
        return;
    } 
    await scoreRepository.update(req.body);
    res.status(204).json()
}

async function deleteById(req, res) {
    const score = await scoreRepository.findById(req.params.id);
    if (!score) {
        res.status(404).json({message: 'score not found!'});
        return;
    }
    await scoreRepository.deleteById(score.id);
    res.status(204).json()
}

module.exports = { get, getById, post, putById, deleteById };