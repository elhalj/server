import mongoose from "mongoose";

const uri = "mongodb+srv://wilsonikedakoffi7:Wilsonikedakoffi@1@cluster0.gfeo7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

class Database {
    constructor(){
        this._connect()
    }

    _connect(){
        mongoose.connect(uri)
            .then(() => {
                console.log("conneter a la base de donnee avec succes");
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
}

export default Database;