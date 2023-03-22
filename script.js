const cube = document.createElement("div");
cube.style.width = "100px";
cube.style.height = "100px";
cube.style.backgroundColor = "red";

const container = document.querySelector(".container");

container.appendChild(cube);

container.addEventListener("click", () => {
    if(cube.style.backgroundColor = "red"){
        cube.style.backgroundColor = "green"
    }else{
        cube.style.backgroundColor = "red"
    }
});


class Rectangle{
    constructor(width, height){
    this.width = width;
    this.height = height;
    }
}

const square = new Rectangle(10, 10);
console.log(square);


let a = { a: 2, b: 5};
let b = { a: 2, b: 5};


console.log(a === b);


function Phone(manufactorer, model, year){
    this.manufactorer = manufactorer;
    this.model = model;
    this.year = year;
    this.ring = function(){
        console.log(`${this.model} is ringing`);
    }
}

const Iphone = new Phone("Apple", "Iphone 13 pro", 2019);
Iphone.ring();
console.log(Iphone);

let c = 0;
const id = setInterval(()=> {
    c++;
    console.log(c);
}, 1000);

setTimeout(()=>{
    clearInterval(id);
}, 7000);


