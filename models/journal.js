const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  rating: { type: Number },
  picUrl: { type: String },
  publish: { type: Boolean, required: true },
  note: {type: String},
  createdAt: { type: Date, default: Date.now }
});

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;
