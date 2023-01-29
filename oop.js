class car{
    constructor(model, color, year){
        this.model = model;
        this.color = color;
        this.year = year;
    }
}
 
const elantra = new car("Gt", "white", 2012);
console.log(elantra);
console.log(elantra.year);