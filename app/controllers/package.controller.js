const db = require("../models");

exports.list = async (req, res) => {
  await db.package
    .findAll()
    .then((package) => res.status(200).send(package))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};
exports.setPackage = async (req, res) => {
  await db.package
    .create(req.body)
    .then(() => res.status(200).send("Амжиллтай бүртгэлээ"))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};
exports.update = async (req, res) => {
  await db.package
    .update(req.body, {
      where: {
        id: req.body.id,
      },
    })
    .then(() => res.status(200).send("Амжиллтай Засагдлаа"))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};

exports.destroy = async (req, res) => {
  await db.package
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(() => {
      res.status(200).send("Амжиллтай Устгалаа");
    })
    .catch(() => {
      res.status(500).send("Алдаа, Та дахин оролдоно уу");
    });
};
