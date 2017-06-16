var nodemailer = require('nodemailer')

module.exports = (function(){;
  return {
    sendEmail: function(form) {
      console.log("in email handler", form);
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: 'rhuxdesign@gmail.com',
          pass: 'Freak103!'
        },
        secure: true,
      });
      let mailOptions = {
        from: '"My Website" <rhuxdesign@gmail.com>',
        to: 'rhanna1461@hotmail.com',
        subject: 'New Portfolio Contact',
        html: "<h2>" + form.firstName + "</h2>" + "<h2>" + form.lastName + "</h2>" + "<p>" + form.email + "</p>" + "<p>" + form.phone + "</p>" +"<p>" + form.message + "</p>"
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      });
    }
  }
})()
