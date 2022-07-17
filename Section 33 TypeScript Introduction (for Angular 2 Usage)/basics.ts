// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives


let age : number;
age = 12;

let username : string;
username = "Miikka";

let isInstructor : boolean;
isInstructor = true;

// More complex types

let hobbies : string[];

hobbies = ['Sport', 'Cooking'];


// let person : any; //Object

// person = {
//     name : 'Max',
//     age: 32 
// };



let person : {
    name : string,
    age : number;
}; // Ts objec type defination syntax

person = {
    name : 'Max',
    age: 32 
};
