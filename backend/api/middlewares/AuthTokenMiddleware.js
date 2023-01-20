const database = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthTokenMiddleware {
  static async authToken(req, res, next) {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Invalid token" });
    }

    token = token.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: "Invalid token" });
      }

      req.user = {
        email: decoded.email,
        id: decoded.id,
      };

      next();
    });
  }
}

module.exports = AuthTokenMiddleware;
