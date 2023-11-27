const db = require('../configs/database');

async function findByProfileId(profileID) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('SELECT * FROM profiles WHERE id = ?', [profileID]);
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

async function findByRoleId(profileID) {
    return new Promise((resolve, reject) => {
        const profilesRoles = [];
        const stmt = db.prepare('SELECT R.name FROM profiles_roles PR INNER JOIN roles R ON(PR.roleId = R.id) WHERE PR.profileId = ?');
        stmt.bind([profileID]);
        stmt.each((err, row) => {
            if (err) {
                console.error('Occurred an error with find role by id!');
                reject(err);
            }
            profilesRoles.push(row);
        }, (err, count) => {
            resolve(profilesRoles);
        });
        stmt.finalize();
    });
}

async function insert(profileId, roleId) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('INSERT INTO profiles_roles(profileId, roleId) VALUES(?, ?)');
        stmt.bind([profileId, roleId]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with insert role!');
                reject(err);
            }
        });
        stmt.finalize();
    });
}

async function deleteByRoleId(profileId) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('DELETE FROM profiles_roles WHERE roleId = ?');
        stmt.bind([profileId]);
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

module.exports = {findByProfileId, findByRoleId, insert, deleteByRoleId};