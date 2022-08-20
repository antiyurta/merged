module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  },
  {
    charset: "utf8",
    collate: "utf8_unicode_ci",
  }
  );

  return Role;
};
