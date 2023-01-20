const { Router } = require("express");
const ProductController = require("../controllers/ProductController");
const AuthTokenMiddleware = require("../middlewares/AuthTokenMiddleware");
const ProductOwnerMiddleware = require("../middlewares/ProductOwnerMiddleware")

const router = Router();

router.post(
  "/product",
  AuthTokenMiddleware.authToken,
  ProductController.createProductController
);
router.get(
  "/product",
  AuthTokenMiddleware.authToken,
  ProductController.getAllProductsController
);
router.patch(
  "/product/:id",
  AuthTokenMiddleware.authToken,
  ProductOwnerMiddleware.productOwner,
  ProductController.updateProductController
);
router.delete(
  "/product/:id",
  AuthTokenMiddleware.authToken,
  ProductOwnerMiddleware.productOwner,
  ProductController.deleteProductController
);

module.exports = router;
