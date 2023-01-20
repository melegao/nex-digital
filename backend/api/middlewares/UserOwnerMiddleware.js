class UserOwnerMiddleware {
  static async userOwner(req, res, next) {
    const { id } = req.params;

    if (id == req.user.id) {
      next();
    } else {
      return res.status(401).json({ message: "You dont have authorization" });
    }
  }
}

module.exports = UserOwnerMiddleware;
