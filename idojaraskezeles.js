import * as readline from 'node:readline/promises';
import NapiIdojaras from './NapiIdojaras.js';
import fs from 'fs';


export async function miidojaras() {
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });



    const d = new Date();

    const answer1 = await rl.question('Adja meg a minimum homersekletet:');
    const answer2 = await rl.question('Adja meg a maximum homersekletet:');
    const answer3 = await rl.question('Adja meg a szoveges idojarast:');

    rl.close();


    const UjIdojaras = new NapiIdojaras(d.getDay(), answer2, answer1, answer3);

    console.log(UjIdojaras.toString());
    
    
}

export function beolvas(){

    const fajl = fs.readFileSync('idojaras.csv', 'utf-8');
    const sorok = fajl.trim().split("\n");

    const idojarasok = [];

    
    for(let i = 1; i < sorok.length; i++){
        const adatok = sorok[i].split(";");
        const idojaras = new NapiIdojaras(adatok[0], adatok[1], adatok[2], adatok[3]);
        idojarasok.push(idojaras);
    }

    return idojarasok;

}


