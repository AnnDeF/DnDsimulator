export class creature {
    id: number;
    naam: string;
    isHero:boolean;
    HP: number; //HitPoints
    AC: number; //ArmorClass 
    Init: boolean; //initiatiefModifier

    Heal(heal: number) {
        var newHP = this.HP + heal;

        if (this.HP > newHP) {
            return this.HP;
        }
        else return newHP;
    };

    doDamage(damage: number) {
        var newHP = this.HP - damage;
        if (newHP <= 0) {
            return 0;
        }
        else {
            return newHP;
        }
    };

    }
    