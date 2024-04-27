import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '15d'
    })

    res.cookie("jwt", token,{
        maxAge: 15*24*60*60*1000,//miliseconds
        httpOnly: true,  //prevent xss attack cross-site scripting attack
        sameSite: 'strict',//csrf attack cross-site request forgery attacks
        source: process.env. NODE_ENV !== "development",
    })
}