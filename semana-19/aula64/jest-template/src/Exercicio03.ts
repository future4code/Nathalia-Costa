import { Character, validateCharacter } from "./Exercicio01";

export function performAttack(attack: Character, defender: Character, validator: (input: Character) => boolean){
    
    if(validator(attack) || validator(defender) === false){
        throw Error("Invalid Character")
    };
    if (attack.strength > defender.defense){
        defender.life -= attack.strength - defender.defense
    }
}