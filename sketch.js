var playercount;

var database, canvas;
var allPlayers;
var player, gamemanager;

function preload() {

}

function setup() {
    database = firebase.database();

    canvas = createCanvas(displayWidth - 100, displayHeight - 100);

    gamemanager = new GameManager();
    gamemanager.start();
}

function draw() {

}