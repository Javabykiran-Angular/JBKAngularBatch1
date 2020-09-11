//Anonynomous function

//function does not any name
//function aliase name var temp
var temp=function (){
    console.log("First type of Function is called...");
}

//temp();

var temp1=function (a:number,b:number ){
    return (a*b);
}

var res=temp1(5,3);
// console.log(`
//     -----------------------------
//     value of res is ${res}
// `);

//Arrow function/fat arrow function

var temp2=()=>{
    console.log("First fat arrow function....");    
}

//temp2();

var temp3=()=>{
    return (2*2);
}

console.log(`
-------------------------------------
 Implment function type 3 using fat arrow function
  ${temp3()}
`);

//optional parameter function

function add(a:number,b?:number){
    return (a+b);
}

var res2=add(3);
//console.log(`value of res2 is ${res2}` );
//NAN= Not a number

function add1(a:number,b?:number,c?:number){
        
    return (a+b);
}

var res3=add(3);
//console.log(`value of res2 is ${res3}`);


var temp4=(a:number,b?:number)=>{
    console.log(`
    ===========================================
    Value of a is ${a}
    Value of b is ${b}
    Result is ${a+b}
    `);
}
//temp4(9);

//default parameter function
//assign a value to paramter by default internally it acts as optional parameter function

function add3(a:number=9,b:number=6){

    console.log(`
    ==============================
    Addition is using default parameter funct
                ${a+b}
    `);
}
add3(2);
add3(6,4);
add3();

//Rest Parameter Function






