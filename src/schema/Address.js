const mongoose = require("mongoose");
const { Schema } = mongoose;

const DivisionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const DistrictSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  division: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Division",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// Thana Schema
const ThanaSchema = new Schema({
  name: { type: String, required: true },
  district: { type: Schema.Types.ObjectId, ref: "District", required: true },
});

// SubArea Schema
const SubAreaSchema = new Schema({
  name: { type: String, required: true },
  thana: { type: Schema.Types.ObjectId, ref: "Thana", required: true },
});

const Division = mongoose.model("Division", DivisionSchema);
const District = mongoose.model("District", DistrictSchema);
const Thana = mongoose.model("Thana", ThanaSchema);
const SubArea = mongoose.model("SubArea", SubAreaSchema);

module.exports = {
  Division,
  District,
  Thana,
  SubArea,
};
