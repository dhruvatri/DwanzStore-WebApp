import mongoose from "mongoose";

export const Connection = async(user, pass) => {
    const URL = `mongodb+srv://${user}:${pass}@ecommerce-web.ymtdbnf.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;
    try{
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
    }
    catch(error)
    {
        console.log("Error in Database Connection ", error.message);
    }
}

export default Connection