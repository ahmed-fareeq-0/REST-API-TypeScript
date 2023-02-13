import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{type:String, required:true},
    price:{type:String, }
})

const ProductModel = mongoose.model("product", ProductSchema);
export default ProductModel;

