const express=require("express");
const app=express();
const controllers=require("../controller/controller");
const Router=express.Router();
// router.get("/getItems", controller.getList())
// router.post("/createItem", controller.postList())
// Router.get("/test", (req, res)=>{
//     res.status(200).send("hey there")
// });
Router.get("/testData/:id", (req, res)=>{
    console.log(req.params)
    let n=req.params.id
    
    if (n%2==0){
        res.status(200).send("yours is even")
    }
    
        res.status(200).send("your no is odd")
    
    // res.status(200).send("hi from routes")
})
module.exports=Router;