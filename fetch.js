//1. json=> stringify, parse

const student = {
    name: 'sakib khan',
    age: 32,
    movies:['king khan','panku jamai','rongbazz']
}
// stringify
const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson);

// parse
const studentObj = JSON.parse(studentJson);
console.log(studentObj);

//2. fetch

fetch('url')
    .then(res => res.json)
    .then(data => console.log(data));

//keys, values

const keys = Object.keys(student);
const values = Object.values(student);

//for

const numbers = [25, 26, 4865, 65];

numbers.forEach(num => console.log(num));
//array theke return korte caile map use korbo
numbers.map(num => num * 2);

//for of on array like object
//use for in on loop an object


// add or remove from an array

const products = [
    {name: 'laptop', price: 3200, brand: 'len', color: 'silver'},
    {name: 'phone', price: 60000, brand: 'samsu', color: 'white'},
    {name: 'watch', price: 300, brand: 'casio', color: 'silver'},
    {name: 'sunglass', price: 250, brand: 'ray ban', color: 'black'},
    { name: 'camera', price: 3600, brand: 'nik', color: 'yellow' },
]

const newProduct = { name: 'webcam', price: 450, brand: 'lal' }
//copy products array and then add newproducet

const newproducets = [...products, newProduct];

// create a new array without one specifice item
// remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);