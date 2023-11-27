const categoryRepository = require('../repositories/category-repository');

async function get(req, res) {
    const categories = await categoryRepository.findAll();
    res.json(categories);
}

async function getById(req, res) {
    const category = await categoryRepository.findById(req.params.id);
    res.json(category);
}

async function post(req, res) {
    if (req.logged.profile !== 'Administrador') {
        return res.status(403).json({message: 'You not has permission to execute this operation!'});
    }
    try {
        const existingCategory = await categoryRepository.findByName(req.body.name);
        if (existingCategory) {
            return res.status(400).json({ error: 'Category already registered.' });
        }
        const category = await categoryRepository.insert(req.body);
        res.status(201).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

async function putById(req, res) {
    if (req.logged.profile !== 'Administrador') {
        return res.status(403).json({message: 'You not has permission to execute this operation!'});
    }
    try {
        const category = await categoryRepository.findById(req.params.id);
        if (!category) {
            res.status(404).json({message: 'Category not found!'});
            return;
        }
        const existingCategory = await categoryRepository.findByName(req.body.name);
        if (existingCategory && existingCategory.id !== category.id) {
            return res.status(400).json({ error: 'Category already registered.' });
        }

        await categoryRepository.update(req.body);
        res.status(204).json();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

async function deleteById(req, res) {
    if (req.logged.profile !== 'Administrador') {
        return res.status(403).json({message: 'You not has permission to execute this operation!'});
    }
    const category = await categoryRepository.findById(req.params.id);
    if (!category) {
        res.status(404).json({message: 'Category not found!'});
        return;
    }
    await categoryRepository.deleteById(category.id);
    res.status(204).json()
}

module.exports = { get, getById, post, putById, deleteById };