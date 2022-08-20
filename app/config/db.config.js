module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Server2022@",
  DB: "dictionary",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
