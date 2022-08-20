module.exports = (sequelize, Sequelize) => {
  const subCategory = sequelize.define(
    "sub_category",
    {
      categoryId: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      isView: {
        type: Sequelize.BOOLEAN,
      },
      icon: {
        type: Sequelize.STRING,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );

  return subCategory;
};
