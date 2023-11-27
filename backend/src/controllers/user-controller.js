const userRepository = require('../repositories/user-repository');
const profileRepository = require('../repositories/profile-repository');


async function get(req, res) {
    const users = await userRepository.findAll();
    for(let i =0; i < users.length; i++) {
        const profileId = users[i].profileId;
        if (profileId !== null) {
            const profile = await profileRepository.findById(profileId);
            users[i]['profile'] = profile.name;
        }
    }
    res.json(users);
}

async function getById(req, res) {
    const user = await userRepository.findById(req.params.id);
    if (user.profileId !== null) {
        const profile = await profileRepository.findById(user.profileId);
        user['profile'] = profile.name;
    }
    res.json(user);
}

async function post(req, res) {
    try {
        const existingUser = await userRepository.findByEmail(req.body.email);
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered.' });
        }
        const user = await userRepository.insert(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

async function putById(req, res) {
    const user = await userRepository.findById(req.params.id);
    if (!user) {
        res.status(404).json({message: 'User not found!'});
        return;
    }
    if (user.profileId !== null && user.profileId !== req.body.profileId) {
        res.status(400).json({message: 'Invalid profile to user!'});
        return;
    }
    await userRepository.update(req.body);
    res.status(204).json();
}

async function deleteById(req, res) {
    if (req.logged.profile !== 'Administrador') {
        return res.status(403).json({message: 'You not has permission to execute this operation!'});
    }
    const user = await userRepository.findById(req.params.id);
    if (!user) {
        res.status(404).json({message: 'User not found!'});
        return;
    }
    await userRepository.deleteById(user.id);
    res.status(204).json()
}

module.exports = { get, getById, post, putById, deleteById };