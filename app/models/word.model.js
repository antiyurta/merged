module.exports = (sequelize, Sequelize) => {
  const Word = sequelize.define(
    "words",
    {
      categoryId: {
        type: Sequelize.INTEGER,
      },
      sub_categoryId: {
        type: Sequelize.INTEGER,
      },
      mon_title: {
        type: Sequelize.STRING,
      },
      mon_description: {
        type: Sequelize.STRING,
      },
      eng_title: {
        type: Sequelize.STRING,
      },
      eng_description: {
        type: Sequelize.STRING,
      },
      ru_title:{
        type: Sequelize.STRING,
      },
      ru_description: {
        type: Sequelize.STRING,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );

  return Word;
};
