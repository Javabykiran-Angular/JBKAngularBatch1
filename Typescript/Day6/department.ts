
export class Department{
    private role:string;

    constructor(role:string){
        this.role=role;
    }

    disp(){
        return (this.role);
    }    
}