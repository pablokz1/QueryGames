const db = require('../configs/database');

async function findAll() {
    return new Promise((resolve, reject) => {
        const game = [];
        db.each('SELECT * FROM games ORDER BY id', (err, row) => {
            if (err) {
                console.error('Occurred an error with find all games!');
                reject(err);
            }
            game.push(row);
        }, (err, count) => {
            if (err) reject(err);
            resolve(game);
        });
    });
}

async function findById(id) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('SELECT * FROM games WHERE id = ?', [id]);
        stmt.get((err, row) => {
            if (err) {
                console.error('Occurred an error with find game by id!');
                reject(err);
            }
            resolve(row);
        });
        stmt.finalize();
    });
}

async function insert(game) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('INSERT INTO games(name, gender, platformId) VALUES(?, ?, ?)');
        stmt.bind([game.name, game.gender, game.platformId]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with insert game!');
                reject(err);
            }
        });
        stmt.finalize();
        const stmt2 = db.prepare('SELECT seq FROM sqlite_sequence WHERE name = "games"');
        stmt2.get((err, row) => {
            resolve(findById(row ? row['seq'] + 1 : 1));
        });  
        stmt2.finalize();    
    });
}

async function update(game) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('UPDATE games set name = ?, gender = ?,  platformId = ? WHERE id = ?');
        stmt.bind([game.name, game.gender, game.platformId, game.id]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with update game!');
                reject(err);
            }
            resolve();
        });
        stmt.finalize();
    });
}

async function deleteById(id) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('DELETE FROM games WHERE id = ?');
        stmt.bind([id]);
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

module.exports = {findAll, findById, insert, update, deleteById};