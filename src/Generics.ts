function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray(42)
wrapInArray("Hello, World!")
wrapInArray({ name: "Ashish", age: 28 })

function pair<K, V>(a: K, b: V): [K, V] {
    return [a, b]
}

pair(1, "One")
pair("Two", 2)

interface Box<T> {
    contents: T;
}
const stringBox: Box<string> = { contents: "Hello" };
const numberBox: Box<number> = { contents: 123 };

interface ApiPromise<T> {
    data: T,
    status: number
}
const userApiResponse: ApiPromise<{ id: number; name: string }> = {
    data: { id: 1, name: "Ashish" },
    status: 200
}