interface CoffeProps {
    name: string;
    price: string;
    isSpecial: boolean;
}

export function Coffe({name, price, isSpecial}: {name: string, price: string, isSpecial: boolean}
    : CoffeProps
) {
    return (
        <article>
        <h2>
           {name} {isSpecial && <span>⭐</span>}
        </h2>
        <p>{price}</p>
        </article> 
    )
}