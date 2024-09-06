// models/districtModel.js

const { default: mongoose } = require("mongoose");
const { District } = require("../schema/Address");

const addDistrict = async (name, divisionId) => {
  const district = new District({ name, division: divisionId });
  return await district.save();
};

const addMultipleDistricts = async (districts) => {
  return await District.insertMany(districts);
};

const getAllDistricts = async () => {
  return await District.find().populate("division");
};

const getDistrictByDivisionId = async (divisionId) => {
  return await District.find({
    division: new mongoose.Types.ObjectId(divisionId),
  });
};

module.exports = {
  addDistrict,
  addMultipleDistricts,
  getAllDistricts,
  getDistrictByDivisionId,
};
