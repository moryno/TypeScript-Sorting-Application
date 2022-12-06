import { SortData } from "./SortData";

export class String extends SortData{
    constructor(public str: string){
        super()
    }

    get length(): number{
        return this.str.length
    }

    compare(leftIndex:number, rightIndex: number): boolean{
        return this.str[leftIndex].toLocaleLowerCase() > this.str[rightIndex].toLocaleLowerCase()
    }
    swap(leftIndex: number, rightIndex: number): void{
        const chars = [...this.str];

        const leftArg = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = leftArg;

        this.str = chars.join("")
    }
}