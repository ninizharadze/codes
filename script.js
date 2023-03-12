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



