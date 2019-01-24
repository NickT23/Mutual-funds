const mongoose = require('mongoose');

const FundsSchema = new mongoose.Schema({
    name: String,
    type: String,
    fiveYrReturns: Number,
})

const Fund = mongoose.model('Fund', FundsSchema);

module.exports = Fund;