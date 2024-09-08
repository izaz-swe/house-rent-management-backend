const { Router } = require("express");
const address = require("../controllers/address");

const router = Router();

router.post("/division", address.createDivision);

router.get("/divisions", address.getAllDivisions);
router.post("/district", address.createDistrict);
router.post("/districts/multiple", address.createMultipleDistricts);
router.get("/districts/:divisionId", address.getDistrictsByDivisionId);

router.post("/thana", address.addThana);
router.post("/thana/multiple", address.addMultipleThanas);
router.get('/thanas/:districtId', address.getThanas);

router.post("/sub-area", address.addSubArea);
router.post("/sub-areas/multiple", address.addMultipleSubAreas);
module.exports = router;
