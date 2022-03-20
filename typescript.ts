let myName:string = "Nikhil";
// string number boolean

// any
// myName = 123;


let myVar:any = 123;

myVar = "xyz";


console.log(myName);

let unionVar: string|number;

unionVar = 123;

unionVar = "xyz";

// unionVar = true;


interface User{
    name:string,
    email:string,
    age:number,
    id?:number
}

const user:User ={
    name:"abc",
    email:"abc@gmail.com",
    age:20,
}

const user1:User ={
    name:"abc",
    email:"abc@gmail.com",
    age:20,
    id:123
}

const add = (num1:number,num2:number):number =>{
    console.log(num1+num2);
    
    return num1+num2;
}


add(1,2);


// const addFn= (param1:myType, param2:myType):myType=>{

// }

// function addFn<T extends String|Number>(param1:T,param2:T):T{
function addFn<T extends String|Number>(param1:T,param2:T):T{
    return <any>param1+param2
}

addFn<number>(1,2);
addFn<string>("1",2);
// addFn<boolean>(true,false);


npx