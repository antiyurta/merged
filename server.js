const express = require("express");
const cors = require("cors");

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081",
//   credentials: true,
// };

app.use(
  cors({
    origin: "*",
  })
);

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to GurenSoft application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/role.routes")(app);
require("./app/routes/package.routes")(app);
require("./app/routes/category.routes")(app);
require("./app/routes/subCategory.routes")(app);
require("./app/routes/saveWord.routes")(app);
require("./app/routes/word.routes")(app);
require("./app/routes/contact.routes")(app);
require("./app/routes/conditions.routes")(app);
require("./app/routes/feedback.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
