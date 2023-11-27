const db = require('../configs/database');

async function findByGameId(gameID) {
    return new Promise((resolve, reject) => {
        const gamesCategories = [];
        const stmt = db.prepare('SELECT C.name FROM games_categories GC INNER JOIN categories C ON(GC.categoryId = C.id) WHERE GC.gameId = ?');
        stmt.bind([gameID]);
        stmt.each((err, row) => {
            if (err) {
                console.error('Occurred an error with find all games_categories!');
                reject(err);
            }
            gamesCategories.push(row);
        }, (err, count) => {
            resolve(gamesCategories);
        });
        stmt.finalize();
    });
}

async function insert(gameId, categoryId) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('INSERT INTO games_categories(gameId, categoryId) VALUES(?, ?)');
        stmt.bind([gameId, categoryId]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with insert game!');
                reject(err);
            }
        });
        stmt.finalize();
    });
}

async function deleteByGameId(gameId) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('DELETE FROM games_categories WHERE gameId = ?');
        stmt.bind([gameId]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with delete game!');
                reject(err);
            }
            resolve();
        });
        stmt.finalize();
   });
}

module.exports = {findByGameId, insert, deleteByGameId};