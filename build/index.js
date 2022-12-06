"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Numbers_1 = require("./Numbers");
const String_1 = require("./String");
const dataArray = [
    new Date(2010, 9, 24),
    new Date(2012, 9, 24),
    new Date(2009, 9, 24),
    new Date(2022, 9, 24),
    new Date(2011, 9, 24),
    new Date(2018, 9, 24),
    new Date(2035, 9, 24),
    new Date(2100, 9, 24)
];
const years = dataArray.map(date => (date.getFullYear()));
const numbers = new Numbers_1.Numbers(years);
const string = new String_1.String("vdGryF");
numbers.sort();
string.sort();
console.log(numbers.number);
console.log(string.str);
