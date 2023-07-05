//WRITE YOUR CODE BELOW

var drink = {
    name: "orange juice",
    sugar: 2,
    isReady: false,
}

console.log(drink.name, drink.sugar,);

if(drink.isReady === true) {
    console.log(drink.name + ' with ' + drink.sugar + ' sugars' + ' is ready for pickup');
} else {
    console.log(drink.name + ' is still in order queue');
};