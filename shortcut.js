//truthy value: 'alam', 5, true, {}, []

// falsy value: '', 0, false, null, undefiend

// check truthy
let myVar = 5;

if (myVar) {
    myVar = myVar * 100;
} else {
    myVar = 0;
}

// check falsy

let myMoney = 50;
// you can check negetive or falsy anything
if (!myMoney) {
    
}
const money = 100;
let food;

if (money > 100) {
    food = 'biriany';
}
 else {
        food = 'cha biscuit'
}
 
//ternery

let food1 = money > 100 ? 'briyiani' : 'cha biscut';

console.log(food1);


let drinks = money > 100 && myVar > 25 ? 'coke' : 'filter pani';
console.log(drinks);

//number to string convert

const num1 = 53;
const num1Str = num1 + '';
console.log(num1Str, num1);

// string to number
// to convert string in a number just use + in front string variable
const num2Str = '456';
const num2 = +num2Str;
console.log(num2);


//
let isActive = true;

const showUser =()=>console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be excuted
isActive && showUser();

// use || if the left side is false then right side will be excuted

isActive || hideUser();

//toggle boolean

isActive = !isActive;