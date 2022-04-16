import { compare, genSalt, hash } from "bcrypt";



const generatePassword = async (password)=>{
    // 1. Generate the salt
    // 2. create hash using the data + salt

    const salt = await genSalt();    
    const hashedPassword = await hash(password,salt);
    console.log(password);
    return hashedPassword;
}

const verifyPassword = async(password,hash)=>{
    // 1. using the same salt generate the hash using user entered passowrd
    // 2. compare hash with the value stored in DB

    return compare(password,hash);

}

export {generatePassword,verifyPassword}
// (async()=>{
//     const hash = await generatePassword("test");
//     console.log(hash);
//     console.log(await verifyPassword("test",hash));
// })()



