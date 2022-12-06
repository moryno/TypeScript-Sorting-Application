"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numbers = void 0;
const SortData_1 = require("./SortData");
class Numbers extends SortData_1.SortData {
    constructor(number) {
        super();
        this.number = number;
    }
    ;
    compare(leftIndex, rightIndex) {
        return this.number[leftIndex] > this.number[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftArg = this.number[leftIndex];
        this.number[leftIndex] = this.number[rightIndex];
        this.number[rightIndex] = leftArg;
    }
    get length() {
        return this.number.length;
    }
}
exports.Numbers = Numbers;
