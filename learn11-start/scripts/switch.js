function calculate() {
    chi = '';
    myname = document.getElementById("fname").value;
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);
    year = parseInt(document.getElementById("year").value);

    console.log(myname + " " + date + " " + year)

    // round up to nearest month and year
    if (date > 15) {
        month += 1;
    }
    if (month >= 6) {
        year += 1;
    }

    console.log("rounded: " + myname + " " + date + " " + year)

    // year examples for reference
// 1961: Ox
// 1962: Tiger
// 1963: Rabbit
// 1964: Dragon
// 1965: Snake
// 1966: Horse
// 1967: Goat
// 1968: Monkey
// 1969: Rooster
// 1970: Dog
// 1971: Pig
// 1972: Rat

    year = Math.abs(year - 5) // calibrate it
    year = year % 12
    year = Math.round(year)

    console.log(year)

    switch (year) {
        case 0:
            chi = "Ox"
            break;
        case 1:
            chi = "Tiger"
            break;
        case 2:
            chi = "Rabbit"
            break;
        case 3:
            chi = "Dragon"
            break;
        case 4:
            chi = "Snake"
            break;
        case 5:
            chi = "Horse"
            break;
        case 6:
            chi = "Goat"
            break;
        case 7:
            chi = "Monkey"
            break;
        case 8:
            chi = "Rooster"
            break;
        case 9:
            chi = "Dog"
            break;
        case 10:
            chi = "Pig"
            break;
        case 11:
            chi = "Rat"
            break;
        default:
            chi = "Error! Sadface. :(";


    }
    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;


}