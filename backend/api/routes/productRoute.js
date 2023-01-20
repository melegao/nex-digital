const { Router } = require("express");
const ProductController = require("../controllers/ProductController");

const router = Router();

router.post("/product", ProductController.createProductController);
router.get("/product", ProductController.getAllProductsController);
router.patch("/product/:id", ProductController.updateProductController);
router.delete("/product/:id", ProductController.deleteProductController);

module.exports = router;
