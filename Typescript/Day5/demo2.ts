//object (json)
//json object java script object notation
// key & value format
//dot notation used
//square notation 
var myjson={
    fname:"Sumit",
    lname:'Raokhande',
    id:5
};

//dot notation
// console.log("First name is "+myjson.fname);
// console.log("last name is "+myjson.lname);
// console.log("ID is "+myjson.id);

// console.log("------------------------------------------");
// //square notation
// console.log("First name is "+myjson['fname']);
// console.log("last name is "+myjson['lname']);
// console.log("ID is "+myjson['id']);

var myjson2={
    fname:"sumit",
    lname:"Raokhande",
    id:4,
    fullname:(firstname,lastname)=>{
        return (firstname+" "+lastname);
    }
}
// console.log("Full Name is "+myjson2.fullname(myjson2.fname,myjson2.lname));

//Array of Object
var samsung=[
    {
        name:"xyz",
        prize:10000,
        quantity:2,
        description:'hcshdvamshdcvhdc'
    },
    {
        name:"pqr",
        prize:20000,
        quantity:1,
        description:'hcshdvamshdcvhdc'
    },
    {
        name:"pqr",
        prize:20000,
        quantity:1,
        description:'hcshdvamshdcvhdc'

    }

];
//Using for loop display values of array of object

console.log(`
   Zeroth index value is 
   name is  :: ${samsung[0].name} 
   prize is  :: ${samsung[0]['prize']} 
   description is  :: ${samsung[0].description} 

`);












