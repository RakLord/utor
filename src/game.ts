import { SceneCombat } from './objects.js';
import { Enemy } from './objects.js'

const $ = document.querySelectorAll.bind(document);

//  Handle switching of scenes by hiding all scenes and showing the one we want,
// All scenes will be initialized inside of Game constructor (not done yet)
// Dont ever destroy data inside of game.scenes, just hide it
export class Game {
    private data: any;
    public state: States;
    public enemies: Array<object>;
    public scenes: Array<any>;
    public rightPane: any;

    constructor() {
        this.rightPane = document.getElementById('right-pane');
        this.state = States.combat;
        this.scenes = [new SceneCombat()]; // Scenes in order of the Scenes Enum
        // add every enemy from ./assets/ to the this.enemies list
        this.enemies = [new Enemy("Slime", 10, 2, 0.5),
                        new Enemy("GiantRat", 20, 4, 0.7),
                        new Enemy("Gobbo", 35, 6, 0.8),
                        new Enemy("Skelly", 13, 56, 1.0),
                        new Enemy("OrcBrute", 504, 13, 0.6),
                        new Enemy("DireWolf", 112, 57, 1.1),
                        new Enemy("DrowAss", 117, 117, 1.5),
                        new Enemy("Necromancer", 100, 625, 0.3),
                        new Enemy("FireElemental", 659, 1534, 0.8),
                        new Enemy("IceSorceress", 854, 12428, 0.1),
                        new Enemy("DragonWhelp", 4045, 1954, 1.0),
                        new Enemy("DemonKnight", 5050, 5050, 0.6),
                        new Enemy("Vamp", 9014, 9943, 0.8),
                        new Enemy("ForestGuard", 123456, 100000, 0.1),
                        new Enemy("Storm", 50312, 34932, 1.9),
                        new Enemy("CelestialDrag", 314159, 26535, 8.9),
                        new Enemy("DarkOverlord", 99999999, 99999999, 99.99)];

        this.enemies.forEach(enemy => {
            this.scenes[0].addEnemy(enemy);
        });


        this.data = {
            hp: 10,
            atk: 1,
            as: 0.1
        }  
    }

    save(): void {
        const jsonData = JSON.stringify(this.data);
        localStorage.setItem('gameData', jsonData);
    }

    load(): void {
        const jsonData = localStorage.getItem('gameData');
        if (jsonData) {
            this.data = JSON.parse(jsonData);
        }
    }

    setScene(): void {
        console.log(this.scenes[0])
        this.rightPane.appendChild(this.scenes[0].combatElement);
    }
}

enum States {
    combat = 0,
    shop = 1,
}
