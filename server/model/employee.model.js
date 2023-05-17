const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    empId: {type: String,require: true},
    fullname: {type: String, required: true},
    initials: {type: String, required: true},
    empName: {type: String,require: true},
    gender: {type: String, required: true},
    dob: {type: Date, required: true},
    email: {type: String, required: true},
    mobile: {type: String, required: true},
    designation: {type: String,require: true},
    empType: {type: String,require: true},
    joinedDate: {type: Date, required: true},
    experience: {type: String,require: true},
    salary: {type: String, required: true},
    note: {type: String, required: true}
}, {
    timestamps: true,
});

const Employee = mongoose.model('Employee',employeeSchema);
module.exports = Employee;