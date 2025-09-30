
export interface Passenger {
    name: string;
    children?: string[];
}


const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Darío',
    children: ['Adrían', 'Clara']
}

const returnChildrenNumber = (passenger: Passenger) => {

    const howManyChildren = passenger.children?.length || 0; //si es undefined o nulo, le asigna 0
    // const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren)

    return howManyChildren
}

returnChildrenNumber(passenger1); 