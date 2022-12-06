import { SortData } from "./SortData";

export class Numbers extends SortData{
    constructor(public number: number[]){
        super()
    };

    compare(leftIndex: number, rightIndex: number): boolean{
        return this.number[leftIndex] > this.number[rightIndex]
    }

    swap(leftIndex: number, rightIndex: number):void{
        const leftArg = this.number[leftIndex];
        this.number[leftIndex] = this.number[rightIndex];
        this.number[rightIndex] = leftArg
    }

    get length(): number{
        return this.number.length
    }
}