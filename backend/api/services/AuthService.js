const { compare } = require("bcryptjs");
const database = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthService {
  static async userAuthService(email, password, res) {
    const account = await database.Users.findOne({
      where: { email: email },
    });

    if (!account) {
      return res.status(403).json({ message: "Invalid e-mail or password" });
    }

    const passwordMatch = await compare(password, account.password);

    if (!passwordMatch) {
      return res.status(403).json({ message: "Invalid e-mail or password" });
    }

    const token = jwt.sign(
      { id: account.id, email: account.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );

    return res.status(200).json(token);
  }
}

module.exports = AuthService;
