const { Router } = require("express");
const UserController = require("../controllers/UserController");
const AuthTokenMiddleware = require("../middlewares/AuthTokenMiddleware");
const UserOwnerMiddleware = require("../middlewares/UserOwnerMiddleware");

const router = Router();

router.get(
  "/users",
  AuthTokenMiddleware.authToken,
  UserController.getAllUsersController
);
router.get(
  "/users/:id",
  AuthTokenMiddleware.authToken,
  UserController.getUserController
);
router.post("/users", UserController.createUserController);
router.patch(
  "/users/:id",
  AuthTokenMiddleware.authToken,
  UserOwnerMiddleware.userOwner,
  UserController.updateUserControllerr
);
router.delete(
  "/users/:id",
  AuthTokenMiddleware.authToken,
  UserOwnerMiddleware.userOwner,
  UserController.deleteUserController
);

module.exports = router;
