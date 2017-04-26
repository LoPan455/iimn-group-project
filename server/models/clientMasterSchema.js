//declaration of mongoose 'client' Schema.  Used when we add or update a client's information

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientMasterSchema = new Schema(
  {
  name: String
  },
  {
  strict: false} // this setting allows us to add any attribute that comes in on the AJAX request
);

var Client = mongoose.model('Client', clientMasterSchema);

module.exports = Client;
