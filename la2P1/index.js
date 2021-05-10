const express = require('express');

const app = express();
const path = require('path')

app.use(express.urlencoded({extended:false}))

const port = 5000;

app.get('/',(req,res)=>{
    res.send('Hello ')
})


app.get('/covidForm',(req,res)=>{
    res.sendFile(path.join(__dirname+'/covidForm.html'))
})


app.post('/showData',(req,res)=>{
    console.log(req.body);
    res.send(req.body);

})

app.listen(port,()=>console.log('running on port 5000'))