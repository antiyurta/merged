module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "users",
    {
      lastname: {
        type: Sequelize.STRING,
      },
      firstname: {
        type: Sequelize.STRING,
      },
      mobilenumber: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      roleId: {
        type: Sequelize.INTEGER,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );

  return User;
};
