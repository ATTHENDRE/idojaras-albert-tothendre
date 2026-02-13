class NapiIdojaras{
    constructor(hetNapja, MaxHomer, MinHomer, idojarasSzoveg){
        this.hetNapja = hetNapja;
        this.MaxHomer = MaxHomer;
        this.MinHomer = MinHomer;
        this.idojarasSzoveg = idojarasSzoveg;

        if(this.hetNapja == 0){
            this.hetNapja = "Vasárnap";
        }
        else if(this.hetNapja == 1){
            this.hetNapja = "Hétfő";
        }
        else if(this.hetNapja == 2){
            this.hetNapja = "Kedd";
        }
        else if(this.hetNapja == 3){
            this.hetNapja = "Szerda";
        }
        else if(this.hetNapja == 4){
            this.hetNapja = "Csütörtök";
        }
        else if(this.hetNapja == 5){
            this.hetNapja = "Péntek";
        }
        else if(this.hetNapja == 6){
            this.hetNapja = "Szombat";
        }


    }

    toString(){
        return `Hét napja:${this.hetNapja}, Max hőmérséklet:${this.MaxHomer}, Min hőmérséklet:${this.MinHomer}, Szövegesen Időjárás:${this.idojarasSzoveg}`;
    }

}

export default NapiIdojaras;