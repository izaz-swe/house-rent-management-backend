const { default: mongoose } = require("mongoose");
const { SubArea } = require("../schema/Address");

const addSubArea = async function (subAreaData) {
  const subArea = new SubArea(subAreaData);
  return await subArea.save();
};

const addMultipleSubAreas = async function (subAreasData) {
  return await SubArea.insertMany(subAreasData);
};

const getSubAreasByThanaId = async (thanaId) => {
  return await SubArea.find({
    thana: new mongoose.Types.ObjectId(thanaId),
  });
};

module.exports = { addMultipleSubAreas, addSubArea, getSubAreasByThanaId };
