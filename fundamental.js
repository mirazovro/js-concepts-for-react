//1. how to declare a variable using let and const
const fatherNanme = 'abdus satter';
let season = 'rainy';
season = 'winter';

//2. condition
// 6 basics condition >, <, ===, !==, <=, >=
// multiple condition: &&, ||

if (fatherNanme === 'Satter' || season === 'rainy') {
    
} else if (fatherNanme === 'abdus satter') {
    
} else {
    
};

//3. array
// index
//length, push
const numbers = [25, 25, 65, 78, 58];
numbers[0] = 56;

//4. loop
for (let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}
//5. function:
function multiple(num1,num2) {
    const result = num1 * num2;
    return result;
}
const output = multiple(25, 45)

//6. object:
// 3 way to access property by name

const student = {
    name: 'sakib khan',
    age: 32,
    movies:['king khan','panku jamai','rongbazz']
}
const myVar = 'age';
console.log(student.age);// direct by property
console.log(student['age']);// direct acess via property name string
console.log(student[myVar]);// access via propery name in a variable