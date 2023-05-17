/** @format */

import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { addEmployees } from '../../services/employee';
class CreateEmployee extends Component {
  state = {
    empName: '',
    empId: '',
    designation: '',
    empType: '',
    experience: ''
  };

  onChangeEmpName = (e) => {
    this.setState({
      empName: e.target.value,
    });
  };
  onChangeEmpId = (e) => {
    this.setState({
      empId: e.target.value,
    });
  };
  onChangeDesignation = (e) => {
    this.setState({
      designation: e.target.value,
    });
  };
  onChangeEmpType = (e) => {
    this.setState({
      empType: e.target.value,
    });
  };
  onChangeExperience = (e) => {
    this.setState({
      experience: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const employee = {
      empName: this.state.empName,
      empId: this.state.empId,
      designation: this.state.designation,
      empType: this.state.empType,
      experience: this.state.experience
    };
    try {
      const response = await addEmployees(employee);
      // success scenario handle here
      if (response.data) {
      //  console.log(response.data);
      }

    } catch(ex) {
      // error handling
      // show proper error message to user
    }
   
    this.setState({ empName: '' });
    this.setState({ empId: '' });
    this.setState({ designation: '' });
    this.setState({ empType: '' });
    this.setState({ experience: '' });
  };

  render() {
    return (
      <div>
        <h3>Create New Employee Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Employee Name</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.empName}
              onChange={this.onChangeEmpName}
            />
          </div>
          <div className="form-group">
            <label>Employee Id</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.empId}
              onChange={this.onChangeEmpId}
            />
          </div>
          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.designation}
              onChange={this.onChangeDesignation}
            />
          </div>
          <div className="form-group">
            <label>Employee Type</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.empType}
              onChange={this.onChangeEmpType}
            />
          </div>
          <div className="form-group">
            <label>Experience</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.experience}
              onChange={this.onChangeExperience}
            />
          </div>          
          <div className="form-group">
            <input
              type="submit"
              value="ADD EMPLOYEE"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateEmployee;
