const mongoose = require('mongoose');
const { DB_URL } = require('./variables.js');

const uri = DB_URL;
mongoose.set('strictQuery', false);
mongoose.connect(uri, {
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Database Connection Successful');
});

db.on('error', (error) => {
  console.error('Error in MongoDB connection:', error);
});
module.exports = mongoose;
