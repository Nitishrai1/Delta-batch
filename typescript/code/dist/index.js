"use strict";
var _a;
console.log(`hello world`);
let age = 20;
if (age < 50) {
    age += 10;
}
let sales = 12233;
let course = "Typescript";
let is_publised = true;
let numbers = [1, 2, 3, 4, 5,];
let newnumbers = numbers.forEach(n => n * 2);
console.log(newnumbers);
let user = [1, 'Mosh'];
;
let mysize = 2;
console.log(mysize);
function calculateTax(income, taxyear) {
    if (taxyear > 2020) {
        if (income < 50000) {
            return income * 10;
        }
    }
    return income * 1.5;
}
const value = calculateTax(10000, 2022);
console.log(value);
let employee = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
function KgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 1.2;
    else
        return parseInt(weight) * 2.2;
}
KgToLbs(10);
KgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);
//# sourceMappingURL=index.js.map