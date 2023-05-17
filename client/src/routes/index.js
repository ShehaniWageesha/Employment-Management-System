/* eslint-disable import/order */
/** @format */
import React from 'react';
import { Route } from 'react-router-dom';
import EmployeesList from '../pages/EmployeeList';
import { RoutePaths } from './route-paths';
// eslint-disable-next-line import/order
import AddEmployee from '../pages/AddEmployee';
import EditEmployees from '../pages/EditEmployee';

const Routes = () => {
  const paths = RoutePaths;

  return (
    <>
      <Route path="/" exact component={EmployeesList} />
      <Route path={`${paths.edit}:id`} component={EditEmployees} />
      <Route path={paths.create} component={AddEmployee} />
    </>
  );
};

export default Routes;
