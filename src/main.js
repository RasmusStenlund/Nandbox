const gates = {
    AND: {
        width: 50,
        height: 30,
        
    }
}

const addGate = document.querySelector("#add-gate");
const gateContainer = document.querySelector("#gate-container");

var rectangle_x = 10;

addGate.addEventListener("click", () =>{

    var type = "AND";

    const rectangle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect",
    );
    rectangle.setAttribute("x", rectangle_x);
    rectangle.setAttribute("y", 10);
    rectangle.setAttribute("width", 50);
    rectangle.setAttribute("height", 30);
    rectangle.setAttribute("fill", "green");
    gateContainer.appendChild(rectangle);
    rectangle_x += 60;
});