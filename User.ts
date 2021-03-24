export default class User{

    private _geschlecht: number;
    private _vorname: string;
    private _nachname: string;
    private _strasse: string;
    private _plz: number;
    private _ort: string
    private _land: string;
    private _email: string;
    private _telnr: string;
    private _agb: boolean;
    private _payingMethod: number;


    constructor(geschlecht: number, vorname: string, nachname: string, strasse: string, plz: number, ort: string, land: string, email: string, telnr: string, agb: boolean, payingMethod: number) {
        this._geschlecht = geschlecht;
        this._vorname = vorname;
        this._nachname = nachname;
        this._strasse = strasse;
        this._plz = plz;
        this._ort = ort;
        this._land = land;
        this._email = email;
        this._telnr = telnr;
        this._agb = agb;
        this._payingMethod = payingMethod;
    }


    get geschlecht(): number {
        return this._geschlecht;
    }

    set geschlecht(value: number) {
        this._geschlecht = value;
    }

    get vorname(): string {
        return this._vorname;
    }

    set vorname(value: string) {
        this._vorname = value;
    }

    get nachname(): string {
        return this._nachname;
    }

    set nachname(value: string) {
        this._nachname = value;
    }

    get strasse(): string {
        return this._strasse;
    }

    set strasse(value: string) {
        this._strasse = value;
    }

    get plz(): number {
        return this._plz;
    }

    set plz(value: number) {
        this._plz = value;
    }

    get ort(): string {
        return this._ort;
    }

    set ort(value: string) {
        this._ort = value;
    }

    get land(): string {
        return this._land;
    }

    set land(value: string) {
        this._land = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get telnr(): string {
        return this._telnr;
    }

    set telnr(value: string) {
        this._telnr = value;
    }

    get agb(): boolean {
        return this._agb;
    }

    set agb(value: boolean) {
        this._agb = value;
    }

    get payingMethod(): number {
        return this._payingMethod;
    }

    set payingMethod(value: number) {
        this._payingMethod = value;
    }
}