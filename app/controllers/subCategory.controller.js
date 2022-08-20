const db = require("../models");

exports.list = async (req, res) => {
  await db.subCategory
    .findAll({
      include: [{ model: db.category }],
    })
    .then((category) => res.status(200).send(category))
    .catch((error) => res.status(500).send(error));
};
exports.getById = async (req, res) => {
  await db.subCategory
    .findOne({
      where: {
        id: req.body.params,
      },
      include: [{ model: word }],
    })
    .then((category) => res.status(200).send(category))
    .catch((error) => res.status(500).send(error));
};
exports.setCategory = async (req, res) => {
  await db.subCategory
    .create(req.body)
    .then(() => res.status(200).send("Амжиллтай бүртгэлээ"))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};
exports.update = async (req, res) => {
  await db.subCategory
    .update(req.body, {
      where: {
        id: req.body.id,
      },
    })
    .then(() => res.status(200).send("Амжиллтай Засагдлаа"))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};

exports.destroy = async (req, res) => {
  await db.subCategory
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
