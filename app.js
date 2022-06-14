const express = require('express');

const app = express();
const port = 3000;
app.listen(port,()=>{

});
app.set('view engine','ejs');
//routes
app.get('/', (req,res)=>{
    
    res.render('pages/home')
    res.send('Hello Foxes')
})
console.log('Hello Foxes')
app.get('/login', (req,res)=>{
    res.render('pages/login')

})
app.get('/profile', (req,res)=>{
    res.render('pages/profile')

})
app.get('/register', (req,res)=>{
    res.render('pages/register')

})
app.get('/user', (req,res)=>{
    res.render('pages/user')

})