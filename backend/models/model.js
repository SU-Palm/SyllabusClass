const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    meta_data:{}
});

module.exports = User = mongoose.model("file", fileSchema);