
const numbers = [25, 25, 65, 78, 58];

const student = {
    name: 'sakib khan',
    age: 32,
    movies:['king khan','panku jamai','rongbazz']
}
// template string
const about = `my name is ${student.name} age of${student.age} has number${numbers[2]} also like movoes${student.movies[2]}`;
console.log(about);

// arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spred operator
const newNumbers =[...numbers];
numbers.push(98);
numbers.push(98);
numbers.push(98);
numbers.push(98);


//create a new array from an older array and add an elemetn

const newNumber = [...numbers, 25];
console.log(numbers);
console.log(newNumbers);
console.log(newNumber);