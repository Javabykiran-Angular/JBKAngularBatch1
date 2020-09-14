import {Employee} from './employee';
import {Department} from './department';
export class EmployeeDetails implements Employee
{
    firstname: string;
    lastname: string;
    salary:number;
    //Department DeptRef;  In core java
     DeptRef:Department;


    constructor(fname:string,lname:string,salary:number,role:string){
        this.firstname=fname;
        this.lastname=lname;
        this.salary=salary;
        this.DeptRef=new Department(role); //It makes simple Object
    }


    display() {
        console.log(`
        ----------Dispaly The Information----------
            First name :: ${this.firstname}
            Last Name:: ${this.lastname}
            Salary is :: ${this.salary}
            Role is :: ${this.DeptRef.disp()}
        `);

        
    }

}