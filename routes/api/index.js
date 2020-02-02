const router = require("express").Router();
const journalRoutes = require("./journal");

// Book routes
router.use("/journals", journalRoutes);

module.exports = router;
