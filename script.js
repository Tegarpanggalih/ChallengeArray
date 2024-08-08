// script.js

// Array Unshift
let cars = [
    {
        color: "purple",
        type: "minivan",
        registration: new Date("2017-01-03"),
        capacity: 7,
    },
    {
        color: "red",
        type: "station wagon",
        registration: new Date("2018-03-03"),
        capacity: 5,
    },
];

document.getElementById("demo").innerHTML = JSON.stringify(cars, null, 2);

function myFunction() {
    let car = {
        color: "red",
        type: "cabrio",
        registration: new Date("2016-05-02"),
        capacity: 2,
    };
    cars.unshift(car);
    document.getElementById("demo").innerHTML = JSON.stringify(cars, null, 2);
}

// Array Push
let cars1 = [
    {
        color: "purple",
        type: "minivan",
        registration: new Date("2017-01-03"),
        capacity: 7,
    },
    {
        color: "red",
        type: "station wagon",
        registration: new Date("2018-03-03"),
        capacity: 5,
    },
];

document.getElementById("demo1").innerHTML = JSON.stringify(cars1, null, 2);

function myFunction1() {
    let car = {
        color: "red",
        type: "cabrio",
        registration: new Date("2016-05-02"),
        capacity: 2,
    };
    cars1.push(car);
    document.getElementById("demo1").innerHTML = JSON.stringify(cars1, null, 2);
}

// Array Splice
let cars2 = [
    {
        color: "purple",
        type: "minivan",
        registration: new Date("2017-01-03"),
        capacity: 7,
    },
    {
        color: "red",
        type: "station wagon",
        registration: new Date("2018-03-03"),
        capacity: 5,
    },
];

document.getElementById("demo2").innerHTML = JSON.stringify(cars2, null, 2);

function myFunction2() {
    let car = {
        color: "red",
        type: "cabrio",
        registration: new Date("2016-05-02"),
        capacity: 2,
    };
    cars2.splice(1, 0, car);
    document.getElementById("demo2").innerHTML = JSON.stringify(cars2, null, 2);
}

// Array Find
let cars3 = [
    {
        color: "purple",
        type: "minivan",
        registration: new Date("2017-01-03"),
        capacity: 7,
    },
    {
        color: "red",
        type: "station wagon",
        registration: new Date("2018-03-03"),
        capacity: 5,
    },
    {
        color: "red",
        type: "cabrio",
        registration: new Date("2016-05-02"),
        capacity: 2,
    },
];

document.getElementById("demo3").innerHTML = JSON.stringify(cars3, null, 2);

function myFunction3() {
    let car = cars3.find((car) => car.color === "red" && car.type === "cabrio");
    console.log(car);
}

// Array Filter
let cars4 = [
    {
        color: "purple",
        type: "minivan",
        registration: new Date("2017-01-03"),
        capacity: 7,
    },
    {
        color: "red",
        type: "station wagon",
        registration: new Date("2018-03-03"),
        capacity: 5,
    },
    {
        color: "red",
        type: "cabrio",
        registration: new Date("2016-05-02"),
        capacity: 2,
    },
];

document.getElementById("demo4").innerHTML = JSON.stringify(cars4, null, 2);

function myFunction4() {
    let redCars = cars4.filter((car) => car.color === "red");
    console.log(redCars);
}

// Array Map
let cars5 = [
    {
        color: "purple",
        type: "minivan",
        registration: new Date("2017-01-03"),
        capacity: 7,
    },
    {
        color: "red",
        type: "station wagon",
        registration: new Date("2018-03-03"),
        capacity: 5,
    },
    {
        color: "red",
        type: "cabrio",
        registration: new Date("2016-05-02"),
        capacity: 2,
    },
];

document.getElementById("demo5").innerHTML = JSON.stringify(cars5, null, 2);

function myFunction5() {
    let carsProperties = cars5.map((car) => {
        let properties = {
            capacity: car.capacity,
            size: "large",
        };
        if (car.capacity <= 5) {
            properties.size = "medium";
        }
        if (car.capacity <= 3) {
            properties.size = "small";
        }
        return properties;
    });
    console.log(carsProperties);
}

// Array ForEach
let cars6 = [
    {
        color: "purple",
        type: "minivan",
        registration: new Date("2017-01-03"),
        capacity: 7,
    },
    {
        color: "red",
        type: "station wagon",
        registration: new Date("2018-03-03"),
        capacity: 5,
    },
    {
        color: "red",
        type: "cabrio",
        registration: new Date("2016-05-02"),
        capacity: 2,
    },
];

document.getElementById("demo6").innerHTML = JSON.stringify(cars6, null, 2);

function myFunction6() {
    cars6.forEach((car) => {
        car.size = "large";
        if (car.capacity <= 5) {
            car.size = "medium";
        }
        if (car.capacity <= 3) {
            car.size = "small";
        }
    });
    document.getElementById("demo6").innerHTML = JSON.stringify(cars6, null, 2);
}

// Array Sort
let cars7 = [
    {
        color: "red",
        type: "station wagon",
        registration: new Date("2018-03-03"),
        capacity: 5,
    },
    {
        color: "purple",
        type: "minivan",
        registration: new Date("2017-01-03"),
        capacity: 7,
    },
    {
        color: "red",
        type: "cabrio",
        registration: new Date("2016-05-02"),
        capacity: 2,
    },
];

document.getElementById("demo7").innerHTML = JSON.stringify(cars7, null, 2);

function myFunction7() {
    let sortedCars = cars7.sort((c1, c2) => (c1.capacity < c2.capacity ? 1 : c1.capacity > c2.capacity ? -1 : 0));
    console.log(sortedCars);
}

// Array Some and Every
let cars8 = [
    {
        color: "red",
        type: "station wagon",
        registration: new Date("2018-03-03"),
        capacity: 5,
    },
    {
        color: "purple",
        type: "minivan",
        registration: new Date("2017-01-03"),
        capacity: 7,
    },
    {
        color: "red",
        type: "cabrio",
        registration: new Date("2016-05-02"),
        capacity: 2,
    },
];

document.getElementById("demo8").innerHTML = JSON.stringify(cars8, null, 2);

function myFunction8() {
    let cek = cars8.some((car) => car.color === "red" && car.type === "cabrio");
    document.getElementById("demo9").innerHTML = cek;
}

function myFunction9() {
    let cek = cars8.every((car) => car.capacity >= 4);
    document.getElementById("demo10").innerHTML = cek;
}
