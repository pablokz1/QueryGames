const db = require('../configs/database');

async function findAll() {
    return new Promise((resolve, reject) => {
        const platform = [];
        db.each('SELECT * FROM platforms ORDER BY id', (err, row) => {
            if (err) {
                console.error('Occurred an error with find all platforms!');
                reject(err);
            }
            platform.push(row);
        }, (err, count) => {
            if (err) reject(err);
            resolve(platform);
        });
    });
}

async function findById(id) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('SELECT * FROM platforms WHERE id = ?', [id]);
        stmt.get((err, row) => {
            if (err) {
                console.error('Occurred an error with find platform by id!');
                reject(err);
            }
            resolve(row);
        });
        stmt.finalize();
    });
}

async function findByName(name) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('SELECT * FROM platforms WHERE name = ?', [name]);
        stmt.get((err, row) => {
            if (err) {
                console.error('Occurred an error with find platform by name!');
                reject(err);
            }
            resolve(row);
        });
        stmt.finalize();
    });
}

async function insert(platform) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('INSERT INTO platforms(name) VALUES(?)');
        stmt.bind([platform.name]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with insert platform!');
                reject(err);
            }
        });
        stmt.finalize();
        const stmt2 = db.prepare('SELECT seq FROM sqlite_sequence WHERE name = "platforms"');
        stmt2.get((err, row) => {
            resolve(findById(row ? row['seq'] + 1 : 1));
        });  
        stmt2.finalize();    
    });
}

async function update(platform) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('UPDATE platforms set name = ? WHERE id = ?');
        stmt.bind([platform.name, platform.id]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with update platform!');
                reject(err);
            }
            resolve();
        });
        stmt.finalize();
    });
}

async function deleteById(id) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('DELETE FROM platforms WHERE id = ?');
        stmt.bind([id]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with delte platform!');
                reject(err);
            }
            resolve();
        });
        stmt.finalize();
   });
}

module.exports = {findAll, findById, findByName, insert, update, deleteById};