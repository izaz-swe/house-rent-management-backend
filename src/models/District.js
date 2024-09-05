// models/districtModel.js

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

module.exports = {
  addDistrict,
  addMultipleDistricts,
  getAllDistricts,
};
