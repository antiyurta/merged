const db = require("../models");

exports.forPhone = async (req, res) => {
  await db.condition
    .findAll({
      attributes: ["condition"],
    })
    .then((condition) => {
      var data = condition[0].condition;
      res.status(200).send(data);
    })
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};

exports.list = async (req, res) => {
  await db.condition
    .findAll()
    .then((condition) => {
      res.status(200).send(condition);
    })
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};
exports.setCondition = async (req, res) => {
  await db.condition
    .create(req.body)
    .then(() => res.status(200).send("Амжиллтай бүртгэлээ"))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};
exports.update = async (req, res) => {
  await db.condition
    .update(req.body, {
      where: {
        id: req.body.id,
      },
    })
    .then(() => res.status(200).send("Амжиллтай Засагдлаа"))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};

exports.destroy = async (req, res) => {
  await db.condition
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
