const router = require("express").Router();
const testController = require("../../controllers/testController");

router.route("/")
  .get(testController.testRoute);

router.route('/db')
  .get(testController.findAll);
  
module.exports = router;
