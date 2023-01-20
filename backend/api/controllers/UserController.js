const database = require("../models");
const bcrypt = require("bcryptjs");
const UserService = require("../services/UserService");

class UserController {
  static async getAllUsersController(req, res) {
    const allUsers = await UserService.getAllUsersService(res);
    return allUsers;
  }

  static async getUserController(req, res) {
    const { id } = req.params;
    const user = await UserService.getUserService(id, res);
    return user;
  }

  static async createUserController(req, res) {
    const newUser = req.body;
    const createdUser = await UserService.createUserService(newUser, res);
    return createdUser;
  }

  static async updateUserControllerr(req, res) {
    const { id } = req.params;
    const updateUser = req.body;
    const updatedUser = await UserService.updateUserService(
      id,
      updateUser,
      res
    );
    return updatedUser;
  }

  static async deleteUserController(req, res) {
    const { id } = req.params;
    const deletedUser = await UserService.deleteUserService(id, res);
    return deletedUser;
  }
}

module.exports = UserController;
