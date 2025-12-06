const express = require("express");
const {
  saveVeg,
  getVeg,
  saveNonVeg,
  getNonVeg,
  saveAllVeg,
  saveAllNonVeg,
  deleteVeg,
  deleteNonVeg,
  deleteAllVeg,
  deleteAllNonVeg
} = require("./menuController");

const router = express.Router();

router.post("/saveveg", saveVeg);
router.get("/getveg", getVeg);

router.post("/savenonveg", saveNonVeg);
router.get("/getnonveg", getNonVeg);

router.post("/saveallveg", saveAllVeg);
router.post("/saveallnonveg", saveAllNonVeg);

router.delete("/deleteveg/:name", deleteVeg);
router.delete("/deletenonveg/:name", deleteNonVeg);

router.delete("/deleteallveg", deleteAllVeg);
router.delete("/deleteallnonveg", deleteAllNonVeg);

module.exports = router;
