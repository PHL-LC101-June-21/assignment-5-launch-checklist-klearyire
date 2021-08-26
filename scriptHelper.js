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
        return "Not a number";
    } else {
        return "Is a number";
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
        h2.style.color = "red";
        h2.innerHTML = "Shuttle not ready for launch";
        pilotStatus = `Pilot ${pilot} is ready for launch`;
        copilotStatus = `CoPilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML = "Cargo level too high for launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";

   //cargo ready, fuel not ready    
   } else if (cargoLevel <= 10000 && fuelLevel < 10000) {
        list.style.visibility = "visible";
        h2.style.color = "red";
        h2.innerHTML = "Shuttle not ready for launch";
        pilotStatus = `Pilot ${pilot} is ready for launch`;
        copilotStatus = `CoPilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";

   //cargo not ready, fuel ready 
   } else if (cargoLevel > 10000 && fuelLevel >= 10000) {
        list.style.visibility = "visible";
        h2.style.color = "red";
        h2.innerHTML = "Shuttle not ready for launch";
        pilotStatus = `Pilot ${pilot} is ready for launch`;
        copilotStatus = `CoPilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML = "Cargo level too high for launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";

   //cargo and fuel both ready, good for launch 
   } else if (cargoLevel <= 10000 && fuelLevel >= 10000) {
        list.style.visibility = "visible";
        h2.style.color = "green";
        h2.innerHTML = "Shuttle is Ready for launch";
        pilotStatus = `Pilot ${pilot} is ready for launch`;
        copilotStatus = `CoPilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
   }
}
// async function myFetch() {
//     let planetsReturned;
//     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
//     // get the json from the response
//         });
//     return planetsReturned;
//}

async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
    return response.json();
    //console.log(data);
    //return data;
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
