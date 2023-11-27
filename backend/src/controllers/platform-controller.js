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
    try {
        const existingPlatform = await platformRepository.findByName(req.body.name);
        if (existingPlatform) {
            return res.status(400).json({ error: 'Platform already registered.' });
        }
        const platform = await platformRepository.insert(req.body);
        res.status(201).json(platform);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}

async function putById(req, res) {
    if (req.logged.profile !== 'Administrador') {
        return res.status(403).json({message: 'You not has permission to execute this operation!'});
    }
    try {
        const platform = await platformRepository.findById(req.params.id);
        if (!platform) {
            res.status(404).json({message: 'Platform not found!'});
            return;
        } 
        const existingPlatform = await platformRepository.findByName(req.body.name);
        if (existingPlatform && existingPlatform.id !== platform.id) {
            return res.status(400).json({ error: 'Platform already registered.' });
        }
        await platformRepository.update(req.body);
        res.status(204).json()
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

async function deleteById(req, res) {
    if (req.logged.profile !== 'Administrador') {
       return res.status(403).json({message: 'You not has permission to execute this operation!'});
    }
    const platform = await platformRepository.findById(req.params.id);
    if (!platform) {
        res.status(404).json({message: 'Platform not found!'});
        return;
    } 
    await platformRepository.deleteById(platform.id);
    res.status(204).json()
}

module.exports = { get, getById, post, putById, deleteById };