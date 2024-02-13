
var total = 0
var foodTotal = 0
var dessertTotal = 0
var drinkTotal = 0

function sum() {

    total = 0;
    foodTotal = 0;
    dessertTotal = 0;
    drinkTotal = 0;

    document.getElementById("reciept").innerHTML = "";
    // Foods
    itemCheck("hamburger", "Hamburger", 10.99, "food");
    itemCheck("hotdog", "Hotdog", 8.49, "food");
    itemCheck("frenchFries", "FrenchFries", 4.99, "food");
    itemCheck("pizza", "Pizza", 12.99, "food");
    itemCheck("pasta", "Pasta", 9.99, "food");
    document.getElementById("reciept").appendChild(document.createElement("p")).innerHTML = "Food Total: $" + foodTotal;
    
    // Desserts
    itemCheck("cake", "Cake", 7.99, "dessert");
    itemCheck("icecream", "Ice-cream", 5.49, "dessert");
    itemCheck("cookies", "Cookies", 3.99, dessertTotal);
    itemCheck("pie", "Pie", 8.99, "dessert");
    itemCheck("pudding", "Pudding", 4.49, "dessert");
    document.getElementById("reciept").appendChild(document.createElement("p")).innerHTML = "Desserts Total: $" + dessertTotal;

    console.log(dessertTotal);
    // Drinks
    itemCheck("water", "Water", 1.99, "drink");
    itemCheck("coke", "Coke", 2.49, "drink");
    itemCheck("fanta", "Fanta", 2.29, "drink");
    itemCheck("drpepper", "Drpepper", 2.69, "drink");
    itemCheck("lemonade", "Lemonade", 2.99, "drink");
    document.getElementById("reciept").appendChild(document.createElement("p")).innerHTML = "Drinks Total: $" + drinkTotal;

    document.getElementById("reciept").appendChild(document.createElement("p")).innerHTML = "Total: $" + total;


    let name = document.getElementById("customerNameInput").value;
    var nameEl = document.createElement("p")
    nameEl.innerHTML = "Order Name: " + name
    document.getElementById("reciept").appendChild(nameEl)
}
// loop through and append item to the reciept div thingy
    function itemCheck(itemId, name, price, type) {
        var itemValue = document.getElementById(itemId).value;
        if (itemValue > 0) {

            let item = document.createElement("p");
            item.innerHTML = (name + ": " + document.getElementById(itemId).value);

            document.getElementById("reciept").appendChild(item);

            if (type == "drink") {
                drinkTotal += price * document.getElementById(itemId).value;
            } else if (type == "food") {
                foodTotal += price * document.getElementById(itemId).value;
            } else if (type == "dessert") {
                dessertTotal += price * document.getElementById(itemId).value;
                console.log(dessertTotal)
            } else {
                console.log("Error")
            }

            total += price * document.getElementById(itemId).value;

        }
    }