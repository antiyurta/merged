const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/user/all", [authJwt.verifyToken],controller.list);
  app.post("/api/user/register", [authJwt.verifyToken], controller.setUser);
  app.put("/api/user/update", [authJwt.verifyToken], controller.update);
  app.delete("/api/user/delete/:id", [authJwt.verifyToken], controller.destroy);
};
