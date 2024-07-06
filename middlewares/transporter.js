const nodemailer = require("nodemailer");
require("dotenv").config()
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user:process.env.EMAIL,
    // pass: "jn7jnAPss4f63QBp6D",
  },
});
async function Main() {
    try {
        const info = await transporter.sendMail({
          from: '"Maddison Foo Koch 👻" <at567315@gmail.com>', 
          to: "bar@example.com, baz@example.com",
          subject: "Hello ✔", 
          text: "Hello world?", 
          html: "<b>Hello world?</b>", // html body
        });
        console.log("Message sent: %s", info.messageId);
      } catch (error) {
        console.error("Error sending email: ", error);
      }
  }


  Main()
 
module.exports=Main