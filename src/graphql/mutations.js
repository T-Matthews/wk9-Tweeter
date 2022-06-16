const { GraphQLString, GraphQLList, GraphQLNonNull, GraphQLObjectType,GraphQLInt } =require('graphql')
const { UserType,PostType } = require('.types')
const { User, Post} = require('../models')
const { createJwtToken} = require('../util/auth.js')

const register = {
    type: GraphQLString,
    args: {
        username: { type:GraphQLString},
        email: { type: GraphQLString},
        password: {type: GraphQLString}
        },
    async resolve(parent, args){
        //if email is arleady in use
        const checkUser = await User.findOne({email: args.email });
        if (checkUser){
            throw new Error("")
        }
        const {username, email, password } = args
        const user = new User ({ username, email, password });
        await user.save()
        let token=createJwtToken(user);
        return token
    }
}
const login = {
    type: GraphQLString,
    args: {
        email: { type: GraphQLString},
        password: { type: GraphQLString }
    },
    async resolve(parent, args){
        const user = await User.findOne({ email: args.email});
        if (!user || args.password !== user.password){
            throw new Error("Invalid Credentials");
        }
        //create their token, hand it to them to log in
        let token=createJwtToken(user);
        return token
    

    }
}


const createPost = {
    type: GraphQLString,
    args: {
        text: {GraphQLString},
        title: {type: GraphQLString},
        userId:{type: GraphQLString}
    },
    const post = new Post({
        title: args.title,
        text = args.text,
        userId = args.userId
    })
    post.save()

}
const submitPost = {
    type: GraphQLString,
    args: {

    }
}