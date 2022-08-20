const { authJwt } = require("../middleware");
const controller = require("../controllers/condition.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/conditions", controller.forPhone);
  app.get("/api/conditions/all", controller.list);
  app.post("/api/conditions/register", [authJwt.verifyToken], controller.setCondition);
  app.put("/api/conditions/update", [authJwt.verifyToken], controller.update);
  app.delete("/api/conditions/delete/:id", [authJwt.verifyToken], controller.destroy);
};
