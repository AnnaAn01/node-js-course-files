const express = require("express");
const router = express.Router();
const employeesController = require("../../controllers/employeesController");

router
  .route("/")
  .get(employeesController.getAllEployees)
  .post(employeesController.createNewEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

//   showing the parameter directly in the url
router.route("/:id").get(employeesController.getEmployee);

module.exports = router;
