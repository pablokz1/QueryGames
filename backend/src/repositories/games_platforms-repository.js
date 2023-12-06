const db = require('../configs/database');

async function insert(gameId, platformId) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('INSERT INTO games_platforms(gameId, platformId) VALUES(?, ?)');
        stmt.bind([gameId, platformId]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with insert game platform!');
                reject(err);
            }
        });
        stmt.finalize();
    });
}

async function deleteByGameId(gameId) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('DELETE FROM games_platforms WHERE gameId = ?');
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

async function deleteByPlatformId(platformId) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('DELETE FROM games_platforms WHERE platformId = ?');
        stmt.bind([platformId]);
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

module.exports = { insert, deleteByGameId, deleteByPlatformId};