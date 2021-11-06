const mongoose = require('mongoose');

const URI = 'mongodb://localhost/Macros';
mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log('The Database is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;