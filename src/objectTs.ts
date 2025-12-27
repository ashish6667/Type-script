const chai =  {
    name: 'chai',
    price: 5,
    isHot: true
}


//{
//    name: string;
//    price: number;
//    isHot: boolean
//}

let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: 'green tea',
    price: 3,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrankChai: Tea = {
    name: 'adrank chai',
    price: 7,
    ingredients: ['milk', 'sugar', 'tea leaves']
}


type Cup = {size: string};
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup; // valid as bigCup has all properties of Cup type