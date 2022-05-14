const arr = [[1],[2,[3,[4]],[5],[6],[7,8]]];
const exprectedResult = [1,2,3,4,5,6,7,8];

// flatten array;

const flattenArray = (arr)=>{
    let res = [];
    arr.forEach(element => {
        if (Array.isArray(element)){
            const temp = flattenArray(element);
            res = [...res,...temp]
        }else{
            res.push(element)
        }
    });
    return res;
}
console.log(flattenArray(arr));

// deepclone object

const user1 = {
    name:{
        firstName:"Nikhil",
        lastName:"Sharma"
    },
    id:123
}
arr = [1,2,3];
console.log(Object.keys({value:1}));
console.log(Object.keys());
// shallow copy
// const user2 = {...user1};
// user2.id = 567;
// user2.name.fullName = "Nikhil Sharma"; 
// console.log(user1);
// console.log(user2);
