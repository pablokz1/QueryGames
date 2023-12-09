const gameRepository = require('../repositories/game-repository');
const gameCategoryRepository = require('../repositories/games_categories-repository')
const userGameRepository = require('../repositories/user_games-repository');
const gamePlatformRepository = require('../repositories/games_platforms-repository');

async function get(req, res) {
    const games = await gameRepository.findAll();
    for(let i =0; i < games.length; i++) {
        games[i].categories = await gameCategoryRepository.findByGameId(games[i].id);
    }
    res.json(games);
}

async function getById(req, res) {
    const game = await gameRepository.findById(req.params.id);
    game['categories'] = await gameCategoryRepository.findByGameId(game.id);
    res.json(game);
}

async function post(req, res) {
    const logged = req.logged;
    const game = await gameRepository.insert(req.body);
    if (game){
        const categories = req.body.categories ;
        categories.forEach(async (category) => {
            await gameCategoryRepository.insert(game.id, category.id);  
        });
        game['categories'] = await gameCategoryRepository.findByGameId(game.id);
        userGameRepository.insert(logged.id, game.id);
        gamePlatformRepository.insert(game.id, game.platformId);
    }
    res.status(201).json(game);
}

async function putById(req, res) {
    const content =  req.body;
    const game = await gameRepository.findById(req.params.id);
    if (!game) {
        res.status(404).json({message: 'game not found!'});
        return;
    } 
    await gameRepository.update(req.body);
    await gameCategoryRepository.update(game.id, content.categories[0].id)
    res.status(204).json()
}

async function deleteById(req, res) {
    const game = await gameRepository.findById(req.params.id);
    if (!game) {
        res.status(404).json({message: 'game not found!'});
        return;
    } 
    await gameRepository.deleteById(game.id);
    res.status(204).json()
}

module.exports = { get, getById, post, putById, deleteById };