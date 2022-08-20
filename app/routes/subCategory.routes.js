const { authJwt } = require("../middleware");
const controller = require("../controllers/subCategory.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/subCategory/all", [authJwt.verifyToken], controller.list);
  app.get("/api/subCategory/:id", [authJwt.verifyToken], controller.getById);
  app.post("/api/subCategory/register", [authJwt.verifyToken], controller.setCategory);
  app.put("/api/subCategory/update", [authJwt.verifyToken], controller.update);
  app.delete("/api/subCategory/delete/:id", [authJwt.verifyToken], controller.destroy);
};
