// Dog objects
const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket."
};

const dog2 = {
    heading: "Golden Dog",
    image: "images/gold-dog.jpg",
    caption: "Just Chilling in the grass",
    altTag: "Yellow dog hanging out in grass."
};

const dog3 = {
    heading: "Snowman Dog",
    image: "images/snow-dog.jpg",
    caption: "Clay dog holding a stick by a snowman.",
    altTag: "Clay dog holding a stick by a snowman."
};

const dog4 = {
    heading: "White Dogs",
    image: "images/white-dogs.jpg",
    caption: "Small white dog next to big white dog",
    altTag: "Small white dog next to big white dog."
};

function loadDog(dogID) {
    if (dogID == 1) {
        displayDog(dog1, 1);
    } else if (dogID == 2) {
        displayDog(dog2, 2);
    }
    else if (dogID == 3) {
        displayDog(dog3, 3);
    }
    else if (dogID == 4) {
        displayDog(dog4, 4);
    };
}

function displayDog(dog, id) {
    if (document.getElementById("img" + id).style.display == "block")
    {
        document.getElementById("img" + id).style.display = "none";
        document.getElementById("p" + id).style.display = "none";
        document.getElementById("heading" + id).style.display = "none";
    } else {
        document.getElementById("p" + id).style.display = "block";
        document.getElementById("heading" + id).style.display = "block";

        document.getElementById("heading" + id).innerHTML = dog.heading;
        document.getElementById("img" + id).src = dog.image;
        document.getElementById("img" + id).style.display = "block";
        document.getElementById("p" + id).innerHTML = dog.caption;
        document.getElementById("img" + id).setAttribute("alt", dog.altTag)
    };

}