let num = prompt("Enter a number: ");

document.getElementById("count-el").innerText = num;

function myLength() {
    let feet = num * 3.28084
    let meter = num * 0.3048
    document.getElementById("length-el").innerText = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters`;
}

function myVolume() {
    let liter = num * 0.2642;
    let gallon = num * 3.785;
    document.getElementById("volume-el").innerText = `${num} liters = ${gallon} gallons | ${num} gallons = ${num} liters`   
}

function myMass() {
    let kilo = num * 2.2046;
    let pounds = num * 0.4536;
    document.getElementById("mass-el").innerText = `${num} kilograms = ${pounds} pounds | ${num} pounds = ${num} kilograms`;
}


myLength();
myVolume();
myMass();
