module.exports = (sequelize, Sequelize) => {
  const Packages = sequelize.define(
    "packages",
    {
      title: {
        type: Sequelize.STRING,
      },
      verifyDate: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );

  return Packages;
};
