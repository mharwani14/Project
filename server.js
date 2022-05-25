console.log("hey ")
const  PORT=4000||process.env
const express=require('express')
const http=require('http')
const app=express();
app.use(express.json())
const Router=express.Router();
const routes=require("./Routes/routes");
app.use(routes);
const db=require("./db");
let data=[]
app.get("/getWeather/:id", (req,res)=>{
    console.debug(req.params);
    const id=req.params;
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/climate/month',
  params: {q: 'havana'},
  headers: {
    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
    'X-RapidAPI-Key': '265a8455b7mshec7b8b5129cb6d4p17b6cfjsn8afaba660744'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
    res.send(response.data)
}).catch(function (error) {
	console.error(error);
});
})
// app.post('/hello', (req, res)=> {
//     console.log(req.body)
    
//     const nam=req.body.name
//     const roll=req.body.rollNO;
//     const allempty=nam==""&&roll=="";
//     const allfilled=nam!=""&&roll!="";
//     const noname=nam==""&&roll!="";
//     const noroll=nam!=""&&roll=="";
//     if(noname){
//         res.status(400).send("enter name")
//     }
    
//     if (noroll){
//         res.status(400).send("enter roll")
//     }
    
//     if (allfilled){
//         res.status(200).send("Successfull entry ")
//         data.push(req.body)
//     }
//     if(allempty) {
//         res.status(400).send("Unsuccessful entry")
//     }
    
// })
app.listen(PORT, ()=>{
    console.log("hey  listening to " + PORT)

})
// app.get('/hello', (req, res)=>{
// obj ={
//     "status":200,
//     "msg": "Success"
// }
// res.status(200).json(data)
// })

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
