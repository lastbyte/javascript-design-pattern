import VechileAdapter from "./src/adatper";

const apache_rtr_180 = VechileAdapter('bike' ,{weight : 160, wheels : 2, abs : true, gears : 5, clutch : true, maxSpeed : 180});
const skoda_kushaq = VechileAdapter('car' ,{weight : 1200, wheels : 4, powerStearing : true, gears : 5, clutch : true, maxSpeed : 185});

console.log(apache_rtr_180, skoda_kushaq);