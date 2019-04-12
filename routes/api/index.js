const router = require("express").Router();
const bookRoutes = require("./books");
const serviceRoutes = require("./services");

// Book routes
router.use("/books", bookRoutes);

// Service routes
router.use("/services", serviceRoutes);

module.exports = router;
