const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://mohitharwani0407:pxx7auloPLXCT0sH@cluster0.bus9c.mongodb.net/?retryWrites=true&w=majority").then((res)=>{
    console.log("db connected")
}).catch((e)=>{
    console.error("error in db", e.message)
})