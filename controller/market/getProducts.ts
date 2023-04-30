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

export const getPagingProducts = async (req : Request, res : Response) => {
    const limit : number = 12;
    const skip : string = req.params.page;
    const result : BodyData[] = await Market.find()
                    .sort({ "_id" : -1})
                    .limit(limit)
                    .skip(((Number(skip)-1) * limit));

    res.status(200).json(result);
}

export const getOneProducts = async (req : Request, res : Response) => {
    const result : BodyData[] = await Market.findById(req.params.id);
    res.status(200).json(result);
}

export const getSignedNft = async(req : Request, res : Response) => {
    const filter = { "signer" : req.params.id }

    await Market.find(filter)
                .sort({"_id" : -1})
                .exec((err : any, result : BodyData[]) => {
                    if(err) {
                        return res.status(400).json(err);
                    }
                    res.status(200).json(result);
                })
}
