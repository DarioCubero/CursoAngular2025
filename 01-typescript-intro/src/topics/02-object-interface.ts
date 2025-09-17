
const skills: String[] = ['Bash', 'Counter', 'Healing'];

interface Character {
  name: string;
  hp: number;
  skills: String[];
  hometown?: string; // ? indicates that this property is optional
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash', 'Counter', 'Healing'],
};

strider.hometown = 'Rivendell';

console.table(strider);

export {}