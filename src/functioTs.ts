function makeCoffee(type: string, cups: number){
    console.log(`Making ${cups} cup(s) of ${type}`);
}

makeCoffee('espresso', 2)

function getCoffeePrice(): number {
        return 25
}

function makeOrder(order: string){
    if (!order) return null
    return order
}

function orderCoffee(type?: string){
    console.log(`Order received for ${type || 'regular coffee'}`);
}


