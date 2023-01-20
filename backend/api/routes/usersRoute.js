const { Router } = require("express");
const UserController = require("../controllers/UserController");

const router = Router();

router.get("/users", UserController.getAllUsersController);
router.get("/users/:id", UserController.getUserController);
router.post("/users", UserController.createUserController);
router.patch("/users/:id", UserController.updateUserControllerr);
router.delete("/users/:id", UserController.deleteUserController);

module.exports = router;
