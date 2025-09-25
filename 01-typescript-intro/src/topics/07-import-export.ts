import { Product, taxCalculation, } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 150.0
    }
];


const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', total)
console.log('Tax', taxTotal)