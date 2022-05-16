console.log("hey ")
const  PORT=4000
const express=require('express')
const app=express();
app.listen(PORT, ()=>{
    console.log("hey im listening to " + PORT)
})
