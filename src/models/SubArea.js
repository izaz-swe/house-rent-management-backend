const { SubArea } = require("../schema/Address");

const addSubArea = async function (subAreaData) {
  const subArea = new SubArea(subAreaData);
  return await subArea.save();
};

const addMultipleSubAreas = async function (subAreasData) {
  return await SubArea.insertMany(subAreasData);
};

module.exports = { addMultipleSubAreas, addSubArea };
