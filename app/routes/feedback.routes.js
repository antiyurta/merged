const { authJwt } = require("../middleware");
const controller = require("../controllers/feedback.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/feedback/all", [authJwt.verifyToken], controller.list);
  app.post(
    "/api/feedback/register",
    [authJwt.verifyToken],
    controller.setFeedback
  );
  app.put("/api/feedback/update", [authJwt.verifyToken], controller.update);
  app.delete(
    "/api/feedback/delete/:id",
    [authJwt.verifyToken],
    controller.destroy
  );
};
