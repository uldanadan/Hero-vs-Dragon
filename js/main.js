const Dragon = {
    hp: 2000,      // Жизненная энергия
    defense: 120,  // Защита
    str: 150,      // Сила
    weapon: 0,     // Оружие
    modifyHealth: function (damage) {
        this.hp += damage;
    },
    showInfo: function() {
        return `Dragon HP is: ${this.hp < 0 ? 0 : this.hp}`;
    },
    attack: function (enemy) {
        const dmg = this.str + this.weapon - enemy.defense;
        const rand = Math.floor(Math.random() * 101);
        if (rand < 50) {
            console.log(`Dragon attack Hero dealing damage: ${dmg} points`);
            enemy.modifyHealth(-dmg);
            if (enemy.hp <= 0) {
                enemy.hp = 0;
               console.log('Dragon win');
            }
        } else {
            console.log(`Dragon asleep`);
        }
    },
    attacFireBall: function () {
        let dmg = this.str * 2;
        const rand = Math.floor(Math.random() * 101);
        if (rand < 50) {
            console.log(`Dragon attack Hero dealing damage: ${dmg} points`);
            console.log('*********************************************');
            if (Hero.isShieldEquipped) {
                console.log('Hero defended');
                console.log(Hero.showInfo());
             }
            else {
                console.log('Dragon spits a fireball')
                Hero.modifyHealth(-dmg);
                console.log(Hero.showInfo());
                if (Hero.hp <= 0) {
                    Hero.hp = 0;
                   console.log('Dragon win');
                }
            }
        }
    }
 };
 
 const Hero = {
    hp: 1000,       // Жизненная энергия
    defense: 100,   // Защита
    str: 120,       // Сила
    weapon: 250,    // Оружие
    shield: 150,    // Щит
    potion: 2,      // Зелье
    modifyHealth: function (damage) {
        this.hp += damage;
    },
    showInfo: function () {
        return `Hero HP is: ${this.hp < 0 ? 0 : this.hp}`;
    },
    attack: function(enemy) {
        const dmg = this.str + this.weapon - enemy.defense;
        const rand = Math.floor(Math.random() * 101);
        if (rand < 75) {
            console.log(`Hero attack Dragon dealing damage: ${dmg} points`);
            enemy.modifyHealth(-dmg);
            if (enemy.hp <= 0) {
                enemy.hp = 0;
                console.log('Hero win');
            }
        } else {
            console.log(`Hero missed`);
        }
    },
    isShieldEquipped: false,
    equipShield: function () {
        if (!this.isShieldEquipped) {
            this.defense += this.shield;
            this.isShieldEquipped = true;
        }
    },
    removeShield: function () {
        if (this.isShieldEquipped) {
            this.defense -= this.shield;
            this.isShieldEquipped = false;
        } 
    },
    drinkThePotion: function () {
        if (true) {
            if (this.potion > 0) {
                this.potion -= 1;
                this.modifyHealth(500);
                console.log(this.potion);
                console.log(this.hp);
            }
            else {
                this.potion = 0;
                console.log(this.potion);
                console.log(this.hp);
                console.log('**********************');
                console.log('no potion left');
            }
        }
    }
 };

 const playGame = () => {
    let stopGame = false;
    while (Dragon.hp > 0 && Hero.hp > 0 && !stopGame) {
        let correct = false;
        while (!correct) {
            const choose = prompt('1: Attack \n2: Nothing \n3: Defend \n4: Drink the potion');

            if (+choose >= 1 && +choose <=4) {
                correct = true;
            }

            if(+choose === 1) {
                console.log('**********************');
                console.log(Hero.showInfo());
                console.log(Dragon.showInfo());
                console.log('**********************');

                Hero.attack(Dragon);
               
                console.log('**********************');
                console.log(Hero.showInfo());
                console.log(Dragon.showInfo());
                console.log('**********************');
            }
            else if(+choose === 2) {
                console.log('Hero nothing to do')
                stopGame = true;
            }
            else if(+choose === 3) {
                console.log('amount of defense: ' + Hero.defense);
                Hero.equipShield();
                console.log('**********************');
                console.log('amount of defense after using the shield: ' + Hero.defense);
                stopGame = true;
            }
            else if(+choose === 4) {
                Hero.drinkThePotion();
            }
        }
    }
 }

 playGame();