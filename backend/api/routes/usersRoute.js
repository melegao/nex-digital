const { Router } = require("express");
const UserController = require("../controllers/UserController");

const router = Router();

router.get("/users", UserController.getAllUsers);
router.get("/users/:id", UserController.getUser);
router.post("/users", UserController.createUser);
router.patch("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;
