var emailHandler = require('../controllers/email-handler.js')

module.exports = function(app) {

  app.post('/contactForm', function(req, res) {
    console.log("in routes");
    emailHandler.sendEmail(req.body);
    res.json("Email Has been sent via SMTP")
  })
}
