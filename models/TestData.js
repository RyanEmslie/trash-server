const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const TestDataSchema = new Schema({
  name: { type: String, required: true },
  comment: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

module.exports = TestData = mongoose.model('item', TestDataSchema);
