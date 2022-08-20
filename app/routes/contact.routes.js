const { authJwt } = require("../middleware");
const controller = require("../controllers/contact.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/contact/all", controller.list);
  app.post("/api/contact/register", [authJwt.verifyToken], controller.setCategory);
  app.put("/api/contact/update", [authJwt.verifyToken], controller.update);
  app.delete("/api/contact/delete/:id", [authJwt.verifyToken], controller.destroy);
};
