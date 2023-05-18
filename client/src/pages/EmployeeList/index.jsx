/** @format */

import React, { Component } from 'react';
import Employee from '../../components/Employee/index';
import EmployeeTable from '../../components/Employee/table';
import { deleteEmployee, getEmployees } from '../../services/employee';

class EmployeesList extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.fetchEmployees();
  }

  fetchEmployees = async () => {
    try {
      const response = await getEmployees();

      this.setState({ employees: response.data || [] });
    } catch (e) {
      // error handling
    }
  };

  removeEmployee = async (id) => {
    try {
      const response = await deleteEmployee(id);

      // check response validation and success logic
      if (response.data) {
        this.setState({
          employees: this.state.employees.filter((el) => el._id !== id),
        });
      }
    } catch (e) {
      // error handling
    }
  };

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

  employeeList() {
    return this.state.employees.map((currentemployee) => {
      return (
        <EmployeeTable
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
        <h4>People</h4>
        <hr></hr>
        <br />
        <div>
          <div style={{ width: '270px' }}>
            <div
              className="form-group"
              style={{ fontWeight: 'bold', color: '#0b7fab', float: 'left' }}
            >
              <select
                className="form-control"
                value={this.state.empType}
                onChange={this.onChangeEmpType}
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract Basis">Contract Basis</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <a href="http://localhost:3000/create">
              <input
                type="button"
                value="Add People"
                className="btn btn-primary"
                style={{
                  float: 'right',
                  borderColor: '#0b7fab',
                  backgroundColor: '#0b7fab',
                  color: '#FFFFFF',
                }}
              />
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <table className="table table-bordered table-hover table-md text-center">
          <thead className="thead-light">
            <tr>
              <th className="w-30">Display Name</th>
              <th className="w-30">Emp ID</th>
              <th className="w-30">Designation</th>
              <th className="w-30">Emp. Type</th>
              <th className="w-30">Experience</th>
              <th className="w-30"></th>
            </tr>
          </thead>
          <tbody>{this.employeeList()}</tbody>
        </table>
      </div>
    );
  }
}

export default EmployeesList;
