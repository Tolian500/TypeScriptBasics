var favouriteFood = "pizza";
var person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
};
var person2 = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
};
function displayInfo(person) {
    console.log("".concat(person.name, " lives at ").concat(person.address.street));
}
displayInfo(person);
