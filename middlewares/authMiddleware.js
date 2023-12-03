import JWT from "jsonwebtoken";
export const requireSignIn= async(req,res,next) => {
    try{
    const decode = JWT.verify(req.headers.authOrization,process.env.JWT_SECERT)
    next();
    }catch(error){
        console.log(error)
    }
}