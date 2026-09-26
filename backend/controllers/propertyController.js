const Property = require("../models/property");

// Create Property
const createProperty = async (req, res) => {
  try {
    const {
      name,
      description,
      location,
      type,
      price,
      rating,
      amenities,
      available,
    } = req.body;

    const images = req.files
      ? req.files.map((file) => `/uploads/${file.filename}`)
      : [];

    const property = await Property.create({
      name,
      description,
      location,
      type,
      price,
      rating,
      amenities: amenities
        ? amenities.split(",").map((item) => item.trim())
        : [],
      available,
      images,
    });

    return res.status(201).json({
      message: "Property created successfully",
      property,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to create property",
    });
  }
};
// Get All Properties
const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();

    return res.status(200).json({
      properties,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to get properties",
    });
  }
};

// Get Single Property
const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    return res.status(200).json({
      property,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to get property",
    });
  }
};

// Update Property
const updateProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    return res.status(200).json({
      message: "Property updated successfully",
      property,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to update property",
    });
  }
};

// Delete Property
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    return res.status(200).json({
      message: "Property deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to delete property",
    });
  }
};

module.exports = {
  createProperty,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
};
