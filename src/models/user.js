class User {
    constructor(id, name, email, dateOfBirth, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
    }
}

module.exports = User;