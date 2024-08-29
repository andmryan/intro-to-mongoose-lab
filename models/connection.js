const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI);

mongoose.connection
    .on('open', () => console.log('connected'))
    .on('close', () => console.log('disconnected'))
    .on('error', (err) => console.log('error', err))

module.exports = mongoose;
module.exports = mongoose