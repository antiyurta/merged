module.exports = (sequelize, Sequelize) => {
  const Contact = sequelize.define(
    "contact",
    {
      email: {
        type: Sequelize.STRING,
      },
      mobilenumber: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );

  return Contact;
};
