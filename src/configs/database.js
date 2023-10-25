const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('games.db');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, dateOfBirth DATE, password TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS platforms(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS categories(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS games(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, platformId INTEGER NOT NULL, FOREIGN KEY(platformId) REFERENCES platforms(id))');
    db.run('CREATE TABLE IF NOT EXISTS games_categories(gameId INTEGER NOT NULL, categoryId INTEGER NOT NULL, FOREIGN KEY(gameId) REFERENCES games(id), FOREIGN KEY(categoryId) REFERENCES category(id))');
    db.run('CREATE TABLE IF NOT EXISTS scores(id INTEGER PRIMARY KEY AUTOINCREMENT, note FLOAT NOT NULL, comments TEXT, gameId INTEGER NOT NULL, userId INTEGER NOT NULL, FOREIGN KEY(gameId) REFERENCES games(id), FOREIGN KEY(userId) REFERENCES users(id))');
});

module.exports = db;