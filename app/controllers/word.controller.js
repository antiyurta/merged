const db = require("../models");

exports.list = async (req, res) => {
  await db.word
    .findAll({
      include: [{ model: db.category }, { model: db.subCategory }],
    })
    .then((word) => res.status(200).send(word))
    .catch((err) => res.status(500).send(err));
};
exports.setWord = async (req, res) => {
  await db.word
    .create(req.body)
    .then(() => {
      res.status(200).send("Амжиллтай бүртгэлээ");
    })
    .catch(() => {
      res.status(500).send("Алдаа, Та дахин оролдоно уу");
    });
};
exports.update = async (req, res) => {
  await db.word
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
  await db.word
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
