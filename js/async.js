const fun1 = ()=>{
    console.log("Fun1");
}

const fun2 = (callback)=>{
    callback();
    console.log("fun2");
}


fun2(fun1);


console.log("1");
console.log("2");
console.log("3");
console.log("4");

let currentTime = new Date().getTime();
const endTime = currentTime + 10000 
console.log(1);
// simulating a netwrok request
while(currentTime!=endTime){
    currentTime = new Date().getTime();
}
// Async 


console.log(3);

console.log(1);
setTimeout(()=>{
    console.log(2);
},0)
console.log(3);
setTimeout(()=>{
    console.log(4);
},0);

const url = 'https://jsonplaceholder.typicode.com/users/1';


const data =fetch(url)
.then(response=>response.json()
.then(myData=>console.log(myData.username,myData.name,myData.email))).catch(err=>console.log(err.message));





promise.then(data=>console.log(data)).catch(err=>console.error(err));

try {
    console.log("abc");
    console.log(abc);
    
} catch (error) {
    console.log(error);
}
console.log(1/0);
console.log("xyz");

// async await



const promise = new Promise((resolve,reject)=>{
    resolve("Promise Resolved");
});

// const promiseReject = new Promise((resolve,reject)=>{
//     reject("Promise Reject");
// });



// promise.then(_=>console.log(_));


const data =fetch(url)
.then(response=>response.json()
.then(myData=>console.log(myData.username,myData.name,myData.email)))
.catch(err=>console.log(err.message));


const getUserData = ()=>{
    getData();
}

const getData = async()=>{
    const data = await fetch(url);
    console.log(data.ok);
    if(!data.ok){
        throw new Error(data);
    }else{
        const humanReadable = await data.json();
        console.log(humanReadable.name,humanReadable.email);    
    }
    
}


try {
    getData()
} catch (error) {
    console.log("something went wrong",error);
}



