var mongoose = require('mongoose')

var form = new mongoose.Schema(
  {name : String, email: String, message: String}
)
