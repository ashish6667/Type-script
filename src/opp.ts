//class Coffee {
// flavor: string;
// price: number

//  constructor(flavor: string, price: number) {
//     this.flavor = flavor
//    this.price = price
//  }

//}
//const espresso = new Coffee( 'Espresso', 30)
//espresso.flavor = 'Espresso'


class Coffee {
    public flavor: string = "Espresso"
    private secretIngredients = "Vanilla Syrup"

    reveal(){
        return this.secretIngredients // Accessible within the class
    }


}

class Shop {
    protected shopName = "Coffee corner"
}

class Branch extends Shop {
    getShopName(){
        return this.shopName // Accessible within subclass
    }
}

class Walet{
    #balance = 100

    getBalance(){
        return this.#balance // Accessible within the class
    }
}

const w = new Walet()

class Cup{
    readonly capacity: number = 300

    constructor(capacity: number){
        this.capacity = capacity // Can be assigned only once during initialization
    }
}

class ModernCoffee {
    _sugar = 5
    get sugarLevel(){
        return this._sugar
    }

    set sugar(level: number){
        if(level < 0) throw new Error("Too sweet")
        this._sugar = level
    }
}

class EkspresCoffee {
    static shopName = "Modern Coffee Shop"

    constructor(public flavor: string){}
}
console.log(EkspresCoffee.shopName);

abstract class Drink {
    abstract make(): void
}

class myCoffee extends Drink {
    make()  {
        console.log("Making coffee");
    }
}

class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}