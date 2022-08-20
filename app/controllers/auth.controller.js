const db = require("../models");
const config = require("../config/auth.config");
const mailer = require("../controllers/mail.controller");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { user } = require("../models");

exports.signup = async (req, res) => {
  // Save User to Database
  const role = await db.role.findOne({
    where: {
      name: "user",
    },
  });
  await User.create({
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    mobilenumber: req.body.mobilenumber,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    roleId: role.id,
    isActive: false,
  })
    .then((user) => {
      var verifyNumber = Math.floor(100000 + Math.random() * 900000);
      mailer.sendMail(user.email, verifyNumber);
      res.status(200).send({ verifyNumber: verifyNumber });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.VerifyForReset = async (req, res) => {
  await db.user
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((user) => {
      var verifyNumber = Math.floor(100000 + Math.random() * 900000);
      mailer.sendMail(user.email, verifyNumber);
      res.status(200).send({ verifyNumber: verifyNumber });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.resetPassword = async (req, res) => {
  await db.user
    .update(
      { password: bcrypt.hashSync(req.body.password, 8) },
      {
        where: {
          email: req.body.email,
        },
      }
    )
    .then(() => {
      res.status(200).send("Нууц үг амжилттай солигдлоо");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.changePassword = async (req, res) => {
  const user = await db.user.findOne({
    where: {
      email: req.body.email,
    },
  });
  var result = bcrypt.compareSync(req.body.password, user.password);
  if (result) {
    await db.user
      .update(
        { password: bcrypt.hashSync(req.body.newpassword, 8) },
        {
          where: {
            email: req.body.email,
          },
        }
      )
      .then(() => {
        res.status(200).send("Нууц үг амжилттай солигдлоо");
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  } else {
    res.status(500).send({ message: 'Хуучин нууц үг буруу' });
  }
};

exports.resetMail = async (req, res) => {
  await db.user
    .update(
      { email: req.body.cmail },
      {
        where: {
          email: req.body.mail,
        },
      }
    )
    .then(() => {
      res.status(200).send("Й-майл амжилттай солигдлоо");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.resetProfile = async (req, res) => {
  await db.user
    .update(
      { lastname: req.body.lastname, firstname: req.body.firstname },
      {
        where: {
          email: req.body.email,
        },
      }
    )
    .then(() => {
      res.status(200).send("Амжилттай солигдлоо");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.verify = async (req, res) => {
  await db.user
    .update(
      { isActive: 1 },
      {
        where: {
          email: req.body.email,
        },
      }
    )
    .then((user) => {
      res.status(200).send("Баталгаажуулалт амжилттай");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: "Хэрэглэгч олдсонгүй." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Нууц үг буруу!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 10080, // 7 honog
      });
      var role = await db.role.findOne({
        where: {
          id: user.roleId,
        },
      });
      res.status(200).send({
        id: user.id,
        lastname: user.lastname,
        firstname: user.firstname,
        mobilenumber: user.mobilenumber,
        role: role.name,
        email: user.email,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.checkEmail = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      mailer.sendMail(user.email);
    })
    .catch((error) => {
      res.status(500).send("И-мэйлд бүртгэлтэй хэрэглэгч олдсонгүй");
    });
};
