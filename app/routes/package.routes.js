const { authJwt } = require("../middleware");
const controller = require("../controllers/package.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/package/all", [authJwt.verifyToken], controller.list);
  app.post("/api/package/register", [authJwt.verifyToken], controller.setPackage);
  app.put("/api/package/update", [authJwt.verifyToken], controller.update);
  app.delete("/api/package/delete/:id", [authJwt.verifyToken], controller.destroy);
};
