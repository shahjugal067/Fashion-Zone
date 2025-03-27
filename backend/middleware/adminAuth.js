
import jwt from 'jsonwebtoken';

export const adminAuth = async (req, res, next) => {
    try {
        
        const {token} = req.headers
        if(!token){
            return res.json({success:false, message:"Token not found or unauthorized"});
        }
        const tokendecode = jwt.verify(token,process.env.JWT_SECRET);

        if(tokendecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false, message:"Token not found or unauthorized"});
        }
        next();
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Token not found in or server error"})
    }
};