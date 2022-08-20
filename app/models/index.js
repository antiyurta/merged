const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.package = require("../models/package.model.js")(sequelize, Sequelize);
db.category = require("../models/category.model.js")(sequelize, Sequelize);
db.subCategory = require("../models/subCategory.model.js")(
  sequelize,
  Sequelize
);
db.saveWord = require("../models/saveWord.model.js")(sequelize, Sequelize);
db.word = require("../models/word.model.js")(sequelize, Sequelize);
db.contact = require("../models/contact.model.js")(sequelize, Sequelize);
db.condition = require("../models/condition.model.js")(sequelize, Sequelize);
db.feedback = require("../models/feedback.model.js")(sequelize, Sequelize);

db.user.belongsTo(db.role, { foreignKey: "roleId" });
db.role.hasMany(db.user, { foreignKey: "id" });

db.feedback.belongsTo(db.user, { foreignKey: 'userId' });
db.user.hasMany(db.feedback, { foreignKey: "id" });


db.subCategory.belongsTo(db.category, { foreignKey: "categoryId" });
db.category.hasMany(db.subCategory, { foreignKey: "id" });

db.saveWord.belongsTo(db.word , { foreignKey: 'wordId'});
db.word.hasMany(db.saveWord, { foreignKey: "id" });

db.word.belongsTo(db.category , { foreignKey: "categoryId" });
db.category.hasMany(db.word, { foreignKey: "id" });
db.word.belongsTo(db.subCategory , { foreignKey: "sub_categoryId" })
db.subCategory.hasMany(db.word, { foreignKey: "sub_categoryId" }); 


module.exports = db;
