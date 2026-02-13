import NapiIdojaras from "./NapiIdojaras.js";
import { miidojaras, beolvas } from "./idojaraskezeles.js";



// //teszt1
// const UjIdojaras = new NapiIdojaras("Hétfő", 30, 20, "Napos idő");
// //teszt2
// const UjIdojaras2 = new NapiIdojaras("2", "nem", 15, "Felhős idő");
// //teszt3
// const UjIdojaras3 = new NapiIdojaras(4, 28, "igen", "Napos idő");
// //teszt4
// const UjIdojaras4 = new NapiIdojaras(5, 22, 12, "Esős idő");


// Rendesen működő példány 
const UjIdojaras5 = new NapiIdojaras(0, 26, 16, "Napos idő");

console.log(UjIdojaras5.toString());
// console.log(UjIdojaras2.toString(), "\n");
// console.log(UjIdojaras3.toString(), "\n");
// console.log(UjIdojaras4.toString(), "\n");
// console.log(UjIdojaras5.toString(), "\n");
const mai = await miidojaras();
console.log(mai);

const idojarasok = beolvas();
console.log(idojarasok);





