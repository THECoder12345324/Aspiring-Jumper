class Player {
    constructor() {
        this.username = null;
        this.password = null;
        this.index = null;
    }
    update() {
        database.ref('players/player' + this.index).set({
            userName: this.username,
            passWord: this.password
        })
    }
    static getPlayerInfo() {
        var playerRef = database.ref('players');
        playerRef.on("value", function (data) {
            allPlayers = data.val();
        })
    }
}