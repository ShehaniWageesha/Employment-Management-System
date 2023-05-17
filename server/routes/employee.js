const router = require('express').Router();
let Employee = require('../model/employee.model');

router.route('/').get((req, res) => {
    Employee.find()
        .then(Employees => res.json(Employees))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/add').post((req, res) => {

    const empName = req.body.empName;
    const empId = req.body.empId;
    const designation = req.body.designation;
    const empType = req.body.empType;
    const experience = req.body.experience;

    const newEmployee = new Employee ({
        empName,
        empId,
        designation,
        empType,
        experience
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

    employee.empName = req.body.empName;
    employee.empId = req.body.empId;
    employee.designation = req.body.designation;
    employee.empType = req.body.empType;
    employee.experience = req.body.experience;
    
    employee.save()
        .then(() => res.json('Employee updated!!'))
        .catch(err => res.status(400).json('Error:' + err));

})
.catch(err => res.status(400).json('Error:' + err));

});

module.exports = router;