const db = require('../configs/database');

async function findAll() {
    return new Promise((resolve, reject) => {
        const category = [];
        db.each('SELECT * FROM categories ORDER BY id', (err, row) => {
            if (err) {
                console.error('Occurred an error with find all categories!');
                reject(err);
            }
            category.push(row);
        }, (err, count) => {
            if (err) reject(err);
            resolve(category);
        });
    });
}

async function findById(id) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('SELECT * FROM categories WHERE id = ?', [id]);
        stmt.get((err, row) => {
            if (err) {
                console.error('Occurred an error with find category by id!');
                reject(err);
            }
            resolve(row);
        });
        stmt.finalize();
    });
}

async function findByName(name) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('SELECT * FROM categories WHERE name = ?', [name]);
        stmt.get((err, row) => {
            if (err) {
                console.error('Occurred an error with find category by name!');
                reject(err);
            }
            resolve(row);
        });
        stmt.finalize();
    });
}

async function insert(category) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('INSERT INTO categories(name) VALUES(?)');
        stmt.bind([category.name]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with insert category!');
                reject(err);
            }
        });
        stmt.finalize();
        const stmt2 = db.prepare('SELECT seq FROM sqlite_sequence WHERE name = "categories"');
        stmt2.get((err, row) => {
            resolve(findById(row ? row['seq'] + 1 : 1));
        });  
        stmt2.finalize();    
    });
}

async function update(category) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('UPDATE categories set name = ? WHERE id = ?');
        stmt.bind([category.name, category.id]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with update category!');
                reject(err);
            }
            resolve();
        });
        stmt.finalize();
    });
}

async function deleteById(id) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('DELETE FROM categories WHERE id = ?');
        stmt.bind([id]);
        stmt.run(err => {
            if (err) {
                console.error('Occurred an error with delete category!');
                reject(err);
            }
            resolve();
        });
        stmt.finalize();
   });
}

module.exports = {findAll, findById, findByName, insert, update, deleteById};