const { default: mongoose } = require("mongoose");
const { Thana } = require("../schema/Address");
exports.addThana = async function (thanaData) {
  const thana = new Thana(thanaData);
  return await thana.save();
};

exports.addMultipleThanas = async function (thanasData) {
  return await Thana.insertMany(thanasData);
};

exports.getThanasByDistrictId= async(districtId)=>{
  return await Thana.find({ district: new mongoose.Types.ObjectId(districtId) });
}