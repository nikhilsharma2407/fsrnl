import mongoose from "mongoose";
import { DB_URL } from "./constants";


(async ()=>{try {
    await mongoose.connect(DB_URL);
    console.log("connected successfully");
    
  } catch (error) {
    console.error(error);
  }
})();


