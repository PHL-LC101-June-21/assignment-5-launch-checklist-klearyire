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

   

    // check if any of the values are empty
    // if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty')
    // alert user that they need to fill out all the fields alert('message')
  // check if fuelLevelValue and cargoLevelValue are not numbers
    // alert the user that must enter valid input


    // set the list.style.visibility = 'visible'
  // get the pilot status, update the inner HTML to say `Pilot ${pilotValue} is ready for launch`
  // get the copilot status, update the inner HTML to say `CoPilot ${copilotValue} is ready for launch`
  // check if the fuel level is less 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the fuelStatus to "Fuel level too low for launch"

  // check if the cargo level is more than 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the cargoStatus to "Cargo level too high for launch"

    // if both fuel and cargo are good
      // change the launchStatus to "Shuttle is Ready for Launch" and color to green

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {

        // get the json from the response
        });

    return planetsReturned;
}

function pickPlanet(planets) {

    // randomly pick a planet from the array
  // Math random for index

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
