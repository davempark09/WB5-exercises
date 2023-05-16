let menu = [
    [
    {item: "Sausage and Egg Biscuit", price: 3.69},
    {item: "Bacon and Egg Biscuit", price: 3.49},
    {item: "Ham and Egg Biscuit", price: 3.29},
    ],
    [ 
    {item: 'Pizza', price:2.50},
    {item: 'Chinese', price:7.99},
    {item: 'Chicken', price:6.99},
    {item: 'Burger', price:3.50},
    ],
    [ 
    {item: 'Meatloaf', price:12.00},
    {item: 'Pasta', price:8.50},
    {item: 'Sandwich', price:6.75},
    {item: 'Soup', price:3.99},
    {item: 'Fruits', price:2.00},
    ],
]

let meal = Math.floor(Math.random()*3)
let food = mealType => {
    switch(mealType) {
        case 0: menu[0].forEach(mealList => console.log(`${mealList.item} is available for $${mealList.price.toFixed(2)}`)); break
        case 1: menu[1].forEach(mealList => console.log(`${mealList.item} is available for $${mealList.price.toFixed(2)}`)); break
        case 2: menu[2].forEach(mealList => console.log(`${mealList.item} is available for $${mealList.price.toFixed(2)}`)); break
        default: console.log('There\'s been an error'); 
    }
}
food(meal)