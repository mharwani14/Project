console.log("hey ")
const  PORT=4000
const express=require('express')
const http=require('http')
const app=express();
app.use(express.json())
app.get('/hello', (req, res)=> {
    console.log(req.body)
    res.status(200).json(req.body)
})
app.listen(PORT, ()=>{
    console.log("hey  listening to " + PORT)
})
// app.post('/hello', (req, res)=> {
//     res.status(400).send("excuse me brother ")
// })
app.post('/hello', (req, res)=> {
    const jsonData=[{
        "name": 'Oscar',
        "rollNO":67
    },
    {
        "name":'Franklin',
        "rollNo":55
    },{}];
    res.status(200).json(jsonData)
})

// http.createServer((req, res)=>{
//     res.write("hey there")
//     res.end()
// }).listen(PORT)
