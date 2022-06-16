const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./src/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/graphql/schema')
const path = require.apply('path')
const { authenticate } = require('./src/middleware/auth')
dotenv.config();
const cookieParser = require('cookie-parser')

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

app.use(express.urlencoded({extended:true}))

require('./src/routes')(app)

app.set('view engine','ejs')
connectDB();
app.use(cookieParser())
app.use(authenticate);
app.use('/graphql',grapqlHTTP({schema,graphiql:true}))
app.set('views', path.join(__dirname, '/src/templates/views'))

const app = express();
app.listen(process.env.PORT,()=>{

});