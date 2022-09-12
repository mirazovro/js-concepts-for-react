const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 60000, brand: 'apple', color: 'white'},
    {name: 'watch', price: 300, brand: 'casio', color: 'silver'},
    {name: 'sunglass', price: 250, brand: 'ray ban', color: 'black'},
    { name: 'camera', price: 3600, brand: 'nikon', color: 'yellow' },
]
//1. map
const brands = products.map(product => product.brand)
console.log(brands)

const names = products.map(product => product.name);
console.log(names);
// 2. forEach
products.forEach(product => console.log(product.color))

products.forEach(product => {
    console.log(product.price);
})

//3. filter
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

// filter with includes
const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

// 4. find
const special = products.find(product => product.name.includes('p'));
console.log(special);