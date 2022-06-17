const jwt = require('jsonwebtoken');

//define unprotected routes
const unprotectedRoutes = ["/auth/login","/auth/register","/graphql"];

const authenticate = async (req,res,next) =>{
    const token = req.cookies?.jwtToken || "";
    try {
        const verified = jwt.verify(token,process.env.JWT_SECRET)
        req.verifiedUser = verified;
        console.log("User vierification successful!", verified)
        next();
    }catch(e){
        console.log('User verification failed.');
        if (unprotectedRoutes.includes(req.path)){
            next();
        }else{
            res.redirect('/auth/login')
        }
    }
}

module.exports = authenticate