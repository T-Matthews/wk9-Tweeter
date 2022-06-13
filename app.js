const express = require('express');

const app = express();
const port = 3000;
app.listen(port,()=>{
console.log('Hello Foxes')
});
app.set('view engine','ejs');
//routes
app.get('/', (req,res)=>{
    res.send('Hello Foxes')
    res.render('pages/home')

})
app.get('/login', (req,res)=>{
    //res.send('Hello Foxes')
    res.render('pages/login')

})
app.get('/profile/', (req,res)=>{
    //res.send('Hello Foxes')
    res.render('pages/profile')

})
app.get('/register', (req,res)=>{
    //res.send('Hello Foxes')
    res.render('pages/register')

})
app.get('/user', (req,res)=>{
    //res.send('Hello Foxes')
    res.render('pages/user')

})