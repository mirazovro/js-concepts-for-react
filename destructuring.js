//1. array destructuring

const numbers = [525, 254];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [522, 456]

const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
console.log(boxify(58,94));

// const [first, second] = [58, 94];
const [first, second] = [boxify(58, 94)];

console.log(x, y);


const student = {
    name: 'sakib khan',
    age: 32,
    movies:['king khan','panku jamai','rongbazz']
}

const [firstMovie, secondMovie] = [student.movies];





//object destructuring
// const { name, age } = { name: 'miraz', age: 25 };
const { name, age } = {id:12, name: 'miraz', salary: 3400, age: 25
};

const employee = {
    name: 'raju',
    ide: 'vs code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html','css', 'js'],
    specification: {
        height: 59,
        weight: 65,
        adress: 'cumilla',
        drink: 'water',
        watch: {
            color: 'Red',
            price: 500,
            brand: 'ceilo'
        }
    }
}

const { html } = employee.languages[0];

const { machine, ide } = employee;

const { adress, drink } = employee.specification;
const { brand } = employee?.specification?.watch;
