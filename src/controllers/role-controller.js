const rolesRepository = require('../repositories/roles-repository');

async function get(req, res) {
    const roles = await rolesRepository.findAll();
    res.json(roles);
}

async function getById(req, res) {
    const role = await rolesRepository.findById(req.params.id);
    res.json(role);
}

async function post(req, res) {
    try {
        const existingRole = await rolesRepository.findById(req.body.id);
        if (existingRole) {
            return res.status(400).json({ error: 'Role already registered.' });
        }
        const role = await rolesRepository.insert(req.body);
        res.status(201).json(role);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

async function putById(req, res) {
    try {
        const role = await rolesRepository.findById(req.params.id);
        if (!role) {
            res.status(404).json({message: 'Role not found!'});
            return;
        }
        const existingRole = await rolesRepository.findById(req.body.id);
        if (existingRole && existingRole.id !== role.id) {
            return res.status(400).json({ error: 'Role already registered.' });
        }
        await rolesRepository.update(req.body);
        res.status(204).json()
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

async function deleteById(req, res) {
    const role = await rolesRepository.findById(req.params.id);
    if (!role) {
        res.status(404).json({message: 'Role not found!'});
        return;
    }
    await rolesRepository.deleteById(role.id);
    res.status(204).json()
}

module.exports = { get, getById, post, putById, deleteById };