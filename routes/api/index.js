const router = require("express").Router();
const testRoutes = require("./test");

router.use("/test", testRoutes);

module.exports = router;
