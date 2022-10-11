const express = require("express");
const router = express.Router();
const data = {};
data.employees = require("../../data/employees.json");

router
  .route("/")
  .get((req, res) => {
    res.json(data.employees);
  })
  .post((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  })
  .put((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  })
  .delete((req, res) => {
    res.json({ id: req.body.id });
  });

//   showing the parameter directly in the url
router.route("/:id").get((req, res) => {
  res.json({ id: req.params.id });
});

module.exports = router;
