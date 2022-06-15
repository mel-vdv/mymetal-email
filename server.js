//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// create a new Express application instance
const app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

//start application server on port 3000
app.listen(3000, () => {
    console.log("The server started on port 3000");
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
let email;
app.post("/mail", (req) => {
    email =  req.body;
    sendMail();
});

const sendMail = () => {
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: "melvdv123456@outlook.com",
            pass: "m1e2l3v4d5v6"
        }
    });
    let mail = {
        from: '"MYMETAL" <melvdv123456@outlook.com>',
        to: email.to,
        subject: email.subject,
        text: email.text
    };

    transporter.sendMail(mail);
}

