export class Enemy {
    public enemyElement: HTMLElement;
    constructor(
        public name: string,
        public hp: number,
        public atk: number,
        public as: number) {
    
        this.enemyElement = this.createEnemyElement();
    }


    attack() {
        console.log(`${this.name} attacks for ${this.atk} damage!`);
    }

    takeDamage(damage: number) {
        this.hp -= damage;
        console.log(`${this.name} takes ${damage} damage! Health: ${this.hp}`);
    }

    createEnemyElement(): HTMLElement {
        const enemyElement = document.createElement('div');
        enemyElement.classList.add('enemy');
        enemyElement.innerHTML = `
            <img src="./assets/${this.name}.png">
            <hr>
            <h3>${this.name}</h3>
            <div class="enemy-stats-container">
                <div class="enemy-stat" id="stat_hp"><h3>HP</h3><h4>${this.hp}</h4></div>
                <div class="enemy-stat" id="stat_hp"><h3>ATK</h3><h4>${this.atk}</h4></div>
                <div class="enemy-stat" id="stat_hp"><h3>AS</h3><h4>${this.as}</h4></div>    
            </div>
        `;
        return enemyElement;
    }
}

export class SceneCombat {
    private combatElement: HTMLElement;

    constructor() {
        this.combatElement = document.createElement('div');
        this.combatElement.id = 'combat';

    }

    addEnemy(enemy: Enemy) {
        this.combatElement.appendChild(enemy.enemyElement);
    }
}
