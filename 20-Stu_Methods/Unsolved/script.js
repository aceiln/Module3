var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.unshift('Canis Major');

console.log(constellations, 'constellations');

var planetspop = planets.pop();

console.log(planetspop, ' this is the pop of the planets after planets.pop')
console.log(planets, 'this is the planets variable after we called planetspop')

var galaxy = constellations.concat(planets);
console.log(galaxy)

console.log(star.toUpperCase());

function add(x,y){
    return x+y;
}
var three = add(1,2)
console.log(three)