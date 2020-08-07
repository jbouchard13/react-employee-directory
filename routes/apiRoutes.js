const router = require('express').Router();
const Employee = require('../models/Employee');

// get request to retrieve all employee data
router.get('/employees', (req, res) => {
  Employee.find()
    .then((employees) => {
      res.status(200).json(employees);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// get request to retrieve employees by job title
router.get('/employees/:jobTitle', (req, res) => {
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
router.post('/employees', (req, res) => {
  console.log(req);
});

// delete request to remove employees
router.delete('/employees/:employeeId', (req, res) => {});

module.exports = router;
