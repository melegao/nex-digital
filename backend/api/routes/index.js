const bodyParser = require("body-parser");
const users = require("./usersRoute");
const auth = require("./authRoute");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(users);
  app.use(auth);
};
