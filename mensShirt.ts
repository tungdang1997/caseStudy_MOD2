import {AdultShirt} from "./adultShirt";
import {FootballShirt} from "./foodballShirt";



export class MensShirt extends AdultShirt{
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

export class MenSize {
    static menList: FootballShirt[] = [];

    static addMen(FoodballShirt: FootballShirt): void{
        MenSize.menList.push(FoodballShirt);
    }

    static displayMen(): void {
        for (const menList of MenSize.menList){
            console.table(menList);
        }
    }

    static deleteMen(clubCode: number, colorCode: number): void {
        for (let i = 0; i < MenSize.menList.length; i++) {
            if (MenSize.menList[i].colorCode === colorCode || MenSize.menList[i].clubCode === clubCode) {
                MenSize.menList.splice(i, 1);
            }
        }

    }

    static editMen(colorCode: number, clubCode: number, menEdit: MensShirt): void {
        for (let i = 0; i < MenSize.menList.length; i++) {
            if (MenSize.menList[i].colorCode === colorCode || MenSize.menList[i].clubCode === clubCode) {
                MenSize.menList[i] = menEdit;
            }
        }
    }

    static findMen(colorCode: number, clubCode: number): void {
        for (let i = 0; i < MenSize.menList.length; i++) {
            if (MenSize.menList[i].colorCode === colorCode || MenSize.menList[i].clubCode === clubCode) {
                console.table(MenSize.menList[i])
            }
        }
    }
}