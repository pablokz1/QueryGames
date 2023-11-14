const db = require('../configs/database');

async function findAll() {
    return new Promise((resolve, reject) => {
        const score = [];
        db.each('SELECT * FROM profiles ORDER BY id', (err, row) => {
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

// async function findAllByProfileId(gameId) {
//     return new Promise((resolve, reject) => {
//         const scores = [];
//         const stmt = db.prepare('SELECT p.id, p.name, p.alias, p.description, u.name, U.email FROM profiles P INNER JOIN roles r ON(r.roleId = r.id) INNER JOIN users U ON(.userId = U.id) WHERE S.gameId = ?');
//         stmt.bind([gameId]);
//         stmt.each((err, row) => {
//             if (err) {
//                 console.error('Occurred an error with find all score by gameId!');
//                 reject(err);
//             }
//             scores.push(row);
//         }, (err, count) => {
//             resolve(scores);
//         });
//         stmt.finalize();
//     });
// }

async function findById(id) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('SELECT * FROM profiles WHERE id = ?', [id]);
        stmt.get((err, row) => {
            if (err) {
                console.error('Occurred an error with find profile by id!');
                reject(err);
            }
            resolve(row);
        });
        stmt.finalize();
    });
}

async function findByName(name) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('SELECT * FROM profiles WHERE name = ?', [name]);
        stmt.get((err, row) => {
            if (err) {
                console.error('Occurred an error with find profile by name and alias!');
                reject(err);
            }
            resolve(row);
        });
        stmt.finalize();
    });
}

async function findByAlias(alias) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('SELECT * FROM profiles WHERE alias = ?', [alias]);
        stmt.get((err, row) => {
            if (err) {
                console.error('Occurred an error with find profile by name and alias!');
                reject(err);
            }
            resolve(row);
        });
        stmt.finalize();
    });
}

async function insert(profile) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('INSERT INTO profiles(name, alias, description) VALUES(?, ?, ?)');
        stmt.bind([profile.name, profile.alias, profile.description]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with insert profile!');
                reject(err);
            }
        });
        stmt.finalize();
        const stmt2 = db.prepare('SELECT seq FROM sqlite_sequence WHERE name = "profiles"');
        stmt2.get((err, row) => {
            resolve(findById(row ? row['seq'] + 1 : 1));
        });  
        stmt2.finalize();    
    });
}

async function update(profile) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('UPDATE profiles SET name = ?, alias = ?, description = ? WHERE id = ?');
        stmt.bind([profile.name, profile.alias, profile.description, profile.id]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with update profile!');
                reject(err);
            }
            resolve();
        });
        stmt.finalize();
    });
}

async function deleteById(id) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('DELETE FROM profiles WHERE id = ?');
        stmt.bind([id]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with update profile!');
                reject(err);
            }
            resolve();
        });
        stmt.finalize();
   });
}

module.exports = {findAll, findById, findByName, findByAlias, insert, update, deleteById};