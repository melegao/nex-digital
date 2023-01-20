const database = require("../models");
const bcrypt = require("bcryptjs");

class UserController {
  static async getAllUsers(req, res) {
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

  static async getUser(req, res) {
    const { id } = req.params;
    try {
      const user = await database.Users.findOne({
        where: { id: Number(id) },
        attributes: { exclude: ["password"] },
      });
      if (user === null) {
        return res.status(400).json({ message: "User not found!" });
      } else {
        return res.status(200).json(user);
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createUser(req, res) {
    const newUser = req.body;
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

  static async updateUser(req, res) {
    const { id } = req.params;
    const updateUser = req.body;
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

  static async deleteUser(req, res) {
    const { id } = req.params;
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

module.exports = UserController;
