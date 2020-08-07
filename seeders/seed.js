const mongoose = require('mongoose');
const Employee = require('../models/Employee');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/employee', {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const employeeSeed = [
  {
    firstName: 'Michael',
    lastName: 'Scott',
    jobTitle: 'Regional Manager',
  },
  {
    firstName: 'Dwight',
    lastName: 'Schrute',
    jobTitle: 'Sales',
  },
  {
    firstName: 'Jim',
    lastName: 'Halpert',
    jobTitle: 'Sales',
  },
  {
    firstName: 'Pam',
    lastName: 'Beesly',
    jobTitle: 'Sales',
  },
  {
    firstName: 'Ryan',
    lastName: 'Howard',
    jobTitle: 'Temp',
  },
  {
    firstName: 'Andy',
    lastName: 'Bernard',
    jobTitle: 'Sales',
  },
  {
    firstName: 'Stanley',
    lastName: 'Hudson',
    jobTitle: 'Sales',
  },
  {
    firstName: 'Kevin',
    lastName: 'Malone',
    jobTitle: 'Accounting',
  },
  {
    firstName: 'Meredith',
    lastName: 'Palmer',
    jobTitle: 'Product Oversight',
  },
  {
    firstName: 'Angela',
    lastName: 'Martin',
    jobTitle: 'Accounting',
  },
  {
    firstName: 'Oscar',
    lastName: 'Martinez',
    jobTitle: 'Accounting',
  },
  {
    firstName: 'Phyllis',
    lastName: 'Lapin',
    jobTitle: 'Sales',
  },
  {
    firstName: 'Kelly',
    lastName: 'Kapoor',
    jobTitle: 'Product Oversight',
  },
  {
    firstName: 'Creed',
    lastName: 'Bratton',
    jobTitle: 'Product Oversight',
  },
  {
    firstName: 'Toby',
    lastName: 'Flenderson',
    jobTitle: 'Human Resources',
  },
];

Employee.deleteMany({})
  .then(() => Employee.collection.insertMany(employeeSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
