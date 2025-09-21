//DESTRUCTURING

//INTERFACES
interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details;
}

interface Details {
    author: string,
    year: number;
}

//OBJECT
const audioPlayer1: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Imagine Dragons',
    details: {
        author: 'Dan Reynolds',
        year: 1987
    }
}


// const song = 'New song';
const { song: anotherSong, songDuration: duration, details} = audioPlayer1;
const { author } = details;


// console.log('Song', anotherSong);
// console.log('Duration', duration);
// console.log('Author', author);

// *** PARTE 2 EJERCICIO

// const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ ,  , trunks = 'Súper Trunks!']: string[] = ['Goku', 'Vegeta'];


// const trunks = dbz[3] || 'No hay personaje';
console.log('Personaje 3:', trunks);




export { };