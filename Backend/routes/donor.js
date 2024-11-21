const express = require("express");
const {
  createDonor,
  getAlldonors,
  updateDonor,
  getOneDonor,
  deleteDonor,
  getDonorsStats,
} = require("../controllers/donor.js");
const {
  verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken.js");
const router = express.Router();

// add donor
router.post("/", verifyTokenAndAuthorization, createDonor);
// get all donor
router.get("/", getAlldonors);
// update donor
router.put("/:id", updateDonor);
//get one donor
router.get("/find/:id", getOneDonor);
//delete donor
router.delete("/:id", deleteDonor);
// donor stats
router.get("/stats", getDonorsStats);

module.exports = router;
