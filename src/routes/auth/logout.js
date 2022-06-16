module.exports = (req,res) =>{
    console.log('Logout page rendering...')
    res.cookie('jwtToken', "", {maxAge: 900000, httpOnly:true})
    res.render('login');
}