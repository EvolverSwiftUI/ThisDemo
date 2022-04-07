// this in javascript

// this determined in 3 ways
/*
1. Object methods
    1.1. this is object itself.
2. Regular function
    2.1. this is global object.
3. Arrow functions
    3.1. Context in which the code is defined
*/

// 1. Object methods:
let car = {
    color: "red",
    brand: "Audi",
    start: function() {
        console.log(this);
    }
};

car.start();
// here this refers the car object.


// 2. Regular functions
function start() {
    console.log(this);
}
// here this refers to global object
// this = window object
start();

// 3. Arrow functions
    // we need to check 2 conditions
    // 3.1. When the code is defined?
    // 3.2. Context?

    let car2 = {
        color: "green",
        brand: "BMW",
        start: () => {
            console.log(this);
        }
    };

    car2.start();
    // here this refers to window object


    let car3 = {
        color: "green",
        brand: "BMW",
        start: function() {
            setTimeout(() => {
                console.log(this);
            }, 1000);
        }
    };

    car3.start();
    // here this refers to car

    let cars = [car, car2, car3];
    let car4 = {
        color: "green",
        brand: "BMW",
        start: function() {
            let audiIndex = cars.findIndex(
                (index) => console.log(self)
            );
        }
    };

    car4.start();
    // here this refers to car

// 4. Constructor function
function Car(color,brand) {
    this.color = color;
    this.brand = brand;
    this.start = function() {
        console.log(this);
    };
};

let car5 = new Car("white", "Kia");
car5.start();
// here this refers car5 instance.

function Car1(color,brand) {
    this.color = color;
    this.brand = brand;
    this.start = () => {
        console.log(this);
    };
};

let car6 = new Car1("white", "Kia");
car6.start();
// here this refers car5 instance.

// immutable vs mutable
/* 
All primitive type values are immutable.
All objects are mutables.

Primitive Types:
    1. Number
    2. String
    3. Boolean
    4. Symbol
    5. Undefined

Objects:
    1. Object
    2. Array
    3. Function    
*/

let x = 5;
let y = x;
y = 10;

console.log(x);
console.log(y);

let a = {value: 5};
let b = a;
b.value = 10;
console.log(a);
let c = {value: 20};
b = c;
console.log(b);
console.log(c);

// Declaring variables in JS
/*
It can be done in 3 ways
    1. using let
    2. using const
    3. using var
*/

// 1. using let
// 1.1. initialization is not mandetory
// 1.2. variables can be reassigned

let k;
k = 10;
console.log(k);
k = 15;
console.log(k);

// 2. using const
// 2.1. initialization is mandetory
// 2.2. can't be reassigned

const i = 400;
// i = 20; ===> gives syntax error
console.log(i);

// mutating object properties
const bike = {
    color: "green",
    brand: "Honda"
};

bike.color = "black";
console.log(bike);

// bike = {};
// console.log(bike); ===> Type error

// Summary:
/*
1. This
    1.1. Object methods
    1.2. Regular functions
    1.3. Arrow functions
    1.4. Constructor functions
    1.5. Callbacks
2. JS Values
    2.1. Immutable
    2.2. Mutable
    2.3. new operator
3. Declaring variables
    3.1. const
    3.2. let vs const        
*/


