const { authJwt } = require("../middleware");
const controller = require("../controllers/role.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/role/all", [authJwt.verifyToken], controller.list);
  app.post("/api/role/register", [authJwt.verifyToken], controller.setRole);
  app.put("/api/role/update", [authJwt.verifyToken], controller.update);
  app.delete("/api/role/delete/:id", [authJwt.verifyToken], controller.destroy);
};
