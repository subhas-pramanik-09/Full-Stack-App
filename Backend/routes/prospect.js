const express = require("express");
const {
  createProspect,
  getAllProspects,
  updateProspect,
  deleteProspect,
  getOneProspect,
} = require("../controllers/prospect.js");
const router = express.Router();

// add prospect
router.post("/", createProspect);
// get all prospects
router.get("/", getAllProspects);
//update prospect
router.put("/:id", updateProspect);
//delete prospect
router.delete("/:id", deleteProspect);
// get one prospect
router.post("/find/:id", getOneProspect);

module.exports = router;
