const { Router } = require("express");
const address = require("../controllers/address");

const router = Router();

router.post("/division", address.createDivision);

router.get("/divisions", address.getAllDivisions);
router.post("/district", address.createDistrict);

router.post("/districts/multiple", address.createMultipleDistricts);

module.exports = router;
