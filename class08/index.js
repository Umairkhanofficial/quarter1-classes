"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let car = {
    model: "bwm",
    color: "white",
    engine: "x200",
};
console.log(car);
let cartype1 = {
    model: "bmc",
    color: "while",
    engine: 400,
};
console.log(cartype1);
let fruits = [{
        name: "apple",
        quantity: 4,
        box: 6,
        isavailable: true,
    },
    {
        name: "banana",
        quantity: 2,
        box: 2,
        isavailable: true,
    }];
let active = fruits.filter((data) => {
    if (data.isavailable == true) {
        return true;
    }
});
console.log(active);
let car2 = {
    model: "Audi",
    color: "white",
    engine: "x200",
};
console.log(car2);
