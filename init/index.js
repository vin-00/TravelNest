const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("Connection success");
})
.catch((err)=>{
    console.log("error : ",err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDb = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=> ({...obj, owner :"6556cda3f4ab2042fb7006ec"}));
    await Listing.insertMany(initData.data);
    console.log("data initialized");
}

initDb();