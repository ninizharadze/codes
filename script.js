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