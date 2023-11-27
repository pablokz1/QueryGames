const profileRepository = require('../repositories/profile-repository');
const profilesRolesRepository = require('../repositories/profiles_roles-repository');

async function get(req, res) {
    const profile = await profileRepository.findAll();
    for(let i =0; i < profile.length; i++) {
        profile[i].roles = await profilesRolesRepository.findByRoleId(profile[i].id);
    }
    res.json(profile);
}

async function getById(req, res) {
    const score = await profileRepository.findById(req.params.id);
    res.json(score);
}

async function post(req, res) {
    if (req.logged.profile !== 'Administrador') {
        return res.status(403).json({message: 'You not has permission to execute this operation!'});
    }
    try {
        const existingProfile = await profileRepository.findById(req.body.id);
        if (existingProfile) {
            return res.status(400).json({ error: 'Profile already registered.' });
        }
        const profile = await profileRepository.insert(req.body);
        const role = req.body.roles;
        role.forEach(async (role) => {
            await profilesRolesRepository.insert(profile.id, role.id);  
        });
        profile['roles'] = await profilesRolesRepository.findByRoleId(profile.id);
        res.status(201).json(profile);
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
        const profile = await profileRepository.findById(req.params.id);
        if (!profile) {
            res.status(404).json({message: 'Profile not found!'});
            return;
        }
        const existingProfile = await profileRepository.findById(req.body.id);
        if (existingProfile && existingProfile.id !== profile.id) {
            return res.status(400).json({ error: 'Profile already registered.' });
        }
        await profileRepository.update(req.body);
        res.status(204).json()
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}

async function deleteById(req, res) {
    if (req.logged.profile !== 'Administrador') {
        return res.status(403).json({message: 'You not has permission to execute this operation!'});
    }
    const profile = await profileRepository.findById(req.params.id);
    if (!profile) {
        res.status(404).json({message: 'Profile not found!'});
        return;
    } 
    await profileRepository.deleteById(profile.id);
    res.status(204).json()
}

module.exports = { get, getById, post, putById, deleteById };