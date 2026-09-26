const upload = require("../middleware/upload");
const express = require("express");

const {
  createProperty,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

const router = express.Router();

router.post("/", upload.array("images", 10), createProperty);

router.get("/", getProperties);

router.get("/:id", getPropertyById);

router.put("/:id", updateProperty);

router.delete("/:id", deleteProperty);

module.exports = router;