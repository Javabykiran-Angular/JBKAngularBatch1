export class Simple{
    //property
    private firstname:string;
    public lastname:string;
    public id:number;


    constructor(fname:string,lname:string,id:number){
        this.firstname=fname;
        this.lastname=lname;
        this.id=id;
    }
    

    display(){
        console.log(`
        -------------Dispaly the Data----------------
        First name :: ${this.firstname}
        Last name :: ${this.lastname}
        Id        :: ${this.id}
        `);
    } 
    

}

// var myobj=new Simple("Sumit","Raokhande",1);
//     myobj.display();
    
export function add(a:number,b:number){
        return(a+b);
}

export var pi=3.14;


