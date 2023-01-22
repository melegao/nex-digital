const { compare } = require("bcryptjs");
const database = require("../models");
const jwt = require("jsonwebtoken");
const AuthService = require("../services/AuthService");
require("dotenv").config();

class AuthController {
  static async userAuthController(req, res) {
    const { email, password } = req.body;
    const token = await AuthService.userAuthService(email, password, res);
    return token;
  }
}

module.exports = AuthController;
