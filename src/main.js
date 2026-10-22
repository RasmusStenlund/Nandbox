const gates = {
    AND: {
        width: 70,
        height: 40,
        path: "M 10 0 H 40 A 20 20 0 0 1 40 40 H 10 Z",
        pins: {
            in1: {x: 0, y: 10},
            in2: {x: 0, y: 30},
            out: {x: 70, y: 20},
        },
    }
}

const addGate = document.querySelector("#add-gate");
const gateContainer = document.querySelector("#gate-container");

function createGate(tag, gateType) {
    const gate = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gate.setAttribute("transform", "translate(50, 50)");
    const gatePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    gatePath.setAttribute("d", gates[gateType].path);
    gate.appendChild(gatePath);
    for (const [pinName, pin] of Object.entries(gates[gateType].pins)) {
        const pinCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        pinCircle.setAttribute("cx", `${pin.x}`);
        pinCircle.setAttribute("cy", `${pin.y}`);
        pinCircle.setAttribute("r", 3);
        gate.appendChild(pinCircle);
    }
    return gate;
}


addGate.addEventListener("click", () =>{
    const gate = createGate("g", "AND");

    gateContainer.appendChild(gate);

});