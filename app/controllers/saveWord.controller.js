const { saveWord } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;

exports.list = async (req, res) => {
  await db.saveWord
    .findAll({
      where: {
        userId: req.params.id,
      },
      include: db.word,
    })
    .then((saveWord) => {
      res.status(200).send(saveWord);
    })
    .catch(() => {
      res.status(500).send("Алдаа, Та дахин оролдоно уу");
    });
};
exports.setWord = async (req, res) => {
  const project = await saveWord.findOne({
    where: {
      [Op.and]: [
        {
          userId: req.body.userId,
        },
        {
          wordId: req.body.wordId,
        },
      ],
    },
  });
  if (project === null) {
    await db.saveWord
      .create(req.body)
      .then(() => res.status(200).send("Амжиллтай"))
      .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
  } else {
    res.status(200).send("Үг хадгалагдсан байна");
  }
};
exports.update = async (req, res) => {
  await db.saveWord
    .update(req.body, {
      where: {
        id: req.body.id,
      },
    })
    .then(() => res.status(200).send("Амжиллтай Засагдлаа"))
    .catch(() => res.status(500).send("Алдаа, Та дахин оролдоно уу"));
};

exports.destroy = async (req, res) => {
  await db.saveWord
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

exports.destroyAll = async (req, res) => {
  await db.saveWord
    .destroy({
      where: {
        userId: req.params.id,
      },
    })
    .then(() => {
      res.status(200).send("Амжиллтай Устгалаа");
    })
    .catch(() => {
      res.status(500).send("Алдаа, Та дахин оролдоно уу");
    });
};
