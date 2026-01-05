interface Choffe {
    flavor: string;
    price: number;
    milk?: boolean;
}

const masala: Choffe = {
    flavor: "Latte",
    price: 40
}

interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = {
    id: 1,
    name: "Coffee Shop"
}
//s.id = 2 // Error: Cannot assign to 'id' because it is a read-only property.

interface DiscountCalculator {
    (price: number): number;
}
const apply50: DiscountCalculator = (price) => price * 0.5;

interface TeaMachine{
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start(){
        console.log("Tea machine started")
    }
    ,
    stop(){
        console.log("Tea machine stopped")
    }
}

interface CoRatings {
    flavor: number;
}

const ratings: CoRatings = {
    flavor: 4.5,  
}

interface User {
    name: string
}  

interface User {
    age: number;
}

const u: User = {
    name: "Ashish",
    age: 25
}

interface A {a: string;}
interface B {b: string;}

interface C extends A, B {
    c: string;
}