const mongoose = require('mongoose');
mongoose.connect('mongodb://vincent:admin123456@ds145299.mlab.com:45299/mext', {
    useNewUrlParser: true,
});

module.exports = mongoose;