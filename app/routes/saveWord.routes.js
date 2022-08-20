const { authJwt } = require("../middleware");
const controller = require("../controllers/saveWord.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/saveWord/:id", [authJwt.verifyToken], controller.list);
  app.post("/api/saveWord/register", [authJwt.verifyToken], controller.setWord);
  app.put("/api/saveWord/update", [authJwt.verifyToken], controller.update);
  app.delete("/api/saveWord/delete/:id", [authJwt.verifyToken], controller.destroy);
  app.delete("/api/saveWord/delete/all/:id", [authJwt.verifyToken], controller.destroyAll);
};
