const db = require("../models");

exports.list = async (req, res) => {
  await db.role
    .findAll()
    .then((role) => res.status(200).send(role))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};
exports.setRole = async (req, res) => {
  await db.role
    .create(req.body)
    .then(() => {
      res.status(200).send("Амжиллтай бүртгэлээ");
    })
    .catch(() => {
      res.status(500).send("Алдаа, Та дахин оролдоно уу");
    });
};
exports.update = async (req, res) => {
  await db.role
    .update(req.body, {
      where: {
        id: req.body.id,
      },
    })
    .then(() => {
      res.status(200).send("Амжиллтай Засагдлаа");
    })
    .catch(() => {
      res.status(500).send("Алдаа, Та дахин оролдоно уу");
    });
};
exports.destroy = async (req, res) => {
  await db.role
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
