export class FootballShirt {

    private _colorCode: number;
    private _clubCode: number;


    constructor(colorCode: number, clubCode: number) {

        this._colorCode = colorCode;
        this._clubCode = clubCode;
    }

    get colorCode(): number {
        return this._colorCode;
    }

    set colorCode(colorCode: number) {
        this._colorCode = colorCode;
    }

    get clubCode(): number {
        return this._clubCode;
    }

    set clubCOde(clubCode: number) {
        this._clubCode = clubCode;
    }
}

