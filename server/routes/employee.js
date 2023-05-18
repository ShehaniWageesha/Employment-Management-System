const router = require('express').Router();
let Employee = require('../model/employee.model');

router.route('/').get((req, res) => {
    Employee.find()
        .then(Employees => res.json(Employees))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/add').post((req, res) => {
    const empId = req.body.empId;
    const fullname = req.body.fullname;
    const initials = req.body.initials;
    const empName = req.body.empName;
    const gender = req.body.gender;
    const dob = Date.parse(req.body.dob);
    const email = req.body.email;
    const mobile = req.body.mobile;
    const designation = req.body.designation;
    const empType = req.body.empType;
    const joinedDate = Date.parse(req.body.joinedDate);
    const experience = req.body.experience;
    const salary = req.body.salary;
    const notes = req.body.notes;
    

    const newEmployee = new Employee ({
        empId,
        fullname,
        initials,
        empName,
        gender,
        dob,
        email,
        mobile,
        designation,
        empType,
        joinedDate,
        experience,
        salary,
        notes
    });

    newEmployee.save()
        .then(() => res.json('Employee added!'))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/:id').get((req, res) => {
    Employee.findById(req.params.id)
        .then(Employees => res.json(Employees))
        .catch(err => res.status(400).json('Error:' + err));

});
router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(Employees => res.json('Employees deleted'))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/update/:id').post((req, res) => {
Employee.findById(req.params.id)
.then(employee =>{
    employee.empId = req.body.empId;
    employee.fullname = req.body.fullname;
    employee.initials = req.body.initials;
    employee.empName = req.body.empName;
    employee.gender = req.body.gender;
    employee.dob = Date.parse(req.body.dob);
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.designation = req.body.designation;
    employee.empType = req.body.empType;
    employee.joinedDate = Date.parse(req.body.joinedDate);
    employee.experience = req.body.experience;
    employee.salary = req.body.salary;
    employee.notes = req.body.notes;
    
    employee.save()
        .then(() => res.json('Employee updated!!'))
        .catch(err => res.status(400).json('Error:' + err));

})
.catch(err => res.status(400).json('Error:' + err));

});

module.exports = router;