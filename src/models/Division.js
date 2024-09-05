const { Division } = require("../schema/Address");

const addDivision = async (name, code) => {
  const division = new Division({ name, code });
  return await division.save();
};

const getAllDivisions = async () => {
  return await Division.find();
};

const findDivisionByName = async (name) => {
  return await Division.findOne({ name });
};

module.exports = {
  addDivision,
  getAllDivisions,
  findDivisionByName,
};
