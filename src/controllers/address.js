const { errorResponseHandler } = require("../helper/errorResponseHandler");
const { statusCodes } = require("../helper/statusCodes");
const Division = require("../models/Division");
const District = require("../models/District");
const Thana = require("../models/Thana");
const SubArea = require("../models/SubArea");

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

exports.createDistrict = async (req, res) => {
  try {
    const { name, divisionId } = req.body;

    if (!name || !divisionId) {
      return res
        .status(400)
        .json({ message: "Name and division ID are required" });
    }
    const newDistrict = await District.addDistrict(name, divisionId);
    res.created(newDistrict, "District created successfully");
  } catch (error) {
    errorResponseHandler(error, req, res);
  }
};

exports.createMultipleDistricts = async (req, res) => {
  try {
    const districts = req.body.districts;

    // Validate input
    if (!Array.isArray(districts) || districts.length === 0) {
      return res
        .status(400)
        .json({ message: "An array of districts is required" });
    }

    // Call the model method to add multiple districts
    const newDistricts = await District.addMultipleDistricts(districts);
    return res.status(201).json({
      message: "Districts created successfully",
      districts: newDistricts,
    });
  } catch (error) {
    errorResponseHandler(error, req, res);
  }
};

exports.getDistrictsByDivisionId = async (req, res) => {
  try {
    const { divisionId } = req.params;

    const districts = await District.getDistrictByDivisionId(divisionId);

    if (!districts.length) {
      return res
        .status(404)
        .json({ message: "No districts found for the given divisionId" });
    }

    res.success(districts, "Districts get successfully");
  } catch (error) {
    errorResponseHandler(error, req, res);
  }
};
exports.addThana = async (req, res) => {
  try {
    const thanaData = req.body;
    const thana = await Thana.addThana(thanaData);
    return res.status(201).json({ success: true, data: thana });
  } catch (error) {
    errorResponseHandler(error, req, res);
  }
};

exports.addMultipleThanas = async (req, res) => {
  try {
    const thanasData = req.body;
    const thanas = await Thana.addMultipleThanas(thanasData);
    res.created(thanas, "Thanas created successfully");
  } catch (error) {
    errorResponseHandler(error, req, res);
  }
};

exports.addSubArea = async (req, res) => {
  try {
    const subAreaData = req.body;
    const subArea = await SubArea.addSubArea(subAreaData);
    res.created(subArea, "Sub Area created successfully");
  } catch (error) {
    errorResponseHandler(error, req, res);
  }
};

exports.addMultipleSubAreas = async (req, res) => {
  try {
    const subAreasData = req.body;
    const subAreas = await SubArea.addMultipleSubAreas(subAreasData);
    res.created(subAreas, "Sub Areas created successfully");
  } catch (error) {
    errorResponseHandler(error, req, res);
  }
};

exports.getThanas = async (req, res) => {
  try {
    const { districtId } = req.params;
    const thanas = await Thana.getThanasByDistrictId(districtId);
    if (!thanas.length) {
      return res
        .status(404)
        .json({ message: "No thanas found for the given districtId" });
    }
    res.success(thanas, "Thanas get successfully");
  } catch (error) {
    errorResponseHandler(error, req, res);
  }
};
