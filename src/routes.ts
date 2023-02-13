import { Express, Request, Response } from "express";
import ProductModel from "./model/product.model";
import log from "./logger";

export default function (app: Express) {
    app.post("/new-item", async (req:Request, res:Response) => {
        try{
            const {title, price} = req.body;
            if(!title && !price)
            return res.status(400).json({msg:"Not all fields have been entered"});

            const product = new ProductModel({
                title:title,
                price:price
            })

            const result = await product.save();
            res.json(result)
        }
        catch(err){
            res.status(500).json();
        }
        
    })

    app.put("/edit-item/:id", async (req:Request, res:Response) => {
        try{
            let result = await ProductModel.updateOne(
                { _id: req.params.id },
                { $set: req.body }
            )
            res.send(result);
        }
        catch(err) {
            log.info(err)
        }
    })

    app.delete("/delete-item/:id", async (req:Request, res:Response) => {
        try{
          let result = await ProductModel.deleteOne({_id: req.params.id});
          res.send(result);
        } 
        catch(err) {
          console.log(err);
        }
      })
}