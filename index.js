import NapiIdojaras from "./NapiIdojaras.js";
import { miidojaras, beolvas } from "./idojaraskezeles.js";



const UjIdojaras = new NapiIdojaras(2, 30, 20, "Napos idő");

console.log(UjIdojaras.toString());

const mai = await miidojaras();
console.log(mai);

const idojarasok = beolvas();
console.log(idojarasok);





