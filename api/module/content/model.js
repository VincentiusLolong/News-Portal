const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Content = new Schema({
    title: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    author: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    content: {
        type: String,
        required: true
    },
},{
    collection: 'content'
});

module.exports = mongoose.model('content', Content)