const { authJwt } = require("../middleware");
const controller = require("../controllers/category.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/category/all", [authJwt.verifyToken], controller.list);
  app.post("/api/category/register", [authJwt.verifyToken], controller.setCategory);
  app.put("/api/category/update", [authJwt.verifyToken], controller.update);
  app.delete("/api/category/delete/:id", [authJwt.verifyToken], controller.destroy);
};
