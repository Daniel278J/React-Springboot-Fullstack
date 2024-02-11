import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailid: ''
        }
        this.changefirstNameHandler = this.changefirstNameHandler.bind(this);
        this.changelastNameHandler = this.changelastNameHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        
        let id = window.location.href;
        const last = id.lastIndexOf('/');
        //console.log(id.slice(last+1,id.length))
        id = id.slice(last+1,id.length);
        EmployeeService.getEmployeeById(id).then((res) =>{
            let employee = res.data;
            this.setState({firstName: employee.firstname, lastName: employee.lastname, emailid: employee.email})
        })
    }
    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstname: this.state.firstName,lastname: this.state.lastName,email: this.state.emailid};
        console.log('employee => ' + JSON.stringify(employee));

        const navigate = this.props.navigate;
        EmployeeService.updateEmployee(employee, this.state.id).then(res =>{
            navigate('/employees');
        })
        // const navigate = this.props.navigate;

        // EmployeeService.createEmployee(employee).then(res =>{
        //     navigate('/employees');
        // });
    }

    changefirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changelastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeemailHandler= (event) => {
        this.setState({emailid: event.target.value});
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className='text-center'>Add Employee</h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label >First Name: </label>
                                        <input type="text" placeholder='First Name' name='firstname' className='form-control' 
                                        value={this.state.firstName} onChange={this.changefirstNameHandler}/>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label >Last Name: </label>
                                        <input type="text" placeholder='Last Name' name='lastname' className='form-control' 
                                        value={this.state.lastName} onChange={this.changelastNameHandler}/>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label >Email Id: </label>
                                        <input type="text" placeholder='Email' name='email' className='form-control' 
                                        value={this.state.emailid} onChange={this.changeemailHandler}/>
                                    </div>
                                    <br />
                                    <button style={{'backgroundColor': "Green", 'color': 'white'}} className='btn btn-sucess' onClick={this.updateEmployee}>Save</button>
                                    <Link to='/employees'><button className='btn btn-danger' style={{marginLeft: "10px"}}>Cancel</button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;