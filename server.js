console.log("hey ")
const  PORT=4000
const express=require('express')
const http=require('http')
const app=express();
app.use(express.json())
let data=[]
app.post('/hello', (req, res)=> {
    console.log(req.body)
    
    const nam=req.body.name
    const roll=req.body.rollNO;
    const allempty=nam==""&&roll=="";
    const allfilled=nam!=""&&roll!="";
    const noname=nam==""&&roll!="";
    const noroll=nam!=""&&roll=="";
    if(noname){
        res.status(400).send("enter name")
    }
    
    if (noroll){
        res.status(400).send("enter roll")
    }
    
    if (allfilled){
        res.status(200).send("Successfull entry ")
        data.push(req.body)
    }
    if(allempty) {
        res.status(400).send("Unsuccessful entry")
    }
    
})
app.listen(PORT, ()=>{
    console.log("hey  listening to " + PORT)

})
app.get('/hello', (req, res)=>{
obj ={
    "status":200,
    "msg": "Success"
}
res.status(200).json(data)
})

// app.post('/hello', (req, res)=> {
//     res.status(400).send("excuse me brother ")
// })
// app.post('/hello', (req, res)=> {
//     const jsonData=[{
//         "name": 'Oscar',
//         "rollNO":67
//     },
//     {
//         "name":'Franklin',
//         "rollNo":55
//     },{}];
//     res.status(200).json(jsonData)
// })

// http.createServer((req, res)=>{
//     res.write("hey there")
//     res.end()
// }).listen(PORT)
