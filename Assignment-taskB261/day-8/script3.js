//Write a “person” class to hold all the details.

class Person
{
    constructor(firstName,lastName,age,gender,city)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.city = city;
    }
    showData()
    {
        console.log(`Name : ${this.firstName} ${this.lastName}`);
        console.log(`Age : ${this.age}`);
        console.log(`Gender : ${this.gender}`);
        console.log(`City : ${this.city}`);
    }
}

let obj1 = new Person("Alok","Mishra",23,"Male","Sirmaur");
let obj2 = new Person("Kartik","Panjla",21,"Male","Kangra");

obj1.showData();
console.log("------------------------------------")
obj2.showData();