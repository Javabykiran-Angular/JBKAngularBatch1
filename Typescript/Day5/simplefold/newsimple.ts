export class NewSimple{
    name:string;
    salary:number;
    role:string;

    constructor(name,salary,role){
            this.name=name;
            this.salary=salary;
            this.role=role;
    }

    display(){
console.log(`
           -------------------
           name is ${this.name}
           salary is ${this.salary} 
           role is ${this.role}
`);

    }



}