type User = {
    id: number,
    username: string,
    role:"guest" | "member" | "admin" | "contributor";
}

type UpdatedUser = Partial<User>
let nextUserId = 1

const users: User[] = [
    {id: nextUserId++, username: "john_doe", role: "member"},
    {id: nextUserId++, username: "john_smith", role: "contributor"}

]

function updateUser(id: number, updates: any) {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.error("User not found!");
    return;
  }
  Object.assign(foundUser, updates)
}

function addNewUser(newUser:Omit<User, "id" | "user">):User {
    const user: User = {
        id: nextOrderId++,
        ...newUser
    }
    users.push(user)
    return user
}

updateUser(1, {username: "new_john_doe"});
updateUser(4, {role: "contributor"});

addNewUser({username: "new_schmoe", role: "member"})


let myName = "Bob";
const myName2 = "Bob";

type Food = string;

let favouriteFood: Food = "pizza";

type Adress = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Adress;
};

let person: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: {
    street: "123 Main",
    city: "Anytown",
    country: "USA",
  },
};

let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false,
  address: {
    street: "123 Main",
    city: "Anytown",
    country: "USA",
  },
};

let ages: number[] = [100, 101];

let people: Person[] = [person, person2];

function displayInfo(person) {
  console.log(`${person.name} lives at ${person.address.street}`);
}

displayInfo(person);
