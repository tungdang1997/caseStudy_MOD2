import {FootballShirt} from "./foodballShirt";
import {AdultShirt} from "./adultShirt";



export class WomenShirt extends AdultShirt {
    private _size1: string;
    private _size2: string;
    private _size3: string;
    private _size4: string;


    constructor(colorCode: number, clubCode: number, size1: string, size2: string, size3: string, size4: string) {
        super(colorCode, clubCode);
        this._size1 = size1;
        this._size2 = size2;
        this._size3 = size3;
        this._size4 = size4;
    }


    getSize1(): string {
        return this._size1;
    }

    setSize1(value: string) {
        this._size1 = value;
    }

    getSize2(): string {
        return this._size2;
    }

    setSize2(value: string) {
        this._size2 = value;
    }

    getSize3(): string {
        return this._size3;
    }

    setSize3(value: string) {
        this._size3 = value;
    }

    getSize4(): string {
        return this._size4;
    }

    setSize4(value: string) {
        this._size4 = value;
    }
}

export class WomenSize {
    static womenList: FootballShirt[] = [];

    static addWomen(FoodballShirt: FootballShirt): void{
        WomenSize.womenList.push(FoodballShirt);
    }

    static displayWomen(): void {
        for (const womenList of WomenSize.womenList){
            console.table(womenList);
        }
    }

    static deleteWomen(clubCode: number, colorCode: number): void {
        for (let i = 0; i < WomenSize.womenList.length; i++) {
            if (WomenSize.womenList[i].colorCode === colorCode || WomenSize.womenList[i].clubCode === clubCode) {
                WomenSize.womenList.splice(i, 1);
            }
        }

    }

    static editWomen(colorCode: number, clubCode: number, menEdit: WomenShirt): void {
        for (let i = 0; i < WomenSize.womenList.length; i++) {
            if (WomenSize.womenList[i].colorCode === colorCode || WomenSize.womenList[i].clubCode === clubCode) {
                WomenSize.womenList[i] = menEdit;
            }
        }
    }

    static findWomen(colorCode: number, clubCode: number): void {
        for (let i = 0; i < WomenSize.womenList.length; i++) {
            if (WomenSize.womenList[i].colorCode === colorCode || WomenSize.womenList[i].clubCode === clubCode) {
                console.table(WomenSize.womenList[i])
            }
        }
    }
}