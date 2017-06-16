var emailHandler = require('../controllers/email-handler.js')

module.exports = function(app) {


module.exports = function(req, res) {

  app.post('/contactForm', function(req, res) {
    emailHandler.sendEmail(req.body);
    res.json("Email Has been sent via SMTP")
  })
}
