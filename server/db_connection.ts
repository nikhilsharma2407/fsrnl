import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;
(async ()=>{try {
    await mongoose.connect(DB_URL);
    console.log("connected successfully");
    
  } catch (error) {
    console.error(error);
  }
})();


