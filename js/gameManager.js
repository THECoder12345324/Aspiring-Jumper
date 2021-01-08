class GameManager {
    constructor() {

    }

    getCount() {
        playerCountref = database.ref('playerCount');
        playerCountref.on("value", function (data) {
            playercount = data.val();
        })
    }

    updateCount(x) {
        database.ref('/').update({
            playerCount: x
        })
    }

    async start() {
        form = new Form()
        form.display();
    }
}