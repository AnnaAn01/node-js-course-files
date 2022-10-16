const data = {};
data.employees = require("../model/employees.json");

const getAllEployees = (req, res) => {
  res.join(data.employees);
};

const createNewEmployee = (req, res) => {
  res.json({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
};

const updateEmployee = (req, res) => {
  res.json({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
};

const deleteEmployee = (req, res) => {
  res.json({ id: req.body.id });
};

const getEmployee = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = {
  getAllEployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
