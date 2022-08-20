const db = require("../models");

exports.list = async (req, res) => {
  await db.user
    .findAll({
      include: [{ model: db.role, attributes: ["description"] }],
    })
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send(err));
};
exports.setUser = async (req, res) => {
  await db.user
    .create(req.body)
    .then(() => {
      res.status(200).send("Амжиллтай бүртгэлээ");
    })
    .catch((err) => {
      res.status(500).send("Алдаа, Та дахин оролдоно уу");
    });
};
exports.update = async (req, res) => {
  await db.user
    .update(req.body, {
      where: {
        id: req.body.id,
      },
    })
    .then(() => {
      res.status(200).send("Амжиллтай Засагдлаа");
    })
    .catch((err) => {
      res.status(500).send("Алдаа, Та дахин оролдоно уу");
    });
};
exports.destroy = async (req, res) => {
  await db.user
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(() => {
      res.status(200).send("Амжиллтай Устгалаа");
    })
    .catch((err) => {
      res.status(500).send("Алдаа, Та дахин оролдоно уу");
    });
};