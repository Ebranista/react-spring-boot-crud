import React , { Component} from 'react'
import EmployeeService from '../services/EmployeeService'

class CreateEmployeeComponent extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            //step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId:''
        }


        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeSecondnameHander = this.changeSecondnameHander.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    //step 3
    componentDidMount()
    {
        //step 4
        if(this.state.id === '_add')
        {
            return
        }
        else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) => {
                let employee = res.data;
                
                this.setState({firstName:employee.firstName,
                lastName:employee.lastName,
            emailId: employee.emailId
        });
            });
        }
    }

    saveOrUpdateEmployee = (e) => 
    {
e.preventDefault();
let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId:this.state.emailId};
console.log('employee => ' + JSON.stringify(employee));
//step 5
if(this.state.id === '_id')
{
    EmployeeService.createEmployee(employee).then(res  =>{
        this.props.history.push('/employee');
    });

}
else{
    EmployeeService.updateEmployee(employee,this.state.id).then(res => {
        this.props.history.push('/employee');
    });
}
    }


    changeFirstNameHandler = (event) => {
        this.setState({firstName:event.target.value});
    }

    changeSecondnameHander = (event) => {
        this.setState({lastName:event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value});
    }


    cancel()
    {
        this.props.history.push('/employee');
    }

    getTitle()
    {
        if(this.state.id === '_add')
        {
            return <h3 className="text-center">Add Employee</h3>
        }
        else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }


    render()
    {

        <div>
            <br></br>

            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            this.getTitle();
                        }


                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input placeholder="First Name" cl
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }


}