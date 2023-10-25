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
    const category = await categoryRepository.insert(req.body);
    res.status(201).json(category);
}

async function putById(req, res) {
    const category = await categoryRepository.findById(req.params.id);
    if (!category) res.status(404).json({message: 'Category not found!'});
    await categoryRepository.update(req.body);
    res.status(204).json()
}

async function deleteById(req, res) {
    const category = await categoryRepository.findById(req.params.id);
    if (!category) res.status(404).json({message: 'Category not found!'});
    await categoryRepository.deleteById(category.id);
    res.status(204).json()
}

module.exports = { get, getById, post, putById, deleteById };