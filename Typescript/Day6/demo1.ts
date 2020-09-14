export class AngularClass{

    constructor(private fname:string,private lname:string){

    }

    display(){
        console.log(`
        --------Display the Data-------------------
            First Name is :: ${this.fname}
            Last name is :: ${this.lname}
        `);
    }

}
