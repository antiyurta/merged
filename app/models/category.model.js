module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define(
      "category",
      {
        name: {
          type: Sequelize.STRING,
        },
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
      }
    );
  
    return Category;
  };
  