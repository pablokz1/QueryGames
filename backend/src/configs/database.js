const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('QueryGames.db');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, image TEXT, dateOfBirth DATE, password TEXT NOT NULL, profileId INTEGER, FOREIGN KEY(profileId) REFERENCES profiles(id))');
    db.run('CREATE TABLE IF NOT EXISTS user_games(id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER NOT NULL, gameId INTEGER NOT NULL, FOREIGN KEY(userId) REFERENCES users(id), FOREIGN KEY(gameId) REFERENCES games(id))')
    db.run('CREATE TABLE IF NOT EXISTS platforms(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS categories(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS games(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, image TEXT, platformId INTEGER NOT NULL, FOREIGN KEY(platformId) REFERENCES platforms(id))');
    db.run('CREATE TABLE IF NOT EXISTS games_categories(id INTEGER PRIMARY KEY AUTOINCREMENT, gameId INTEGER NOT NULL, categoryId INTEGER NOT NULL, FOREIGN KEY(gameId) REFERENCES games(id), FOREIGN KEY(categoryId) REFERENCES categories(id))');
    db.run('CREATE TABLE IF NOT EXISTS games_platforms(id INTEGER PRIMARY KEY AUTOINCREMENT, gameId INTEGER NOT NULL, platformId INTEGER NOT NULL, FOREIGN KEY(gameId) REFERENCES games(id), FOREIGN KEY(platformId) REFERENCES platforms(id))');
    db.run('CREATE TABLE IF NOT EXISTS scores(id INTEGER PRIMARY KEY AUTOINCREMENT, note INTEGER NOT NULL, gameId INTEGER NOT NULL, userId INTEGER NOT NULL, FOREIGN KEY(gameId) REFERENCES games(id), FOREIGN KEY(userId) REFERENCES users(id))');
    db.run('CREATE TABLE IF NOT EXISTS profiles(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, alias TEXT NOT NULL, description TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS roles(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, alias TEXT NOT NULL, description TEXT NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS profiles_roles(id INTEGER PRIMARY KEY AUTOINCREMENT, profileId INTEGER NOT NULL, roleId INTEGER NOT NULL, FOREIGN KEY(profileId) REFERENCES profiles(id), FOREIGN KEY(roleId) REFERENCES roles(id))');

    db.run("INSERT OR IGNORE INTO users (id, name, email, password, profileId) VALUES (1, 'Usuário1', 'usuario1@email.com', 'senha123', 1)");
    db.run("INSERT OR IGNORE INTO users (id, name, email, password, profileId) VALUES (2, 'Usuário2', 'usuario2@email.com', 'senha456', 2)");
    db.run("INSERT OR IGNORE INTO users (id, name, email, password, profileId) VALUES (3, 'Usuário3', 'usuario3@email.com', 'senha123', 2)");
    db.run("INSERT OR IGNORE INTO users (id, name, email, password, profileId) VALUES (4, 'Usuário4', 'usuario4@email.com', 'senha456', 2)");
    db.run("INSERT OR IGNORE INTO users (id, name, email, password, profileId) VALUES (5, 'Usuário5', 'usuario5@email.com', 'senha123', 2)");
    db.run("INSERT OR IGNORE INTO users (id, name, email, password, profileId) VALUES (6, 'Usuário6', 'usuario6@email.com', 'senha456', 2)");
    db.run("INSERT OR IGNORE INTO users (id, name, email, password, profileId) VALUES (7, 'Usuário7', 'usuario7@email.com', 'senha123', 2)");
    db.run("INSERT OR IGNORE INTO users (id, name, email, password, profileId) VALUES (8, 'Usuário8', 'usuario8@email.com', 'senha456', 2)");
    db.run("INSERT OR IGNORE INTO users (id, name, email, password, profileId) VALUES (9, 'Usuário9', 'usuario9@email.com', 'senha123', 2)");
    db.run("INSERT OR IGNORE INTO users (id, name, email, password, profileId) VALUES (10, 'Usuário10', 'usuario10@email.com', 'senha456', 2)");

    db.run("INSERT OR IGNORE INTO platforms (id, name) VALUES (1, 'PlayStation')");
    db.run("INSERT OR IGNORE INTO platforms (id, name) VALUES (2, 'Xbox')");
    db.run("INSERT OR IGNORE INTO platforms (id, name) VALUES (3, 'Steam')");
    db.run("INSERT OR IGNORE INTO platforms (id, name) VALUES (4, 'EPICGAMES')");
    db.run("INSERT OR IGNORE INTO platforms (id, name) VALUES (5, 'GOG')");
    db.run("INSERT OR IGNORE INTO platforms (id, name) VALUES (6, 'EA Play')");
    db.run("INSERT OR IGNORE INTO platforms (id, name) VALUES (7, 'Nintendo')");
    db.run("INSERT OR IGNORE INTO platforms (id, name) VALUES (8, 'Play Story')");
    db.run("INSERT OR IGNORE INTO platforms (id, name) VALUES (9, 'Aple Story')");
    db.run("INSERT OR IGNORE INTO platforms (id, name) VALUES (10, 'Ubisoft Connect')");

    db.run("INSERT OR IGNORE INTO categories (id, name) VALUES (1, 'Jogando')");
    db.run("INSERT OR IGNORE INTO categories (id, name) VALUES (2, 'Zerado')");
    db.run("INSERT OR IGNORE INTO categories (id, name) VALUES (3, 'Jogado')");
    db.run("INSERT OR IGNORE INTO categories (id, name) VALUES (4, 'Desitido')");
    db.run("INSERT OR IGNORE INTO categories (id, name) VALUES (5, 'Não Recomendo')");
    db.run("INSERT OR IGNORE INTO categories (id, name) VALUES (6, 'Recomendo')");
    db.run("INSERT OR IGNORE INTO categories (id, name) VALUES (7, 'Platinado')");
    db.run("INSERT OR IGNORE INTO categories (id, name) VALUES (8, 'Se melhorar, estraga')");
    db.run("INSERT OR IGNORE INTO categories (id, name) VALUES (9, 'Pausado')");
    db.run("INSERT OR IGNORE INTO categories (id, name) VALUES (10, 'Aguardando Lançamento')");

    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (1, 'GTA V', 1)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (2, 'FC24', 2)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (3, 'CS GO 2', 3)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (4, 'Diablo IV', 5)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (5, 'Minecraft', 8)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (6, 'Fortnite', 6)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (7, 'Mario Kart', 7)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (8, 'League Of Legends', 4)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (9, 'Free Fire', 9)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (10, 'The Division 2', 10)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (11, 'God Of War', 1)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (12, 'Halo Infinit', 2)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (13, 'Shadow of the Colossus', 1)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (14, 'Boomberman', 1)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (15, 'Sea of Tihves', 1)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (16, 'Assassis creed blac flag', 1)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (17, 'GTA IV', 1)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (18, 'Diablo III', 1)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (19, 'Destiny 2', 1)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (20, 'Devil My Cry 5', 1)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (21, 'Hollow Knigth', 1)");
    db.run("INSERT OR IGNORE INTO games (id, name, platformId) VALUES (22, 'Dark Souls', 1)");

    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (1, 1, 1)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (2, 2, 2)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (3, 3, 3)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (4, 4, 4)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (5, 5, 5)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (6, 6, 6)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (7, 7, 7)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (8, 8, 8)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (9, 9, 9)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (10, 10, 10)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (11, 11, 1)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (12, 12, 2)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (13, 13, 1)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (14, 14, 7)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (15, 15, 1)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (16, 16, 1)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (17, 17, 1)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (18, 18, 1)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (18, 18, 1)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (19, 19, 1)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (20, 20, 1)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (21, 21, 1)");
    db.run("INSERT OR IGNORE INTO games_platforms (id, gameId, platformId) VALUES (22, 22, 1)");

    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (1, 1, 1)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (2, 2, 2)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (3, 3, 3)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (4, 4, 4)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (5, 5, 5)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (6, 6, 6)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (7, 7, 7)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (8, 8, 8)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (9, 9, 9)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (10, 10, 10)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (11, 1, 11)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (12, 1, 12)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (13, 1, 13)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (14, 1, 14)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (15, 1, 15)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (16, 1, 16)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (17, 1, 17)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (18, 1, 18)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (19, 1, 19)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (20, 1, 20)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (21, 1, 21)");
    db.run("INSERT OR IGNORE INTO user_games (id, userId, gameId) VALUES (22, 1, 22)");

    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (1, 1, 1)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (2, 2, 2)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (3, 3, 3)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (4, 4, 4)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (5, 5, 5)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (6, 6, 6)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (7, 7, 7)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (8, 8, 8)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (9, 9, 9)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (10, 10, 10)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (11, 11, 1)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (12, 12, 2)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (13, 13, 1)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (14, 14, 1)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (15, 15, 1)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (16, 16, 1)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (17, 17, 1)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (18, 18, 1)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (19, 19, 1)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (20, 20, 1)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (21, 21, 1)");
    db.run("INSERT OR IGNORE INTO games_categories (id, gameId, categoryId) VALUES (22, 22, 1)");

    db.run("INSERT OR IGNORE INTO scores (id, note, gameId, userId) VALUES (1, 4, 1, 1)");
    db.run("INSERT OR IGNORE INTO scores (id, note, gameId, userId) VALUES (2, 4, 2, 2)");
    db.run("INSERT OR IGNORE INTO scores (id, note, gameId, userId) VALUES (3, 4, 3, 3)");
    db.run("INSERT OR IGNORE INTO scores (id, note, gameId, userId) VALUES (4, 3, 4, 4)");
    db.run("INSERT OR IGNORE INTO scores (id, note, gameId, userId) VALUES (5, 5, 5, 5)");
    db.run("INSERT OR IGNORE INTO scores (id, note, gameId, userId) VALUES (6, 3, 6, 6)");
    db.run("INSERT OR IGNORE INTO scores (id, note, gameId, userId) VALUES (7, 4, 7, 7)");
    db.run("INSERT OR IGNORE INTO scores (id, note, gameId, userId) VALUES (8, 3, 8, 8)");
    db.run("INSERT OR IGNORE INTO scores (id, note, gameId, userId) VALUES (9, 4, 9, 9)");
    db.run("INSERT OR IGNORE INTO scores (id, note, gameId, userId) VALUES (10, 4, 10, 10)");
    db.run("INSERT OR IGNORE INTO scores (id, note, gameId, userId) VALUES (11, 4, 11, 1)");
    db.run("INSERT OR IGNORE INTO scores (id, note, gameId, userId) VALUES (12, 3, 12, 2)");

    db.run("INSERT OR IGNORE INTO profiles (id, name, alias, description) VALUES (1, 'Administrador', 'adm', 'Perfil master do sistema')");
    db.run("INSERT OR IGNORE INTO profiles (id, name, alias, description) VALUES (2, 'Cliente', 'client', 'Perfil limitado')");

    db.run("INSERT OR IGNORE INTO roles (id, name, alias, description) VALUES (1, 'Cadastrar Plataforma', 'Cadastrar_Plataforma', 'Ação que permite cadastrar uma plataforma')");
    db.run("INSERT OR IGNORE INTO roles (id, name, alias, description) VALUES (2, 'Deletar Plataforma', 'Deletar_Plataforma', 'Ação que permite deletar uma plataforma')");

    db.run("INSERT OR IGNORE INTO profiles_roles (id, profileId, roleId) VALUES (1, 1, 1)");
    db.run("INSERT OR IGNORE INTO profiles_roles (id, profileId, roleId) VALUES (2, 1, 2)");
    db.run("INSERT OR IGNORE INTO profiles_roles (id, profileId, roleId) VALUES (3, 2, 1)");

});

module.exports = db;
