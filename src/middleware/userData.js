const axio = require('axios');
const { GraphQLID } = require('graphql');

const userData = async (req,res,next)=>{
    if (!req.verifiedUser){
        next();
        return;
    }
    const query = `query user ($id: ID!) {
        user ( id: $id ) {
            id,
            posts {
                id,
                title,
                description
            }
        }
    }`
    console.log(`Current user ID: ${req.verifiedUser.user._id}`)
    let data = {}
    try{
        data = await axios.post(process.env.GRPAHQL_ENDPOINT, {
            query,
            variables: {
                id: req.verifiedUser.user._id
            }
        });
    }catch(e) {
        console.log(e);
    }

    req.verifiedUser.user.posts=data.data.data.user.posts
    next()

}

module.exports = {userData}