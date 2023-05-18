const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    empId: {type: String,require: true},
    fullname: {type: String, required: true},
    initials: {type: String, required: true},
    empName: {type: String},
    gender: {type: String},
    dob: {type: Date},
    email: {type: String},
    mobile: {type: String},
    designation: {type: String},
    empType: {type: String},
    joinedDate: {type: Date},
    experience: {type: String},
    salary: {type: String},
    notes: {type: String}
}, {
    timestamps: true,
});

const Employee = mongoose.model('Employee',employeeSchema);
module.exports = Employee;