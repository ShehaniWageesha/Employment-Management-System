import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { RoutePaths } from '../../routes/route-paths';

const Employee = (props) => (
  <tr>
    <td>{props.employee.empId}</td>
    <td>{props.employee.fullname}</td>
    <td>{props.employee.initials}</td>
    <td>{props.employee.empName}</td>
    <td>{props.employee.gender}</td>
    <td>{props.employee.dob.substring(0, 10)}</td>
    <td>{props.employee.email}</td>
    <td>{props.employee.mobile}</td>
    <td>{props.employee.designation}</td>
    <td>{props.employee.empType}</td>
    <td>{props.employee.joinedDate.substring(0, 10)}</td>
    <td>{props.employee.experience}</td>
    <td>{props.employee.salary}</td>
    <td>{props.employee.notes}</td>

    <td>
      <Link
        to={`${RoutePaths.edit}${props.employee._id}`}
        style={{ color: 'green', textDecoration: 'none', fontWeight: 'bold' }}
      >
        Edit &nbsp;
      </Link>
      | |
      <a
        style={{ textDecoration: 'none', fontWeight: 'bold', color: 'red' }}
        href="#"
        onClick={() => {
          Swal.fire({
            icon: 'success',
            title: 'Data deleted successfully!',
          });
          props.deleteEmployee(props.employee._id);
        }}
      >
        &nbsp; Delete
      </a>
    </td>
  </tr>
);

Employee.propTypes = {
  deleteEmployee: PropTypes.func,
  employee: PropTypes.shape({
    _id: PropTypes.any,
    dob: PropTypes.shape({
      substring: PropTypes.dob,
    }),
    joinedDate: PropTypes.shape({
      substring: PropTypes.joinedDate,
    }),
    empId: PropTypes.string,
    fullname: PropTypes.string,
    initials: PropTypes.string,
    empName: PropTypes.string,
    gender: PropTypes.string,
    email: PropTypes.string,
    mobile: PropTypes.string,
    designation: PropTypes.string,
    empType: PropTypes.string,
    experience: PropTypes.string,
    salary: PropTypes.string,
    notes: PropTypes.string,
  }),
};
export default Employee;
