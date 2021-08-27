// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}"></img>
                `
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let h2 = document.getElementById("launchStatus");

   //cargo and fuel not ready
   if (cargoLevel > 10000 && fuelLevel < 10000) {
        list.style.visibility = "visible";
        h2.style.color = "rgb(199, 37, 78)";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        pilotStatus = `Pilot ${pilot.pilotName} is ready for launch`;
        copilotStatus = `CoPilot ${copilot.copilotName} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";

   //cargo ready, fuel not ready    
   } else if (cargoLevel <= 10000 && fuelLevel < 10000) {
        list.style.visibility = "visible";
        h2.style.color = "rgb(199, 37, 78)";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        pilotStatus = `Pilot ${pilot.pilotName} is ready for launch`;
        copilotStatus = `CoPilot ${copilot.copilotName} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";

   //cargo not ready, fuel ready 
   } else if (cargoLevel > 10000 && fuelLevel >= 10000) {
        list.style.visibility = "visible";
        h2.style.color = "rgb(199, 37, 78)";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        pilotStatus = `Pilot ${pilot.pilotName} is ready for launch`;
        copilotStatus = `CoPilot ${copilot.copilotName} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";

   //cargo and fuel both ready, good for launch 
   } else if (cargoLevel <= 10000 && fuelLevel >= 10000) {
        list.style.visibility = "visible";
        h2.style.color = "rgb(65, 159, 106)";
        h2.innerHTML = "Shuttle is Ready for Launch";
        pilotStatus = `Pilot ${pilot.pilotName} is ready for launch`;
        copilotStatus = `CoPilot ${copilot.copilotName} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
   }
}

async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
    return response.json();
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    let chosenPlanet = planets[index];
    return chosenPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
