const { Router } = require("express");
const address = require("../controllers/address");

const router = Router();

router.post("/division", address.createDivision);

router.get("/divisions", address.getAllDivisions);

module.exports = router;
