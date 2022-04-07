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

