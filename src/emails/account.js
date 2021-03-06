const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "samehsany22@gmail.com",
    subject: "Sending with SendGrid is Fun",
    text: `welcome to the app , ${name}. Let me know how you get along with the app `,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "samehsany22@gmail.com",
    subject: "Sorry to see you go",
    text: `Good Bye, ${name}. i hope to see you back dude `,
  });
};
module.exports = { sendWelcomeEmail, sendCancelationEmail };
