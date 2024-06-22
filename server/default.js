// To Enter Initial data

import { products } from "./constants/data.js";
import Product from "./model/product-schema.js"; 

const DefaultData = async() =>{
    try{
        await Product.insertMany(products);
        console.log("Data added Successfully");
    }
    catch(error)
    {
        console.log('Error While Inserting Default Data' , error.message);
    }
}

export default DefaultData