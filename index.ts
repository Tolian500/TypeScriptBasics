export function getPizzaDetail(identyfier: number | string):Pizza | undefined{
    if (typeof identyfier === "string"){
        return menu.find(pizza => pizza.name.toLocaleLowerCase() === identyfier)

    } else if (typeof identyfier === 'number') {
        return menu.find(pizza => pizza.id === identyfier)

    } else {
        throw new TypeError("Parameter 'identifier' must be either a string or a number")
    }
}


type Pizza = {
    id: number
    name: string,
    price: number
}

type Status = "ordered" | "completed"

type Order = {
    id: number,
    pizza: Pizza,
    status: Status
}



let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1
const orderQueque:Order[] = []

const menu:Pizza[] =  [
    {id:nextPizzaId++, name: "Margherita", price: 8},
    {id:nextPizzaId++, name: "Pepperoni", price: 10},
    {id:nextPizzaId++, name: "Hawaiian", price: 10},
    {id:nextPizzaId++, name: "Veggie", price: 9},
]

function addNewPizza(pizzaObj:Omit<Pizza, "id">):Pizza {
    const newPizza: Pizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza)
    return newPizza
}

function placeOrder(pizzaName:string): undefined | Order {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza){
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder:Order = {id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
    orderQueque.push(newOrder)
    return newOrder
}

function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}

addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12})
addToArray<Order>(orderQueque, {id: nextOrderId++, pizza: menu[2], status: "completed"})


function completeOrder(orderId:number): undefined | Order {
    const order = orderQueque.find(orderId => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

addNewPizza({name: "Chicken Bacon Ranch", price: 12})
addNewPizza({name: "BBQ Chicken", price: 12})
addNewPizza({ame: "Spicy Sausage", price: 11})

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu", menu)
console.log("Cash", cashInRegister)
console.log("Order queue", orderQueque)