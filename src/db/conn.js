const mongoose=require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017",{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Connection Successful..");
}).catch((err)=>{
    console.log(err);
})



