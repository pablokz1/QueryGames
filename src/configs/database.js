const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('QueryGames.db');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, image TEXT, dateOfBirth DATE, password TEXT NOT NULL, profileId INTEGER, FOREIGN KEY(profileId) REFERENCES profiles(id))');
    db.run('CREATE TABLE IF NOT EXISTS platforms(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS categories(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS games(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, image TEXT, gender TEXT NOT NULL, platformId INTEGER NOT NULL, FOREIGN KEY(platformId) REFERENCES platforms(id))');
    db.run('CREATE TABLE IF NOT EXISTS games_categories(id INTEGER PRIMARY KEY AUTOINCREMENT, gameId INTEGER NOT NULL, categoryId INTEGER NOT NULL, FOREIGN KEY(gameId) REFERENCES games(id), FOREIGN KEY(categoryId) REFERENCES categories(id))');
    db.run('CREATE TABLE IF NOT EXISTS scores(id INTEGER PRIMARY KEY AUTOINCREMENT, note FLOAT NOT NULL, comments TEXT, gameId INTEGER NOT NULL, userId INTEGER NOT NULL, FOREIGN KEY(gameId) REFERENCES games(id), FOREIGN KEY(userId) REFERENCES users(id))');
    db.run('CREATE TABLE IF NOT EXISTS profiles(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, alias TEXT NOT NULL, description TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS roles(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, alias TEXT NOT NULL, description TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS profiles_roles(id INTEGER PRIMARY KEY AUTOINCREMENT, profileId INTEGER NOT NULL, roleId INTEGER NOT NULL, FOREIGN KEY(profileId) REFERENCES profiles(id), FOREIGN KEY(roleId) REFERENCES roles(id))');

    db.run("INSERT OR IGNORE INTO users (id, name, email, password, profileId) VALUES (1, 'Usuário1', 'usuario1@email.com', 'senha123', 1)");
    db.run("INSERT OR IGNORE INTO users (id, name, email, password, profileId) VALUES (2, 'Usuário2', 'usuario2@email.com', 'senha456', 2)");

    db.run("INSERT OR IGNORE INTO platforms (id, name) VALUES (1, 'PlayStation')");
    db.run("INSERT OR IGNORE INTO platforms (id, name) VALUES (2, 'Xbox')");

    db.run("INSERT OR IGNORE INTO categories (id, name) VALUES (1, 'Jogando')");
    db.run("INSERT OR IGNORE INTO categories (id, name) VALUES (2, 'Zerado')");

    db.run("INSERT OR IGNORE INTO games (id, name, gender, platformId) VALUES (1, 'Jogo1', 'Ação', 1)");
    db.run("INSERT OR IGNORE INTO games (id, name, gender, platformId) VALUES (2, 'Jogo2', 'Aventura', 2)");

    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (1, 1, 1)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (2, 2, 2)");

    db.run("INSERT OR IGNORE INTO scores (id, note, comments, gameId, userId) VALUES (1, 4.5, 'Ótimo jogo!', 1, 1)");
    db.run("INSERT OR IGNORE INTO scores (id, note, comments, gameId, userId) VALUES (2, 3.8, 'Divertido, mas poderia ser melhor', 2, 2)");

    db.run("INSERT OR IGNORE INTO profiles (id, name, alias, description) VALUES (1, 'Administrador', 'adm', 'Perfil master do sistema')");
    db.run("INSERT OR IGNORE INTO profiles (id, name, alias, description) VALUES (2, 'Cliente', 'client', 'Perfil limitado')");

    db.run("INSERT OR IGNORE INTO roles (id, name, alias, description) VALUES (1, 'Cadastrar Plataforma', 'Cadastrar_Plataforma', 'Ação que permite cadastrar uma plataforma')");
    db.run("INSERT OR IGNORE INTO roles (id, name, alias, description) VALUES (2, 'Deletar Plataforma', 'Deletar_Plataforma', 'Ação que permite deletar uma plataforma')");

    db.run("INSERT OR IGNORE INTO profiles_roles (id, profileId, roleId) VALUES (1, 1, 1)");
    db.run("INSERT OR IGNORE INTO profiles_roles (id, profileId, roleId) VALUES (2, 1, 2)");
    db.run("INSERT OR IGNORE INTO profiles_roles (id, profileId, roleId) VALUES (3, 2, 1)");

});

module.exports = db;
