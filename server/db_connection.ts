import mongoose from "mongoose";


(async ()=>{try {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log("connected successfully");
    
  } catch (error) {
    console.error(error);
  }
})();


