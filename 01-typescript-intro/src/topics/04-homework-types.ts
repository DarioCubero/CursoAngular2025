/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: String,
    age: Number,
    address: Address
    showAddress: () => string;
}

interface Address {
    street: String,
    country: String,
    city: String
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};