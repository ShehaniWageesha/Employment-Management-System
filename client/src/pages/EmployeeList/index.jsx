/** @format */

import React, { Component } from 'react';
import Employee from '../../components/Employee/index';
import { deleteEmployee, getEmployees } from '../../services/employee';

class EmployeesList extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.fetchEmployees();
  }

  fetchEmployees = async () => {
    try{
      const response = await getEmployees();

      this.setState({ employees: response.data || [] });
    
    } catch(e) {
      // error handling
    }
  }

  removeEmployee = async (id) => {
    try {
      const response = await deleteEmployee(id);

      // check response validation and success logic
      if (response.data) {
        this.setState({
          employees: this.state.employees.filter((el) => el._id !== id),
        });
      }

    } catch(e) {
      // error handling
    }
  }

  employeesList() {
    return this.state.employees.map((currentemployee) => {
      return (
        <Employee
          employee={currentemployee}
          deleteEmployee={this.removeEmployee}
          key={currentemployee._id}
        />
      );
    });
  }
 
  render() {
    return (
      <div>
        <h3>Employee List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Designation</th>
              <th>Type</th>
              <th>Experience</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.employeesList()}</tbody>
        </table>
      </div>
    );
  }
}

export default EmployeesList;
