let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream -Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}];

// Write code that searches the cart array using the map() function to return only the item name and then use forEach() to display the list of items
cart.map(goods => goods.item).forEach(input => console.log(input))

// Write code determines the total cost of everything in the cart using reduce(). 
// In the reducer function, remember to account for the possibility of there being more than 1 unit (ex: 5 apples rather than 1)!
console.log(cart.reduce((currentTotal, goods) => currentTotal + (goods.quantity*goods.price),0))

// Revisit your code from step one. Can you sort the list before you display
cart.map(goods => goods.item).sort().forEach(input => console.log(input))

