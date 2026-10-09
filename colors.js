// Selecting all of the elements
const boxes = document.querySelectorAll(".box");
const generate = document.getElementById("generate");

const redLabel = document.getElementById("red-label")
const greenLabel = document.getElementById("green-label")
const blueLabel = document.getElementById("blue-label")

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const preview = document.getElementById("preview-area");
const save = document.getElementById("save-color");
const table = document.getElementById("color-table");

// Generate random colors
function randomNumber() {
    return Math.floor(Math.random() * 256);
}

generate.addEventListener("click", function() {
    boxes.forEach(function(box) {
        const r = randomNumber();
        const g = randomNumber();
        const b = randomNumber();

        const color = `rgb(${r},${g},${b})`;
        box.style.backgroundColor = color;
    })
})

// Add the colors to the grid by double clicking
boxes.forEach(function(box) {
    box.addEventListener("dblclick", function(event) {
        const color = event.target.style.backgroundColor;
        saveToTable(color);
    })
})

// Use the slider
function updatePreview() {

    console.log("slider works")
    const r = red.value;
    const g = green.value;
    const b = blue.value;

    redLabel.textContent = `Red (${r})`;
    greenLabel.textContent = `Green (${g})`;
    blueLabel.textContent = `Blue (${b})`;

    const color = `rgb(${r}, ${g}, ${b})`;
    preview.style.backgroundColor = color;
}

red.addEventListener("input", updatePreview);
green.addEventListener("input", updatePreview);
blue.addEventListener("input", updatePreview)

// Save the color
save.addEventListener("click", function (){
    const r = red.value;
    const g = green.value;
    const b = blue.value;

    const color = `rgb(${r}, ${g}, ${b})`;
    saveToTable(color);
})

// Function to save the color to the table
function saveToTable(color) {

    const row = document.createElement("tr");
    
    const valueCell = document.createElement("td");
    valueCell.textContent = color;

    const colorCell = document.createElement("td");
    colorCell.classList.add("color-cell");
    colorCell.style.backgroundColor = color;

    row.appendChild(valueCell);
    row.appendChild(colorCell);

    table.appendChild(row);

}