

for(var i=0;i<5;i++){
    console.log(i);
    // 0 1 2 3 4
}


// // // // // 5
console.log(i);

for(let i=0;i<5;i++){
    console.log(i);
}
// // // // gives error
console.log(i);

function doSomething(){
    let myName = "Nikhil Sharma";
    console.log(name);
};


var myFunction = function(){
    console.log(name);
    console.log(myName);
}

var arrowFn = ()=>{}

// console.log(address);
// Gives reference error

let i = 1;
i = 123;
const pi = 3.14;

const myName = "Nikhil";

// myName = "Nikhil Sharma";



// // // Basic Data Types 

// // // Number;

// // // 1, 2, 3 1.1,  2.99999

// // // string
let str = 'hello world!!!'

console.log(str);
// // // template strings

function sayHello(name){
    return `Hello ${name}`;
    // return "Hello " + name;

}

console.log(sayHello("Nikhil"));

let str1 = "Value of PI is "+pi + " area is pi*r*r "+ pi*2*2;
str1 = `Value of PI is ${pi} area is pi*r*r - ${pi*2*2}`
console.log(str1);

let myStr = 'nikhil';

myStr.toUpperCase();
myStr.toLowerCase();
// // // en-US =>  1,000,000
// // // en-IN => 10,00,000
myStr.toLocaleLowerCase();

// // // typecasting
const pi_str = "" + pi;
// // // invoking methods
// const pi_str = pi.toString();
console.log(pi);
console.log(pi_str);
const num = 100000000;
let num_str = num.toLocaleString("en-IN");
console.log(num_str);

console.log(str1.substring(6,8));
console.log(str1.substr(6,2));


// const arr = [1,2,"3",{name:"test"},5,6];

arr = [1,2,3,4,5];


console.log(arr.slice(1,4));
console.log(arr.splice(1,1));
arr.splice()
console.log(arr);

arr.push(6);
arr.unshift(0);

arr.pop();
arr.shift()

// // insert elements into arr at a given index
arr.splice(1,0,"a","b","c")
arr.splice(1,3)
console.log(arr);


for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


// // Callback function - passing the function as parameter;
// // es6 array methods like map filter reduce
// // promises, eventhandler, settimer async


function Intro(name,city) {
    return `Hello ${name} from ${city}`;    
}

let intro = (name,city)=>{
    return `Hello ${name} from ${city}`;    
}
intro = (name,city)=>`Hello ${name} from ${city}`;

multiplyBy2 = num => num*2;

arr.forEach((elem,index)=>console.log(elem,index));

let double = arr.map(elem=>elem*2);
console.log(double);

// // Boolean =. true/false
// // Truthy => 1, any string , any object
// // Falsy => 0, "", NaN, undefined, null



if(NaN){
    console.log("Truthy");
}
else{
    console.log("Falsy");
}


const even = arr.filter(elem=>!(elem%2));
console.log(even);

sum = arr.reduce((acc,elem)=>acc+elem);
const product = arr.reduce((acc,elem)=>acc*elem);
console.log(sum);
console.log(product);


const employee = {
    id:101,
    dept:"tech"
}

console.log(employee.id);
console.log(employee.dept);

console.log(Object.values(employee));
console.log(Object.keys(employee));

const arr = [1,2,3,4,5];

const [x,y,...rest] = arr;
// 1 2
console.log(x,y,rest);

let arr_copy = [...arr];
arr_copy[2] = "xyz";



console.log(arr);
console.log(arr_copy);

const emp1 = {
    id:101,
    dept:"tech"
}

const emp2 = {...emp1};

emp2.id = 102
console.log(emp1);
console.log(emp2);
// rest param


let sum = ( ...numbers)=>{

    console.log(name,numbers);

}

sum()

const fun = (a,b,...rest)=>{
    console.log(a,b,rest);
}

export default defaultFn = (name = "test")=>{
    console.log('Hello',name);
}
fun(1,2,3,4,5);

defaultFn();
