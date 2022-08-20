module.exports = (sequelize, Sequelize) => {
  const saveWord = sequelize.define(
    "saveWord",
    {
      userId: {
        type: Sequelize.INTEGER,
      },
      wordId: {
        type: Sequelize.INTEGER,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );

  return saveWord;
};
