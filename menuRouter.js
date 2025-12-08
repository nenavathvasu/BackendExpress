const express = require("express");
const router = express.Router();
const controller = require("./menuController");

// Veg
router.post("/saveveg", controller.saveVeg);
router.get("/getveg", controller.getVeg);

// Non-veg
router.post("/savenonveg", controller.saveNonVeg);
router.get("/getnonveg", controller.getNonVeg);

// Bulk
router.post("/saveallveg", controller.saveAllVeg);
router.post("/saveallnonveg", controller.saveAllNonVeg);

// Deletes
router.delete("/deleteveg/:name", controller.deleteVeg);
router.delete("/deletenonveg/:name", controller.deleteNonVeg);
router.delete("/deleteallveg", controller.deleteAllVeg);
router.delete("/deleteallnonveg", controller.deleteAllNonVeg);

module.exports = router;
