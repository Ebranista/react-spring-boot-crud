import axios from 'axios';

const EMPLOYEE_API_BASE_URl = 'http://localhost:8080/api/v1/employees';

class EmployeeSErvice{
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URl);
    }
    createEmployee(employee)
    {
        return axios.post(EMPLOYEE_API_BASE_URl,employee);
    }

    getEmployeeById(employeeId)
    {
        return axios.get(EMPLOYEE_API_BASE_URl,employeeId);
    }

    updateEmployee(employee,employeeId)
    {
        return axios.put(EMPLOYEE_API_BASE_URl + '/' + employeeId,employee);
    }

    deleteEmployee(employeeId)
    {
        return axios.delete(EMPLOYEE_API_BASE_URl + '/' + employeeId);
    }

}

export default new EmployeeSErvice();