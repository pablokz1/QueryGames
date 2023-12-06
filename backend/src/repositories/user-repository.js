const db = require('../configs/database');

async function findAll() {
    return new Promise((resolve, reject) => {
        const users = [];
        db.each('SELECT * FROM users ORDER BY id', (err, row) => {
            if (err) {
                console.error('Occurred an error with find all users!');
                reject(err);
            }
            users.push(row);
        }, (err, count) => {
            if (err) reject(err);
            resolve(users);
        });
    });
}

async function findById(id) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('SELECT * FROM users WHERE id = ?', [id]);
        stmt.get((err, row) => {
            if (err) {
                console.error('Occurred an error with find user by id!');
                reject(err);
            }
            resolve(row);
        });
        stmt.finalize();
    });
}

async function findByEmail(email) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('SELECT * FROM users WHERE email = ?', [email]);
        stmt.get((err, row) => {
            if (err) {
                console.error('Occurred an error with find user by e-mail!');
                reject(err);
            }
            resolve(row);
        });
        stmt.finalize();
    });
}

async function findByEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
        stmt.get((err, row) => {
            if (err) {
                console.error('Occurred an error with find user by e-mail and password!');
                reject(err);
            }
            resolve(row);
        });
        stmt.finalize();
    });
}

async function findGamesById(id) {
    return new Promise((resolve, reject) => {
        const games = [];
        db.each(`SELECT G.id, G.name as game, P.name as platform, C.name as category FROM users U INNER JOIN user_games UG ON (U.id = UG.userId) INNER JOIN games G ON(UG.gameId = G.id) LEFT JOIN games_platforms GP ON (G.id = GP.gameId) LEFT JOIN platforms P ON (GP.platformId = P.id) LEFT JOIN games_categories GC ON (G.id = GC.gameId) LEFT JOIN categories C ON (GC.categoryId = C.id) WHERE U.id = ${id}`, (err, row) => {
            if (err) {
                console.error('Occurred an error with find all games created from user!');
                reject(err);
            }
            games.push(row);
        }, (err, count) => {
            if (err) reject(err);
            resolve(games);
        });
    });
}

async function insert(user) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('INSERT INTO users(name, email, dateOfBirth, password, profileId) VALUES(?, ?, ?, ?, ?)');
        stmt.bind([user.name, user.email, user.dateOfBirth, user.password, user.profileId]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with insert user!');
                reject(err);
            }
        });
        stmt.finalize();
        const stmt2 = db.prepare('SELECT seq FROM sqlite_sequence WHERE name = "users"');
        stmt2.get((err, row) => {
            resolve(findById(row ? row['seq'] + 1 : 1));
        });  
        stmt2.finalize();    
    });
}

async function update(user) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('UPDATE users set name = ?, dateOfBirth = ?, password = ?, profileId = ? WHERE id = ?');
        stmt.bind([user.name, user.dateOfBirth, user.password, user.profileId, user.id]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with update user!');
                reject(err);
            }
            resolve();
        });
        stmt.finalize();
    });
}

async function deleteById(id) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('DELETE FROM users WHERE id = ?');
        stmt.bind([id]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with delete user!');
                reject(err);
            }
            resolve();
        });
        stmt.finalize();
   });
}

module.exports = {findAll, findById, findByEmail, findByEmailAndPassword, insert, update, deleteById, findGamesById};