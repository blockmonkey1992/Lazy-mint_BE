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

export const offSale = async (req : Request, res : Response) => {
    const _id : string = req.body._id;
    const update : { saleState : boolean, buyer : string }= { saleState : true, buyer : req.body.buyer };
    const updateResult : BodyData[] = await Market.findByIdAndUpdate(_id, update);

    if(!updateResult) {
        return res.status(410).json({ err : `ERR : Not Exist` });
    }

    res.status(200).json(updateResult);
}