// Follow along with the examples here
function doNothing() {}
function sayHello(){
    console.log("hello!");
}

function sayHelloToGuadalupe() {
console.log("Hello, Guadalupe!");
}

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}

function sayHelloToSamip() {
    console.log("Hello, Samip");
}

function sayHelloTo(firstName) {
console.log(`Hello, ${firstName}!`);
}

function say(greeting, firstName){
    console.log(`${greeting}, ${firstName}!`);
}
 function add(x, y) {
    return x + y;
 }
function say(greeting, firstName){
    return(`${greeting}, ${firstName}!`);
}
function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
    
}
console.log(say("Howdy", "partner"));