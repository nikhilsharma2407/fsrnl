const userData = {};



const resolvers = {
    getUser:({username})=>{
        return userData[username];
    },
    createUser: ({input})=>{
        // UUID 
        const id =  new Date().getTime();
        const user = {...input,id};
        userData[input.username] = user;
        return user;
    }
}

module.exports = resolvers;