

export function whatsMyType<T>( argument: T ) : T {
    return argument;
}

let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType<number>(1000);
let amIarray = whatsMyType<number[]>([1,2,3,4,5]);
let amIObject = whatsMyType({nombre: 'Tony', edad: 40});
let amIboolean = whatsMyType(true);


console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIarray.reverse());