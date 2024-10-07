const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
};


function getMonthInfo() {
    var monthsString = ""

    for (var month in months) {
        monthsString += `${month}: ${months[month]}<br>`;

        console.log(month);

        let mn = parseInt(month)

        switch (mn) {
            case 1: monthsString += "New Year's Day, Martin Luther King Jr. Day<br>";
                break;
            case 2: monthsString += "Valentine's Day, Chinese New Year<br>";
                break;
            case 3: monthsString += "St. Patrick's Day, International Women's Day<br>";
                break;
            case 4: monthsString += "Easter, April Fools' Day<br>";
                break;
            case 5: monthsString += "Mother's Day, Memorial Day<br>";
                break;
            case 6: monthsString += "Father's Day, Juneteenth<br>";
                break;
            case 7: monthsString += "Independence Day, Bastille Day<br>";
                break;
            case 8: monthsString += "International Youth Day, Friendship Day<br>";
                break;
            case 9: monthsString += "Labor Day (USA), Mid-Autumn Festival<br>";
                break;
            case 10: monthsString += "Halloween, Oktoberfest<br>";
                break;
            case 11: monthsString += "Thanksgiving, Diwali<br>";
                break;
            case 12: monthsString += "Christmas, Hanukkah<br>";
                break;
            default: monthsString += "Error<br>";
        }

    }

    return monthsString;
}

document.getElementById("monthsInfo").innerHTML = getMonthInfo()