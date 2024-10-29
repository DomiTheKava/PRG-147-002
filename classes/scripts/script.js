class Person {
    constructor(name, birthMonth, birthDay, birthYear) {
        this.name = name;
        this.birthMonth = birthMonth;
        this.birthDay = birthDay;
        this.birthYear = birthYear;
    }

    getInfo() {
        return `Hello, my name is ${this.name}. I was born on ${this.birthMonth}/${this.birthDay}/${this.birthYear}.`;
    }
}

// alert("running script...")

const person1 = new Person('John Doe', 12, 15, 1990);
const person2 = new Person('Bob Doe', 7, 28, 2001);
const person3 = new Person('adison smith', 4, 12, 1970);
const person4 = new Person('bill johnson', 5, 18, 2010);

document.getElementById('person1').innerHTML = person1.getInfo();
document.getElementById('person2').innerHTML = person2.getInfo();
document.getElementById('person3').innerHTML = person3.getInfo();
document.getElementById('person4').innerHTML = person4.getInfo();

document.getElementById('extra').innerHTML += person1.name + ' ' + person1.birthDay + '/' + person1.birthMonth + '/' + person1.birthYear