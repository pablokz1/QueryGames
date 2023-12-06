const db = require('../configs/database');

async function insert(userId, gameId) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('INSERT INTO user_games(userId, gameId) VALUES(?, ?)');
        stmt.bind([userId, gameId]);
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
        const stmt = db.prepare('DELETE FROM user_games WHERE gameId = ?');
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

async function deleteByUserId(userId) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('DELETE FROM user_games WHERE userId = ?');
        stmt.bind([userId]);
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

module.exports = { insert, deleteByGameId, deleteByUserId};