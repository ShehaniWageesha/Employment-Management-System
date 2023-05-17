import { EMPLOYEE,ADD_EMPLOYEE,DELETE_EMPLOYEE,GET_EMPLOYEE,UPDATE_EMPLOYEE } from './client/endpoints';
import { Axios } from './client/index';

// get employees
export const getEmployees = () => {
  return Axios.get(EMPLOYEE);
};

// delete employees
export const deleteEmployee = (id) => {
  return Axios.delete(`${DELETE_EMPLOYEE}/${id}`);
};
//add employees
export const addEmployees = (employee) => {
  return Axios.post(ADD_EMPLOYEE,employee);
};

// get single employee
export const getSingleEmployee = (id) => {
  return Axios.get(`${GET_EMPLOYEE}/${id}`);
};

//update employee
export const updateEmployees = (id,employee) => {
  return Axios.post(`${UPDATE_EMPLOYEE}/${id}`,employee);
};
