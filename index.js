const menu =  [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9},
]

const cashInRegister = 100
const nextOrderId = 1
const orderQueque = []

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = {id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
    orderQueque.push(newOrder)
    return newOrder
}

function completeOrder(orderId) {
    const order = orderQueque.find(orderId => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({name: "Chicken Bacon Ranch", const: 12})
addNewPizza({name: "BBQ Chicken", const: 12})
addNewPizza({name: "Spicy Sausage", const: 11})

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu", menu)
console.log("Cash", cashInRegister)
console.log("Order queue", orderQueque)


