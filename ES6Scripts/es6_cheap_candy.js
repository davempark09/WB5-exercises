let products = [
 {product: "Gummy Worms", price: 5.79},
 {product: "Plain M&Ms", price: 2.89},
 {product: "Peanut M&Ms", price: 2.89},
 {product: "Swedish Fish", price: 3.79},
]

// Which candies costs less than $4.00?
console.log(products.filter(item => item.price<4))

// Which candies has "M&M" its name?
console.log(products.filter(item => item.product.includes('M&Ms')))

// Do we carry "Swedish Fish"?
console.log(products.find(item => item.product === 'Swedish Fish'))