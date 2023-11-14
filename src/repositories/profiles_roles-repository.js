const db = require('../configs/database');

async function findByProfileId(profileID) {
    return new Promise((resolve, reject) => {
        const gamesCategories = [];
        const stmt = db.prepare('SELECT P.name FROM profiles_roles PR INNER JOIN roles R ON(PR.roleId = r.id) WHERE GC.profileId = ?');
        stmt.bind([profileID]);
        stmt.each((err, row) => {
            if (err) {
                console.error('Occurred an error with find all profiles_roles!');
                reject(err);
            }
            gamesCategories.push(row);
        }, (err, count) => {
            resolve(gamesCategories);
        });
        stmt.finalize();
    });
}

async function insert(profileId, roleId) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('INSERT INTO profiles_roles(prifileId, roleId) VALUES(?, ?)');
        stmt.bind([profileId, roleId]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with insert profile!');
                reject(err);
            }
        });
        stmt.finalize();
    });
}

async function deleteByProfileId(profileId) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('DELETE FROM profiles_roles WHERE profileId = ?');
        stmt.bind([profileId]);
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

module.exports = {findByProfileId, insert, deleteByProfileId};