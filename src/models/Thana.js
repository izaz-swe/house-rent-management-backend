const { Thana } = require("../schema/Address");
exports.addThana = async function (thanaData) {
  const thana = new Thana(thanaData);
  return await thana.save();
};

exports.addMultipleThanas = async function (thanasData) {
  return await Thana.insertMany(thanasData);
};
