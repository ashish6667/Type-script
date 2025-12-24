function getApple(kind: string | number) {
    if (typeof kind === 'string') {
        return `This is a ${kind} apple...`;
    }
    return `This is a ${kind}-year-old apple...`;
}

function  serveFruit(msg?: string) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return 'No fruit to serve';
}

function orderFruit(size: "small" | "medium" | "large") {
    if (size === 'small') {
        return 'You ordered a small fruit';
    }
    else if (size === 'medium' || size === 'large') {
        return `You ordered a ${size} fruit`
    }
    return 'Unknown size';
}