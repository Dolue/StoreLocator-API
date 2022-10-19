const Store = require("../models/Store");

// Get all stores
// GET /api/v1/stores

exports.getStores = async (req, res, next) => {
  try {
    const stores = await Store.find();

    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores,
    });
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
};

// Create a store
// POST /api/v1/stores

exports.addStore = async (req, res, next) => {
  try {
    const store = await Store.create(req.body);

    return res.status(200).json({
      success: true,
      data: store,
    });
  } catch (error) {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: "this store already exist " });
    }
    res.status(500).json({ error: "server error" });
  }
};
