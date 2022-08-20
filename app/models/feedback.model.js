module.exports = (sequelize, Sequelize) => {
  const Feedback = sequelize.define(
    "feedback",
    {
      userId: {
        type: Sequelize.INTEGER,
      },
      feedback: {
        type: Sequelize.STRING,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );

  return Feedback;
};
