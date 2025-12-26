type CoffeeOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};


function makeCoffe(order: CoffeeOrder) {
    console.log( order);
}

function serveCoffe(order: CoffeeOrder) {
    console.log( order);
}

type TeaRecipe =  {
    water: number;
    milk: number
}

class MasalaCoffe implements TeaRecipe {
    water =  100;
    milk = 50;
}

interface CupSize {
   size:  "small" | "large"
} 

class Chai implements CupSize {
    size: "small" | "large" = "large";
}

type TeaType =  "black" | "green" | "herbal";

function prepareTea(t: TeaType) {
    console.log( t );
}

type BaseChai = {teaLeaves: number}
type Extra = { spices: number }

type SpicedChai = BaseChai & Extra;

const cup: SpicedChai = {
    teaLeaves: 5,
    spices: 2
}


type User = {
    username: string;
    password?: string
}

const user1: User = { username: "Ashish"}
const user2: User = { username: "Ashish", password:'Tanya'}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "MyApp",
    version: 1
}

//cfg.appName = "NewName" // Error: Cannot assign to 'appName' because it is a read-only property.
