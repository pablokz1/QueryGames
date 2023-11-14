const profileRepository = require('../repositories/profile-repository');
const profilesRolesRepository = require('../repositories/profiles_roles-repository')

async function get(req, res) {
    const users = await profileRepository.findAll();
    res.json(users);
}

async function getById(req, res) {
    const score = await profileRepository.findById(req.params.id);
    res.json(score);
}

async function post(req, res) {
    try {
        const existingProfileName = await profileRepository.findByName(req.body.name);
        const existingProfileAlias = await profileRepository.findByAlias(req.body.alias);
        if (existingProfileName || existingProfileAlias) {
            return res.status(400).json({ error: 'Profile already registered.' });
        }
        const profile = await profileRepository.insert(req.body);
        res.status(201).json(profile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}

async function putById(req, res) {
    try {
        const existingProfileName = await profileRepository.findByName(req.body.name);
        const existingProfileAlias = await profileRepository.findByAlias(req.body.alias);
        if (existingProfileName || existingProfileAlias) {
            return res.status(400).json({ error: 'Profile already registered.' });
        }
        const profile = await profileRepository.findById(req.params.id);
        if (!profile) res.status(404).json({message: 'Profile not found!'});
        await profileRepository.update(req.body);
        res.status(204).json()
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}

async function deleteById(req, res) {
    const profile = await profileRepository.findById(req.params.id);
    if (!profile) res.status(404).json({message: 'Profile not found!'});
    await profileRepository.deleteById(profile.id);
    res.status(204).json()
}

module.exports = { get, getById, post, putById, deleteById };