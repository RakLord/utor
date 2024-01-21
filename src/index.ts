import { Game } from "./game.js";

const $ = document.querySelectorAll.bind(document);

let game: Game;

function init() {
    console.log("Init");
    game = new Game(); 

    game.setScene();
    
    
    main();
}

function main() {
    console.log("Main");
    console.log(game);
}

document.addEventListener("DOMContentLoaded", init);
