const express = require("express");
const { Patient } = require("../models/addPatient"); // Adjust the path if needed
const authenticateToken = require("../middleware/auth"); // Adjust the path if needed
const router = express.Router();
router.post("/", authenticateToken, async (req, res) => {
  const { First_name, Last_name, Exercise_type } = req.body;
  try {
    const newPatient = await Patient.create({
      First_name,
      Last_name,
      Exercise_type,
      Created_Date: new Date(),
    });
    res
      .status(201)
      .json({
        message: "Patient registered successfully",
        patient: newPatient,
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error registering patient", details: error });
  }
});
module.exports = router;
