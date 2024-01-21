export class Enemy {
    constructor(name, hp, atk, as) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.as = as;
        this.enemyElement = this.createEnemyElement();
    }
    attack() {
        console.log(`${this.name} attacks for ${this.atk} damage!`);
    }
    takeDamage(damage) {
        this.hp -= damage;
        console.log(`${this.name} takes ${damage} damage! Health: ${this.hp}`);
    }
    createEnemyElement() {
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
    constructor() {
        this.combatElement = document.createElement('div');
        this.combatElement.id = 'combat';
    }
    addEnemy(enemy) {
        this.combatElement.appendChild(enemy.enemyElement);
    }
}
