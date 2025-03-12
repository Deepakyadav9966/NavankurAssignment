const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET= process.env.JWT_SECRET;

const authenticate = (req, res, next) =>{
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log("Decoded Token:", decoded);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res.status(400).json({ message: "Invalid or expired token" });
    }    
}

module.exports = authenticate;