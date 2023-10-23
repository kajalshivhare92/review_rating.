var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "shivharekajal92@gmail.com",
        pass: "ugvutgffbqmznupu"
    }
});
// send out email throgh nodemailer
var mailOptions = {
    from: "shivharekajal92@gmail.com",
    to: "priyankashivhare198@gmail.com",
    subject: "Hye this is test mail",
    text: "hye this is body part"
}
module.exports = {
    transporter,
    mailOptions
}
