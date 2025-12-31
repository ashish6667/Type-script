const CoffeeFlavors: string[] = ['Espresso','Latte']
const CoffeeSizes: string[] = ['Small','Medium','Large']

type  coffee = {
    name: string,
    price: number
}

const menu: coffee[] = [
    {name: 'Espresso', price: 30},
    {name: 'Latte', price: 40}
]

const cities: readonly string[] = ['Delhi', 'Belarampur', 'Pratapgarh']
// cities.push('Mumbai') // Error: Cannot add to a readonly array

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let coffeTuple: [string, number];
coffeTuple = ['Latte', 40]; // Correct
// coffeTuple = [40, 'Latte']; // Error: Type 'number' is not assignable to type 'string'

let userInfo: [number, string, boolean?]
userInfo = [1, 'Alice', true]; // Correct
userInfo = [2, 'Bob']; // Also correct, boolean is optional
// userInfo = ['Alice', 1]; // Error: Type 'string' is not assignable to type 'number'

const location: readonly [number, number] = [40.7128, 74.0060];