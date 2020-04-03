document.querySelector('#title').innerHTML = "Pizza Emporium"
document.querySelector('#slogan').innerHTML = "Literal Objects"

//creating objects

const pizza = {
    crust: "thin",
    size: "small",
    topping: "pepperoni",
    buildPizza: function() {
        console.log('buildPizza method has been called')
        message = `We are now baking your ${pizza.size} pizza on ${pizza.crust} crust with ${pizza.topping} and cheese`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick') flour *= 2
        message = `You will need to purchase ${flour} cups of flour and 1 pound of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message;

        if (pizza.crust === 'thin') four = 1
        message = `You will need to purchase ${flour} cup of flour and 1 pound of ${pizza.topping}`
        document.querySelector('#feedback').textContent = message;

    }

}

// Crust Type 

document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')

document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

//Toppings Type

document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')

//Size Selection

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')

document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')


//Build Pizza Button

document.querySelector('#order').addEventListener('click', pizza.buildPizza)

//Shopping List Button
document.querySelector('#makeList').addEventListener('click', pizza.shoppingList)


let feedback = document.querySelector('#feedback')
