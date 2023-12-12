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





  


