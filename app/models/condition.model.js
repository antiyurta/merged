module.exports = (sequelize, Sequelize) => {
    const Condition = sequelize.define(
      "condition",
      {
        condition: {
          type: Sequelize.STRING(8000),
        },
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
      }
    );
  
    return Condition;
  };
  