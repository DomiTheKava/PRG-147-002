/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/

const games = ["Minecraft", "Bigfoot", "Starwars", "Subnautica", "Valheim"]

for (o of games) {
    document.getElementById("list").innerHTML += `<li>${o}</li>`
}

/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/

const set1 = new Set(["Wild World", "Cat's in the Cradle", "Get Back", "Spirit in the Sky", "Come Sail Away"])

set1.forEach(function(item) {
    document.getElementById("set1").innerHTML += `<li>${item}</li>`
})


// add two more songs to the set then display in the set2 paragraph

set1.add("Alive")
set1.add("Even Flow")

set1.forEach(function(item) {
    document.getElementById("set2").innerHTML += `<li>${item}</li>`
})




/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

// defaule tab names
const map1 = new Map([
    ["John Doe", "johndoe@example.com"],
    ["Jane Smith", "janesmith@example.com"],
    ["Bob Johnson", "bobjohnson@example.com"],
    ["Emily Davis", "emilydavis@example.com"],
    ["Michael Brown", "michaelbrown@example.com"]
])

map1.forEach(function(value, key) {
    document.getElementById("map1").innerHTML += `<li>${key}: ${value}</li>`
})

// add two new names and emails and display in map2 use the forEach() method

map1.set("David Wilson", "davidwilson@example.com")
map1.set("Sarah Connor", "sarahconnor@example.com")

map1.forEach(function(value, key) {
    document.getElementById("map2").innerHTML += `<li>${key}: ${value}</li>`
})


// get and display the email of one person, display in map3

const map3 = map1.get("John Doe")
document.getElementById("map3").innerHTML = map3