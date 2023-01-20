const database = require("../models");

class ProductService {
  static async createProductService(product, res) {
    try {
      const newProduct = await database.Products.create(product);
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getAllProductsService(res) {
    try {
      const allProducts = await database.Products.findAll();
      return res.status(200).json(allProducts);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async updateProductService(product, id, res, req) {
    try {
      const productExists = await database.Products.findOne({
        where: { id: Number(id) },
      });

      if (!productExists) {
        return res.status(400).json({ message: "Product not found!" });
      } else {
        await database.Products.update(product, { where: { id: Number(id) } });
        const updatedProdut = await database.Products.findOne({
          where: { id: Number(id) },
        });
        return res.status(200).json(updatedProdut);
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async deleteProductService(id, res) {
    try {
      const deletedProduct = await database.Products.destroy({
        where: { id: Number(id) },
      });
      if (deletedProduct) {
        return res
          .status(200)
          .json({ message: "Product deleted with success!" });
      } else {
        return res.status(400).json({ message: "Product not found!" });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ProductService;
