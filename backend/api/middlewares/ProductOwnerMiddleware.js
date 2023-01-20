const database = require("../models");

class ProductOwnerMiddleware {
  static async productOwner(req, res, next) {
    const { id } = req.params;

    const product = await database.Products.findOne({
      where: { id: Number(id) },
    });

    if(!product){
        return res.status(400).json({ message: "Product not found!" });
    }

    const userId = req.user.id;

    if (userId === product.ownerId) {
      next();
    } else {
      return res.status(401).json({
        message: "Only product owner can access",
      });
    }
  }
}

module.exports = ProductOwnerMiddleware;
