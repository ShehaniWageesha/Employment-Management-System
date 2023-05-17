/** @format */

import React, { Component } from 'react';
//import axios from 'axios';
import PropTypes from 'prop-types';
import { getSingleEmployee,updateEmployees } from '../../services/employee';
import 'react-datepicker/dist/react-datepicker.css';

class EditEmployees extends Component {
  state = {
    empName: '',
    empId: '',
    designation: '',
    empType: '',
    experience: ''
  };

  componentDidMount() {
    this.fetchEmployees();
   }
    
  fetchEmployees = async () => {
    try {
      
      const response = await getSingleEmployee(this.props.match.params.id);

     this.setState({
          empName: response.data.empName,
          empId: response.data.empId,
          designation: response.data.designation,
          empType: response.data.empType,
          experience: response.data.experience
        });
    
    } catch(e) {
      // error handling
    }
  }
  
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
    
    try{
      const response = await updateEmployees(this.props.match.params.id,employee);
      console.log(response.data);
    
    } catch(e) {
      // error handling
    }
  
    this.setState({ empName: '' });
    this.setState({ empId: '' });
    this.setState({ designation: '' });
    this.setState({ empType: '' });
    this.setState({ experience: '' });
    //window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Edit Employee Log</h3>
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
              className="form-control"
              value={this.state.empId}
              onChange={this.onChangeEmpId}
            />
          </div>
          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              className="form-control"
              value={this.state.designation}
              onChange={this.onChangeDesignation}
            />
          </div>
          <div className="form-group">
            <label>Employee Type</label>
            <input
              type="text"
              className="form-control"
              value={this.state.empType}
              onChange={this.onChangeEmpType}
            />
          </div>
          <div className="form-group">
            <label>Experience</label>
            <input
              type="text"
              className="form-control"
              value={this.state.experience}
              onChange={this.onChangeExperience}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Edit Employee Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
    
EditEmployees.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.any
     
    })
  }),
}
export default EditEmployees;
