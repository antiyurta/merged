var nodemailer = require("nodemailer");

exports.sendMail = function (userEmail , verifyNumber) {
  var smtpConfig = {
    host: "smtp.gmail.com",
    post: 465,
    secure: true,
    auth: {
      user: "amaraa.gurensoft@gmail.com",
      pass: "itdgwmgjubhgxsuo",
    },
  };
  var transporter = nodemailer.createTransport(smtpConfig);
  var mailOptions = {
    from: "amaraa.gurensoft@gmail.com",
    to: userEmail,
    subject: "TEST",
    text: "TEST",
    html: `<b>${verifyNumber}</b>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("ALDAA MAIL" + error);
    } else {
      console.log("AMJILTTAI ");
    }
  });
};
