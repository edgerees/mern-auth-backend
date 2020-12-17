require("dotenv").config();
//passport startegy for authenticating with a JSON web token
//
const JwtStrategy=require("passport-jwt").Strategy;
const ExtractJwt=require("passport-jwt").ExtractJwt;

const options = {};
options.jwtFromrequest= ExtractJwt.fromAuthHeaderAsBearerToken();
//JWT_SECRET is inside of our enviroment;
options.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport)=>{
    passport.use(new JwtStrategy(options,(jwt_payload, done) =>{



    
    }))
}