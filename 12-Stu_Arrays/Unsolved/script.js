// WRITE YOUR CODE HERE
var andrews = ['Andrew', 'TheRoo', 'Nerd', 'Cutie'];

console.log(andrews.length);
console.log(andrews)
console.log('welcome home ' + andrews[0]);
console.log('welcome home ' + andrews[1]);
console.log('welcome home ' + andrews[2]);
console.log('welcome home ' + andrews[3]);

var TheRoo = andrews[1];

andrews[1]='My love'
console.log(andrews);

if(andrews[1] !== TheRoo) {
    console.log('Found a better name; ' + andrews[1])
}