const db = require("../models");

exports.list = async (req, res) => {
  await db.contact
    .findAll()
    .then((category) => res.status(200).send(category))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};
exports.setCategory = async (req, res) => {
  await db.contact
    .create(req.body)
    .then(() => res.status(200).send("Амжиллтай бүртгэлээ"))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};
exports.update = async (req, res) => {
  await db.contact
    .update(req.body, {
      where: {
        id: req.body.id,
      },
    })
    .then(() => res.status(200).send("Амжиллтай Засагдлаа"))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};

exports.destroy = async (req, res) => {
  await db.contact
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
