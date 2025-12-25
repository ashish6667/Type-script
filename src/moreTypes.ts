let response: any = "42";

let numericLength:number = (response as string).length


type Book = {
    name: string;
};

let bookString = '{"name": "TypeScript Basics"}';

let bookObject= JSON.parse(bookString) as Book;

console.log(bookObject);

const inputElement = document.getElementById("username") as
 HTMLInputElement;

 let value: any;

 value = "apple";
 value = [1,2,3];
 value = 2.5;
 value.toUpperCase(); // Error at runtime

 let newValue: unknown;

 newValue = "apple";
 newValue = [1,2,3];
 newValue = 2.5;

 if (typeof newValue === "string") {
    newValue.toUpperCase(); // No error
 }

 try {
    
 } catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
 }

 const data: unknown = "Hello, World!";
 const strData = data as string;

 type Role = "admin" | "user" | "super-admin";

 function redirectBasedOnRole(role: Role) : void {
    if (role === "admin") {
        console.log("Redirect to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirect to user homepage");
        return;
    }
    role;
 }

 function neverReturn(): never {
    while (true) {}
 }