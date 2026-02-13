class NapiIdojaras{
    constructor(hetNapja, MaxHomer, MinHomer, idojarasSzoveg){
        this.hetNapja = hetNapja;
        this.MaxHomer = MaxHomer;
        this.MinHomer = MinHomer;
        this.idojarasSzoveg = idojarasSzoveg;
    }

    toString(){
        return `Hét napja:${this.hetNapja}, Max hőmérséklet:${this.MaxHomer}, Min hőmérséklet:${this.MinHomer}, Szövegesen Időjárás:${this.idojarasSzoveg}`;
    }

}

export default NapiIdojaras;