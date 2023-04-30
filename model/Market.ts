const mongoose = require("mongoose");

const marketSchema = mongoose.Schema({
    tokenId : {
        type : Number,
        default : null
    },
    name : {
        type : String,
        required: true,
    },
    description : {
        type : String,
        required: true,
    },
    ipfsUrl : {
        type : String,
        required: true,
    },
    price : {
        type : String,
        required: true,
        default : 0
    },
    signer : {
        type : String,
        default : null
    },
    sig : {
        type : String,
        default : null
    },
    saleState : {
        type : Boolean,
        default : false
    },
    buyer : {
        type : String,
        default : null
    }
})

export const Market = mongoose.model("Market", marketSchema);