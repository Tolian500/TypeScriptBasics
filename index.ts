type Food = string

let favouriteFood: Food = "pizza"

type Adress = {
    street: string,
    city: string,
    country: string
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean
    address?: Adress
}


let person:Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

let person2:Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

let ages:number[] = [100,101]

let people: Person[] = [person, person2]



function displayInfo(person) {
    console.log(`${person.name} lives at ${person.address.street}`)
}

displayInfo(person)