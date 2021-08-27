// Write your JavaScript code here!
//{ myFetch, pickPlanet, addDestinationInfo, formSubmission }
// const = require("./scriptHelper");

window.addEventListener("load", function() {
    const document = window.document;
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoMass]");
    const list = document.getElementById("faultyItems");

    list.style.visibility = "hidden";

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {

        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);


        if (validateInput(pilot.value) === 'Empty' || validateInput(copilot.value) === 'Empty' || validateInput(fuelLevel.value) === 'Empty' || validateInput(cargoLevel.value) === 'Empty') {
            list.style.visibility = "hidden";
            alert("All fields must be filled out.");
            event.preventDefault();
        }

        if (validateInput(pilot.value) == "Is a Number" || validateInput(copilot.value) == "Is a Number") {
            list.style.visibility = "hidden";
            alert("Pilot and Co-pilot names cannot contain numbers.");
            event.preventDefault();
        }

        if (validateInput(fuelLevel.value) == "Not a Number" || validateInput(cargoLevel.value) == "Not a Number") {
            list.style.visibility = "hidden";
            alert("Fuel and Cargo fields must be numbers.");
            event.preventDefault();
        }
        event.preventDefault();
   })

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function() {
        console.log(listedPlanets);
        let pickedPlanet = pickPlanet(listedPlanets);
        const planet = pickPlanet(listedPlanets);
        addDestinationInfo(window.document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
    })
});