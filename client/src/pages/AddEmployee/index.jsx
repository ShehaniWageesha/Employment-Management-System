/** @format */

import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addEmployees } from '../../services/employee';

class AddEmployee extends Component {
  state = {
    empId: parseInt(Date.now() * Math.random()),
    fullname: '',
    initials: '',
    empName: '',
    gender: '',
    dob: new Date(),
    email: '',
    mobile: '',
    designation: '',
    empType: '',
    joinedDate: new Date(),
    experience: '',
    salary: '',
    notes: ''
  };

  onChangeEmpId = (e) => {
    this.setState({
      empId: e.target.value,
    });
  };
  onChangeFullName = (e) => {
    this.setState({
      fullname: e.target.value,
    });
  };
  onChangeInitials = (e) => {
    this.setState({
      initials: e.target.value,
    });
  };
  onChangeEmpName = (e) => {
    this.setState({
      empName: e.target.value,
    });
  };
  onChangeGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };
  onChangeDOB = (dob) => {
    this.setState({
      dob: dob,
    });
  };
  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onChangeMobile = (e) => {
    this.setState({
      mobile: e.target.value,
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
  onChangeJoinedDate = (joinedDate) => {
    this.setState({
      joinedDate: joinedDate,
    });
  };
  onChangeExperience = (e) => {
    this.setState({
      experience: e.target.value,
    });
  };
  onChangeSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };
  onChangeNotes = (e) => {
    this.setState({
      notes: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const employee = {
      empId: this.state.empId,
      fullname: this.state.fullname,
      initials: this.state.initials,
      empName: this.state.empName,
      gender: this.state.gender,
      dob: this.state.dob,
      email: this.state.email,
      mobile: this.state.mobile,
      designation: this.state.designation,
      empType: this.state.empType,
      joinedDate: this.state.joinedDate,
      experience: this.state.experience,
      salary: this.state.salary,
      notes: this.state.notes
    };
    try {
      const response = await addEmployees(employee);
      // success scenario handle here
      if (response.data) {
        //  console.log(response.data);
      }
    } catch (ex) {
      // error handling
      // show proper error message to user
    }

    this.setState({ empId: '' });
    this.setState({ fullname: '' });
    this.setState({ initials: '' });
    this.setState({ empName: '' });
    this.setState({ gender: '' });
    this.setState({ dob: new Date() });
    this.setState({ email: '' });
    this.setState({ mobile: '' });
    this.setState({ designation: '' });
    this.setState({ empType: '' });
    this.setState({ joinedDate: new Date() });
    this.setState({ experience: '' });
    this.setState({ salary: '' });
    this.setState({ notes: '' });
  };

  render() {
    return (
      <div>
        <h3>Add New Employee</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label id={this.state.empId}></label>
            
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.fullname}
              onChange={this.onChangeFullName}
            />
          </div>
          <div className="form-group">
            <label>Initials</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.initials}
              onChange={this.onChangeInitials}
            />
          </div>
          <div className="form-group">
            <label>Prefered / Displayed Name</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.empName}
              onChange={this.onChangeEmpName}
            />
          </div>
          <div className="form-group" style={{ fontWeight: 'bold' }}>
            <label>Gender</label>
            <select
              required
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangeGender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group" style={{ fontWeight: 'bold' }}>
            <label>Date of Birth</label>
            <div>
              <DatePicker
                selected={this.state.dob}
                onChange={this.onChangeDOB}
                maxDate={new Date()}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.mobile}
              onChange={this.onChangeMobile}
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
          <div className="form-group" style={{ fontWeight: 'bold' }}>
            <label>Employee Type</label>
            <select
              required
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
          <div className="form-group" style={{ fontWeight: 'bold' }}>
            <label>Joined Date</label>
            <div>
              <DatePicker
                selected={this.state.joinedDate}
                onChange={this.onChangeJoinedDate}
                maxDate={new Date()}
              />
            </div>
          </div>
          <div className="form-group" style={{ fontWeight: 'bold' }}>
            <label>Experience</label>
            <select
              required
              className="form-control"
              value={this.state.experience}
              onChange={this.onChangeExperience}
            >
              <option value="Less than 01 Year">Less Than 1 Year</option>
              <option value="01 Year">01 Year</option>
              <option value="02 Years">02 Years</option>
              <option value="03 Years">03 Years</option>
              <option value="04 Years">04 Years</option>
              <option value="05 Years">05 Years</option>
              <option value="06 Years">06 Years</option>
              <option value="07 Years">07 Years</option>
              <option value="08 Years">08 Years</option>
              <option value="09 Years">09 Years</option>
              <option value="10 Years">10 Years</option>
              <option value="More than 10 Years">More than 10 Years</option>
            </select>
          </div>
          <div className="form-group">
            <label>Salary</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.salary}
              onChange={this.onChangeSalary}
            />
          </div>
          <div className="form-group">
            <label>Personal Notes</label>
            <textarea
              rows="4"
              cols="50"
              required
              className="form-control"
              value={this.state.notes}
              onChange={this.onChangeNotes}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Add People" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddEmployee;
