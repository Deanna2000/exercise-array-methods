const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
const writePlanetsHeader = document.createElement("h1")
    writePlanetsHeader.textContent ="Planet Names"
    planetEl.appendChild(writePlanetsHeader)

planets.forEach(planetName => {
    const writePlanets = document.createElement("p")
    writePlanets.textContent = planetName
    writePlanets.id = "planets"
    planetEl.appendChild(writePlanets)

});


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

// const fragment = document.createDocumentFragment()
const writePlanetsCapsHeader = document.createElement("h1")
    writePlanetsCapsHeader.textContent ="Capitalized Planet Names"
    planetEl.appendChild(writePlanetsCapsHeader)
planetsCaps = planets.map(function (e) {
    const planCap = e.charAt(0).toUpperCase() + e.slice(1)
    const writeCapsPlanets = document.createElement("p")
    writeCapsPlanets.textContent = planCap
    planetEl.appendChild(writeCapsPlanets)
});



/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const writePlanetsWithEHeader = document.createElement("h1")
    writePlanetsWithEHeader.textContent ="Planet Names That Contain 'E'"
    planetEl.appendChild(writePlanetsWithEHeader)
planetsWithE = planets.filter(function (e) {
    const planE = e.includes('e')
    if (planE === true) {
    const writeEPlanets = document.createElement("p")
    writeEPlanets.textContent = e
    planetEl.appendChild(writeEPlanets)
}

});

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
