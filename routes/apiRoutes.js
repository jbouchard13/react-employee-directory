const router = require('express').Router();
const Employee = require('../models/Employee');

// get request to retrieve all employee data
router.get('/api/employees', (req, res) => {
  Employee.find({})
    .then((employees) => {
      res.status(200).json(employees);
    })
    .catch((err) => {
      res.status(500).end();
    });
});

// get request to retrieve employees by job title
router.get('/api/employees/:jobTitle', (req, res) => {
  Employee.find({
    jobTitle: req.params.jobTitle,
  })
    .then((employees) => {
      res.status(200).json(employees);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// post request to add employees
router.post('/api/employees', (req, res) => {
  const newEmployee = req.body;
  console.log(newEmployee);
  Employee.create(newEmployee)
    .then((employees) => {
      res.status(200).json(employees);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// delete request to remove employees
router.delete('/api/employees/:employeeId', (req, res) => {
  Employee.deleteOne({
    id: req.params.employeeId,
  })
    .then((employees) => {
      res.status(200).json(employees);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
