// FirstComponentWrapper.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreateEmployeeComponent from './CreateEmployeeComponent';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';

const CreateEmployeeComponentwn = () => {
  const navigate = useNavigate();
  <UpdateEmployeeComponent navigate={navigate}/>
  return <CreateEmployeeComponent navigate={navigate} />;
};

export default CreateEmployeeComponentwn;
