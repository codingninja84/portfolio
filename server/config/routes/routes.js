var emailHandler = require('../controllers/email-handler.js')

module.exports = function(app) {

<<<<<<< HEAD
module.exports = function(req, res) {
	  
=======
  app.post('/contactForm', function(req, res) {
    emailHandler.sendEmail(req.body);
    res.json("Email Has been sent via SMTP")
  })
>>>>>>> f6b91eea5aa78493b553fb5149598626032c1c83
}
