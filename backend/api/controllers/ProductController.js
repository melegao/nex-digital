const ProductService = require("../services/ProductService");

class ProductController {
  static async createProductController(req, res) {
    const product = req.body;
    const newProduct = await ProductService.createProductService(product, res);
    return newProduct;
  }

  static async getAllProductsController(req, res) {
    const allProducts = await ProductService.getAllProductsService(res);
    return allProducts;
  }

  static async updateProductController(req, res) {
    const { id } = req.params;
    const product = req.body;
    const updatedProduct = await ProductService.updateProductService(
      product,
      id,
      res,
      req
    );
    return updatedProduct;
  }

  static async deleteProductController(req, res) {
    const { id } = req.params;
    const deletedProduct = await ProductService.deleteProductService(id, res);
    return deletedProduct;
  }
}

module.exports = ProductController;
