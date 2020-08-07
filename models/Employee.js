const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: 'Please enter a first name',
  },
  lastName: {
    type: String,
    trim: true,
    required: 'Please enter a last name',
  },
  jobTitle: {
    type: String,
    trim: true,
    required: 'Please enter a job title',
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
