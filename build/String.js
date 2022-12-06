"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.String = void 0;
const SortData_1 = require("./SortData");
class String extends SortData_1.SortData {
    constructor(str) {
        super();
        this.str = str;
    }
    get length() {
        return this.str.length;
    }
    compare(leftIndex, rightIndex) {
        return this.str[leftIndex].toLocaleLowerCase() > this.str[rightIndex].toLocaleLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const chars = [...this.str];
        const leftArg = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = leftArg;
        this.str = chars.join("");
    }
}
exports.String = String;
