const database = require("../models");
const bcrypt = require("bcryptjs");

class UserService {
  static async getAllUsersService(res) {
    try {
      const allUsers = await database.Users.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getUserService(id, res) {
    try {
      const user = await database.Users.findOne({
        where: { id: Number(id) },
        attributes: { exclude: ["password"] },
      });
      if (!user) {
        return res.status(400).json({ message: "User not found!" });
      } else {
        return res.status(200).json(user);
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createUserService(newUser, res) {
    try {
      const [user, created] = await database.Users.findOrCreate({
        where: { email: newUser.email },
        defaults: {
          name: newUser.name,
          email: newUser.email,
          password: bcrypt.hashSync(newUser.password, 10),
        },
      });
      if (created) {
        const createdUser = await database.Users.findOne({
          where: { email: newUser.email },
          attributes: { exclude: ["password"] },
        });
        return res.status(201).json(createdUser);
      } else {
        return res.status(400).json({ message: "User already registered!" });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateUserService(id, updateUser, res) {
    try {
      await database.Users.update(updateUser, { where: { id: Number(id) } });
      const updatedUser = await database.Users.findOne({
        where: { id: Number(id) },
        attributes: { exclude: ["password"] },
      });
      if (updatedUser === null) {
        return res.status(400).json({ message: "User not found!" });
      } else {
        return res.status(200).json(updatedUser);
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteUserService(id, res) {
    try {
      const deletedUser = await database.Users.destroy({
        where: { id: Number(id) },
      });
      if (deletedUser) {
        return res.status(200).json({ message: "User deleted with success!" });
      } else {
        return res.status(400).json({ message: "User not found!" });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UserService;
