import { Request, Response } from "express";
import { Market } from "../../model/Market";

interface BodyData {
    tokenId : Number;
    name : String;
    description : String;
    ipfsUrl : String;
    price : Number;
    sig ?: String;
    signer ?: String;
    saleState : Boolean;
}

export const onSale_lazyMinting = (req : Request, res : Response) => {
    // @ Request Data;
    const { tokenId, name, description, ipfsUrl, price, sig, signer } : BodyData = req.body;
    
    // @ Exceptions;
    if(!name && !description && !ipfsUrl && !price) {
        return res.status(400).json({ err : "ERR : Basic Information is Required" });
    }

    if(!sig && !signer) {
        return res.status(400).json({ err : "ERR : Signature & Signer is Required" });
    }

    // @ Insert Into DB;
    const onMarket = new Market ({
        tokenId,
        name,
        description,
        ipfsUrl,
        price,
        sig,
        signer,
        saleState : false
    })

    onMarket.save((err : any, result : BodyData) => {
        if(err) {
            return res.status(400).json({err});
        }
        res.status(201).json(result);
    })
}