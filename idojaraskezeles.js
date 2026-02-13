import * as readline from 'node:readline/promises';
import NapiIdojaras from './NapiIdojaras.js';
import fs from 'fs';


function miidojaras() {
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });



    const d = new Date();

    rl.question('Adj meg egy egész számot: ', (answer) => {answer = parseInt(answer)});
    rl.question('Adja meg a minimum homersekletet:', (answer1) => {answer1 = parseInt(answer1)});
    rl.question('Adja meg a maximum homersekletet:', (answer2) => {answer2 = parseInt(answer2)});
    rl.question('Adja meg a szoveges idojarast:', (answer3) => {answer3 = answer3.toString()});

    rl.close();

    const UjIdojaras = new NapiIdojaras(d.getDay(), answer2, answer1, answer3);

    console.log(UjIdojaras.toString());
    
    
}

function beolvas(){

    const fajl = fs.readFileSync('idojaras.csv', 'utf-8');
    const sorok = fajl.trim().split(";")

    const idojarasok = [];

    for(let i = 0; i < sorok.length; i++){
        const adatok = sorok[i].split("\n");
        const idojaras = new NapiIdojaras(adatok[0], adatok[1], adatok[2], adatok[3]);
        idojarasok.push(idojaras);
    }

    return idojarasok;

}

export default idojaraskezeles;