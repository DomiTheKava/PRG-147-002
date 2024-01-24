// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Domi";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Dominik",
        lastName = "Penkava";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Dominik";
    var name2 = "Jude";
    document.getElementById("first").innerHTML = name2;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    var firstName = "Dominik",
        lastName = "Penkava";
    const taxRate = .08;
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    document.getElementById("new-tax").innerHTML = taxRate;
}


function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    var dog2 = "Nessie";
    // dog2 = "Nessie";
    let dog3 = "Paisley";
    // let dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "John";
    document.getElementById("dog1-2").innerHTML = dog2;
}


function constants() {
    // fix the errors
    const PI = 3.14;
    let dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    document.getElementById("pi").innerHTML = PI;
    dogs = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("breeds").innerHTML = dogs;
    
}


function math() {
    // create statements demonstrating the use of each operator
    let add = 1 + 2;
    document.getElementById("addition").innerHTML = "1 + 2 = " + add;

    let subtract = 10 - 2;
    document.getElementById("subtraction").innerHTML = "10 - 2 = " + subtract;

    let multiply = 10 * 2;
    document.getElementById("multiplication").innerHTML = "10 * 2 = " + multiply;

    let exponent = 10 ** 2;
    document.getElementById("exponent").innerHTML = "10 ** 2 = " + exponent;

    let divide = 10 / 2;
    document.getElementById("division").innerHTML = "10 / 2 = " + divide;

    let modulus = 10 % 2;
    document.getElementById("modulus").innerHTML = "10 % 2 = " + modulus;

    let increment = 10;
    increment++;
    document.getElementById("increment").innerHTML = "10++ = " + increment;

    let decrement = 10;
    decrement--;
    document.getElementById("decrement").innerHTML = "10-- = " + decrement;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10;
    document.getElementById("equals").innerHTML = "x = 10" + "x = " + x;
    document.getElementById("plus-equals").innerHTML = "x += 1 = " + (x += 1);
    document.getElementById("minus-equals").innerHTML = "x -= 1 = " + (x -= 1);
    document.getElementById("times-equals").innerHTML = "x *= 2 = " + (x *= 2);
    document.getElementById("divide-equals").innerHTML = "x /= 3 = " + (x /= 3);
    document.getElementById("modulus-equals").innerHTML = "x %= 3 = " + (x %= 1);
}


function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const person = {firstName:"Dominik", lastName:"Penkava"};
    document.getElementById("array").innerHTML = person.firstName + " " + person.lastName

    const myCar = ["Ford", "Focus", "2014"];
    document.getElementById("object").innerHTML = myCar[0] + " " + myCar[1] + " " + myCar[2] 

}
