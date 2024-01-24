function addDate() {
    var today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";

    document.getElementById("rooms").value = "1";
    document.getElementById("room2").style.display = "none";
    document.getElementById("room3").style.display = "none";
}

function estimate() {
    let name = document.getElementById("name").value;

    if (document.getElementById("rooms").value == "1") {
        
        let cost = estimateCost("rm1length", "rm1width", "rm1height")

        document.getElementById("estimate").innerHTML = (name + ", Your estimate: " + cost);
        document.getElementById("rm1cost").value = cost;

    }
    else if (document.getElementById("rooms").value == "2") {
        var totalCost = 0;
        var cost = estimateCost("rm1length", "rm1width", "rm1height")
        document.getElementById("rm1cost").value = cost;

        totalCost += cost

        cost = estimateCost("rm2length", "rm2width", "rm2height")
        document.getElementById("rm2cost").value = cost;

        totalCost += cost

        document.getElementById("estimate").innerHTML = (name + ", Your estimate: " + totalCost);

    }
    else if (document.getElementById("rooms").value == "3") {
        var totalCost = 0;
        var cost = estimateCost("rm1length", "rm1width", "rm1height")
        document.getElementById("rm1cost").value = cost;

        totalCost += cost

        cost = estimateCost("rm2length", "rm2width", "rm2height")
        document.getElementById("rm2cost").value = cost;

        totalCost += cost

        cost = estimateCost("rm3length", "rm3width", "rm3height")
        document.getElementById("rm3cost").value = cost;

        totalCost += cost

        document.getElementById("estimate").innerHTML = (name + ", Your estimate: " + totalCost);
    }

}

function show() {
    if (document.getElementById("rooms").value == "1") {
        document.getElementById("room2").style.display = "none";
        document.getElementById("room3").style.display = "none";
    }
    else if (document.getElementById("rooms").value == "2") {
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "none";
    }
    else if (document.getElementById("rooms").value == "3") {
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "block";
    }
}

function estimateCost(l, h, w) {
    let len = parseFloat(document.getElementById(l).value);
    let height = parseFloat(document.getElementById(h).value);
    let width = parseFloat(document.getElementById(w).value);

    let sqft = ((len * height * 2) + (len * width * 2));
    let cost = (sqft * 0.65)

    return cost
}