const db = require("../models");

exports.list = async (req, res) => {
  await db.feedback
    .findAll({ include: [{ model: db.user }] })
    .then((feedback) => res.status(200).send(feedback))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};
exports.setFeedback = async (req, res) => {
  await db.feedback
    .create(req.body)
    .then(() => res.status(200).send("Амжиллтай бүртгэлээ"))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};
exports.update = async (req, res) => {
  await db.feedback
    .update(req.body, {
      where: {
        id: req.body.id,
      },
    })
    .then(() => res.status(200).send("Амжиллтай Засагдлаа"))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};

exports.destroy = async (req, res) => {
  await db.feedback
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
