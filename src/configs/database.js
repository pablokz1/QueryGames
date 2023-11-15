const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('QueryGames.db');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, image TEXT, dateOfBirth DATE, password TEXT NOT NULL, profileId INTEGER, FOREIGN KEY(profileId) REFERENCES profiles(id))');
    db.run('CREATE TABLE IF NOT EXISTS platforms(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS categories(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS games(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, image TEXT, gender TEXT NOT NULL, platformId INTEGER NOT NULL, FOREIGN KEY(platformId) REFERENCES platforms(id))');
    db.run('CREATE TABLE IF NOT EXISTS games_categories(gameId INTEGER NOT NULL, categoryId INTEGER NOT NULL, FOREIGN KEY(gameId) REFERENCES games(id), FOREIGN KEY(categoryId) REFERENCES categories(id))');
    db.run('CREATE TABLE IF NOT EXISTS scores(id INTEGER PRIMARY KEY AUTOINCREMENT, note FLOAT NOT NULL, comments TEXT, gameId INTEGER NOT NULL, userId INTEGER NOT NULL, FOREIGN KEY(gameId) REFERENCES games(id), FOREIGN KEY(userId) REFERENCES users(id))');
    db.run('CREATE TABLE IF NOT EXISTS profiles(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, alias TEXT NOT NULL, description TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS roles(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, alias TEXT NOT NULL, description TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS profiles_roles(profileId INTEGER NOT NULL, roleId INTEGER NOT NULL, FOREIGN KEY(profileId) REFERENCES profiles(id), FOREIGN KEY(roleId) REFERENCES roles(id))');
});

module.exports = db;
