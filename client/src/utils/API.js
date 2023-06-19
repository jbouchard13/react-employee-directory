import axios from "axios";

// file to handle data retrieval from database of employees

export default {
  // get all employees
  getEmployeeInfo: () => {
    return axios.get("/api/employees");
  },
  // get employees by job title
  getEmployeeByJobTitle: (jobTitle) => {
    return axios.get(`/api/employees/${jobTitle}`);
  },
  // add new employee
  addNewEmployee: (employeeData) => {
    return axios.post("/api/employees", employeeData);
  },
  // delete employee
  deleteEmployee: (employeeId) => {
    return axios.delete(`/api/employees/${employeeId}`);
  },
};
