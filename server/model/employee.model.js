const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    empName: {type: String,require: true},
    empId: {type: String,require: true},
    designation: {type: String,require: true},
    empType: {type: String,require: true},
    experience: {type: String,require: true},
}, {
    timestamps: true,
});

const Employee = mongoose.model('Employee',employeeSchema);
module.exports = Employee;