const express = require('express')
const dotenv = require ('dotenv')

dotenv.config()
const app = express();
app.listen(process.env.PORT, ()=> {
    console.log(`Tweeter is running on PORT ${process.env.PORT}!`)
})

app.get('/', (req,res)=>{
    console.log('Hello, welcome to Tweeter');
    res.send('Hello, welcome to Tweeter.')
})