const db = require('../configs/database');

async function findAll() {
    return new Promise((resolve, reject) => {
        const score = [];
        db.each('SELECT * FROM roles ORDER BY id', (err, row) => {
            if (err) {
                console.error('Occurred an error with find all roles!');
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
        const stmt = db.prepare('SELECT * FROM roles WHERE id = ?', [id]);
        stmt.get((err, row) => {
            if (err) {
                console.error('Occurred an error with find role by id!');
                reject(err);
            }
            resolve(row);
        });
        stmt.finalize();
    });
}

async function insert(role) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('INSERT INTO roles(name, alias, description) VALUES(?, ?, ?)');
        stmt.bind([role.name, role.alias, role.description]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with insert role!');
                reject(err);
            }
        });
        stmt.finalize();
        const stmt2 = db.prepare('SELECT seq FROM sqlite_sequence WHERE name = "roles"');
        stmt2.get((err, row) => {
            resolve(findById(row ? row['seq'] + 1 : 1));
        });  
        stmt2.finalize();    
    });
}

async function update(role) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('UPDATE roles SET name = ?, alias = ?, description = ? WHERE id = ?');
        stmt.bind([role.name, role.alias, role.description, role.id]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with update role!');
                reject(err);
            }
            resolve();
        });
        stmt.finalize();
    });
}

async function deleteById(id) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('DELETE FROM roles WHERE id = ?');
        stmt.bind([id]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with delete role!');
                reject(err);
            }
            resolve();
        });
        stmt.finalize();
   });
}

module.exports = {findAll, findById, insert, update, deleteById};