// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
for (let b = 99; b > 0; b--) {
    console.log(b)
    document.getElementById("beer").innerHTML += `${b}. ${"Bottle of beer on the wall, " + b} bottles of beer. Take one down, pass it around, ${b - 1} bottles of beer on the wall.<br>`;
}


//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

for (m in months) { 
    console.log(months[m])
    document.getElementById("for-in").innerHTML += `${months[m]}<br>`;
}


// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
let str = "Stringed Cheese";
for (i of str) {
    console.log(i)
    document.getElementById("for-of").innerHTML += `${i}`;
}


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
let c = 0;
while (50 > c) {
    document.getElementById("while").innerHTML += c + ", "
    c++;
}