const router = require("express").Router();
const serviceRoutes = require("./services");
const userRoutes = require("./users");
const secuserRoutes = require("./secusers");
const vendorRoutes = require("./vendors");
const calendarRoutes = require("./calendar");
const notifRoutes = require("./notification");

// Setting up routes
router.use("/services", serviceRoutes);
router.use("/users", userRoutes);
router.use("/secusers", secuserRoutes);
router.use("/vendors", vendorRoutes);
router.use("/calendar", calendarRoutes);
router.use("/notif", notifRoutes);

module.exports = router;
