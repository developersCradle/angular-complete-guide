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


let personsArray : {
    name : string,
    age : number;
}[]; // Ts objec type defination syntax

//Type inference
let course = 'React' //This is same as, " let course : string = 'React' "
course = 2231; //Error coz ts uses behind scnenes type inference

//Union types, type allows more than 1 type

let unionType : string | number = "React";
unionType = 1212;



type Person = {
    name : string;
    age : number;
};

let person1 : Person; // No need to define Person again here when using type alias

// Function & types

function add(a : number,b : number) { // Will implicit inferet
    return a+b;
}


// return values
function add2(a : number,b : number) : string | number { // Returning union type
    return a+b;
}



// Generics

// function insertAtBeginning(array : any[], value : any)
// {
//     const newArray = [value, ...array]; //Spread operator
//     return newArray;
// }

function insertAtBeginning<T>(array : T[], value : T) // Same with generics
{
    const newArray = [value, ...array]; //Spread operator
    return newArray;
}



const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

updatedArray[0].slit(''); // Error


class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];
  
    constructor(
       firstName: string,
       lastName: string,
       age: number,
       courses: string[]
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.courses = courses;

    }
  
    enrol(courseName: string) {
      this.courses.push(courseName);
    }
  
    listCourses() {
      return this.courses.slice();
    }
  }
  
  const student = new Student('Max', 'Schwarz', 32, ['Angular']);
  student.enrol('React');
  // student.listCourses(); => Angular, React
  
  // student.courses => Angular, React
  
  type Human =  {
    firstName: string;
    age: number;
  
    greet: () => void;
  }
  
  let max: Human;
  
  max = {
    firstName: 'Max',
    age: 32,
    greet() {
      console.log('Hello!');
    },
  };
  
  class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
      console.log('Hello!!!!');
    }
  }