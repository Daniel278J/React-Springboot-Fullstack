import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';


class listEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee() {
        console.log('reroutes done')
    }
    
    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className="row">
                <Link  to="/addemployee"><button className='btn btn-primary'>Add Employee</button></Link>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td> {employee.firstname} </td>
                                        <td> {employee.lastname} </td>
                                        <td> {employee.email} </td>
                                        <td>
                                            <Link to={`/update-employee/${employee.id}`}><button className='btn btn-info'>Update</button></Link>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default listEmployeeComponent;