

function addNumers(a: number, b: number):number {
    return a + b;
}

const addNumers2 = (a: number, b: number) :string => {
    return `${a + b}`;
}


function multiply(firstNumber:number, secondNumer?:number, base:number = 2) {
    return firstNumber * base;
}

// const result = addNumers(1, 2);
// const result2 = addNumers2(1, 2);
// const multiplyResult = multiply(5);
// console.log({ result, result2, multiplyResult });

interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount:number ) =>{
    if( character.hp + amount >= 100 ){
        character.hp = 100;
        return;
    }
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 60);
strider.showHp();


export { };