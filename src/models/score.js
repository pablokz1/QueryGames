class Score {
    constructor(id, note, comments, gameId, userId) {
        this.id = id;
        this.note = note;
        this.comments = comments;
        this.gameId = gameId;
        this.userId = userId;
    }
}

module.exports = Score;