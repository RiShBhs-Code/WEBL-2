let currentLight = "red";

function updateLights() {
    document.getElementById("red-light").classList.remove("on");
    document.getElementById("yellow-light").classList.remove("on");
    document.getElementById("green-light").classList.remove("on");

    if (currentLight === "red") {
        document.getElementById("red-light").classList.add("on");
    } else if (currentLight === "yellow") {
        document.getElementById("yellow-light").classList.add("on");
    } else if (currentLight === "green") {
        document.getElementById("green-light").classList.add("on");
    }
}

function changeLight() {
    if (currentLight === "red") {
        currentLight = "green";
    } else if (currentLight === "green") {
        currentLight = "yellow";
    } else {
        currentLight = "red";
    }
    updateLights();
}

document.getElementById("change-btn").addEventListener("click", changeLight);
