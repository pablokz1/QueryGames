const db = require('../configs/database');

async function findAll() {
    return new Promise((resolve, reject) => {
        const score = [];
        db.each('SELECT * FROM scores ORDER BY id', (err, row) => {
            if (err) {
                console.error('Occurred an error with find all scores!');
                reject(err);
            }
            score.push(row);
        }, (err, count) => {
            if (err) reject(err);
            resolve(score);
        });
    });
}

async function findById(id) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('SELECT * FROM scores WHERE id = ?', [id]);
        stmt.get((err, row) => {
            if (err) {
                console.error('Occurred an error with find score by id!');
                reject(err);
            }
            resolve(row);
        });
        stmt.finalize();
    });
}

async function insert(score) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('INSERT INTO scores(note, comments, gameId, userId) VALUES(?, ?, ?, ?)');
        stmt.bind([score.note, score.comments, score.gameId, score.userId]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with insert score!');
                reject(err);
            }
        });
        stmt.finalize();
        const stmt2 = db.prepare('SELECT seq FROM sqlite_sequence WHERE name = "scores"');
        stmt2.get((err, row) => {
            resolve(findById(row['seq']));
        });  
        stmt2.finalize();    
    });
}

async function update(score) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('UPDATE scores set note = ?, comments = ?, gameId = ?, userId = ? WHERE id = ?');
        stmt.bind([score.note, score.comments, score.gameId, score.userId, score.id]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with update score!');
                reject(err);
            }
            resolve();
        });
        stmt.finalize();
    });
}

async function deleteById(id) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('DELETE FROM scores WHERE id = ?');
        stmt.bind([id]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with update scores!');
                reject(err);
            }
            resolve();
        });
        stmt.finalize();
   });
}

module.exports = {findAll, findById, insert, update, deleteById};