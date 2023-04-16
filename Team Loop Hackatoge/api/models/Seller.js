const mongoose = require("mongoose");
const SellerSchema = new mongoose.Schema({

    username:{
        type : String,
        required:true
    },
    shopname:{
        type : String,
        require:true
    },
    storeType:[],
    email:{
        type: String,
        required : true,
        unique:true
    },
    password:{
        type:String,
        reqiured:true,
        unique:true,
    },
    phone:{
        type:Number,
        reqiured:true,
        unique:true,
    },
    isAdmin:{
        type:Boolean,
        default:true
    },
    products:[],
    image:{
        type:String
    },
    location:{
        type:String,
        required:true,
    }


},{timestamps:true});

module.exports=mongoose.model("Seller",SellerSchema);