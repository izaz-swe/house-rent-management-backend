const { errorResponseHandler } = require("../helper/errorResponseHandler");
const { statusCodes } = require("../helper/statusCodes");
const Division = require("../models/Division");

exports.createDivision = async (req, res) => {
  try {
    const { name, code } = req.body;

    if (!name || !code) {
      throw Object.assign(new Error(), {
        status: statusCodes.NOT_FOUND,
        error: { code: 40202 },
      });
    }

    const existingDivision = await Division.findDivisionByName(name);
    if (existingDivision) {
      throw Object.assign(new Error(), {
        status: statusCodes.CONFLICT,
        error: { code: 40902 },
      });
    }
    const newDivision = await Division.addDivision(name, code);
    res.created({ division: newDivision }, "Division created successfully");
  } catch (error) {
    errorResponseHandler(error, req, res);
  }
};

exports.getAllDivisions = async (req, res) => {
  try {
    const divisions = await Division.getAllDivisions();
    res.success(divisions, "Divisions get successfully");
  } catch (error) {
    errorResponseHandler(error, req, res);
  }
};
