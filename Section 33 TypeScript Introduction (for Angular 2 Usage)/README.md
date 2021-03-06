# Section 33 TypeScript Introduction (for Angular 2 Usage)

TypeScript Introduction (for Angular 2 Usage)

# What I Learned

- TypeScript is just extending JavaScript
    - The ts core is js, meaning loops objects are following same syntax as in the js 
- Ts adds **static typing** to js
    - Following code in js creates problem

```

function add(a, b) {
  return a + b;
}

const result = add('2', '5'); // this matters
console.log(result);

```

- Prints "25" while

```

function add(a, b) {
  return a + b;
}

const result = add(2, 5); // this matters
console.log(result);

```

- Prints "7"
- **Static typing**, would prevent this like ts is having
- With TypeScript, this is achieved

```

function add(a: number, b: number) {
  return a + b;
}

const result = add(2, 5);

console.log(result);

```

- `a : number` adding types after variable
- Installing ts for this project
 - `npn init -y`
 - `npm install typescript`
 - TypeScript is not ran in browser, it needs to compiled to js first
 - Invoking ts compiler `npx tsc`, this needs configuration file
  - We can use it `npx tsc with-typescript.ts`

- Error if method is called with wrong parameter, when compiling

```

$ npx tsc with-typescript.ts
with-typescript.ts(5,20): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

```

- Primitive types in Ts
  - Number `let age : number;`
  - String `let username : string;`
  - Boolean `let isInstructor : boolean;`
- Remember to use lowercase version, with uppercase it points to **object** `Number`
- Complex types
  - Object with **any** type `let person : any;`
    - Should not use `any` type since it will go back to js and defeat its purpose

``` 

let person : any; //Object

person = {
    name : 'Max',
    age: 32 
 };

```
  - Arrays of certain type 
  
```
  
  let hobbies : string[]; 
  hobbies = ['Sport', 'Cooking'];
  
```
  - We can use TypeScript object type defination syntax, `{}` and to use it `let person : {};`
    - We are defining structure of an object, like `struct`:s in c++
    - Using defining structure of an object
```

let person : {
    name : string,
    age : number;
}; // Ts objec type defination syntax

person = {
    name : 'Max',
    age: 32 
};

```
  - We can combine this this to strings also, notice `[]` in the end
    - Following tells arrays contains these object with these types inside

````

let personsArray : {
    name : string,
    age : number;
}[]; // personsArray contains array these objects

```
