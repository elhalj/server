import { type } from "express/lib/response";
import mongoose from "mongoose";

const articleShema = new mongoose.Schema({
    nom:{
        type:String,
    },
    type:{
        type:String
    },
    categorie:{
        type:String
    },
    prix:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now(),
    },
})

const ArticleModel = mongoose.Model('Article',articleShema);
export default ArticleModel;