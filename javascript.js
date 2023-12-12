//functions

// function myFunction(parameter1,parameter2){code block }
// myFunction(argument1,argument2)

// let a = function () {}

// function topla(sayi1,sayi2){
//     return sayi1 + sayi2 
// }
// console.log(topla(3,4))
// console.log(topla(7,9))
// console.log(topla(7,11))

// function toCelcius(fahrenheit){
//     return fahrenheit + " fahrenheit = " + ((5/9) * (fahrenheit - 32)) + " celcius'dur" 
// }
// console.log(toCelcius(126))

// function person2(){
//     const person = {
//         firstName: "Mustafa",
//         lastName: "Önal",
//     age: 50,
//     eyeColor: "blue"
// };
// console.log(person.firstName)
// console.log(person["firstName"])
// }

// person2();

function person3(firstName,lastName,age,eyeColor){
    const personInfo = {
        firstNameValue: firstName,
        lastNameValue: lastName,
        ageValue: age,
        eyeColorValue: eyeColor
    }
    console.log(personInfo)
}

person3("ahmet","çelik",23,"brown")
person3("ayşe","yılmaz",23,"black")

const person = {
    firstName: "Mustafa",
    lastName: "Önal",
    age: 50,
    eyeColor: "blue",
    fullName: function fullNameFunc() {return this.firstName + " " + this.lastName}
};
console.log(person.firstName)
console.log(person["firstName"])
console.log(person.fullName())

