import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../routes/route-paths';

const Employee = (props) => (
  <tr>
    <td>{props.employee.empId}</td>
    <td>{props.employee.empName}</td>
    <td>{props.employee.designation}</td>
    <td>{props.employee.empType}</td>
    <td>{props.employee.experience}</td>

    <td>
      <Link
        to={`${RoutePaths.edit}${props.employee._id}`}
        style={{ color: 'green', textDecoration: 'none', fontWeight: 'bold' }}
      >
        Edit
      </Link>
      <a
        style={{ textDecoration: 'none', fontWeight: 'bold', color: 'red' }}
        href="#"
        onClick={() => {
          Swal.fire({
            icon: 'success',
            title: 'Employee Data Deleted Successfully!',
          });
          props.deleteEmployee(props.employee._id);
        }}
      >
        <br />
        Delete
      </a>
    </td>
  </tr>
);

Employee.propTypes = {
  deleteEmployee: PropTypes.func,
  employee: PropTypes.shape({
    _id: PropTypes.any,
    empId: PropTypes.string,
    empName: PropTypes.string,
    designation: PropTypes.string,
    empType: PropTypes.string,
    experience: PropTypes.string,
  }),
};
export default Employee;
