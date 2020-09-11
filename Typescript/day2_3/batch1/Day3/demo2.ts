//annynonumous func
//func does not have a name
 
//func aliase name var temp
var temp = function (){
    console.log("first type function");

}

//temp();

var temp2=function (a:number,b:number){
    return (a+b);
}

//console.log("Addition is "+temp2(4,6));

//Arrow Function/fat arrow function
//it is advanced version of annynoumous func

var temp3= ()=>{
    console.log("Fat arrow function is called..");
}

//temp3();

var temp4= (a:number,b:number)=>{
    return (a+b);
}

//console.log("Func type 4 is called "+temp4(8,8));

//optional paramter function

function add(a:number,b?:number){

    return (a+b);
}

var res=add(2);
//console.log("Result is "+res);
//NAN- not a number



function add1(a:number,b?:number,c?:number){

    return (a+b);
}

var res1=add1(2,5);
//console.log("Result is "+res1);


var temp5= (a:number,b?:number)=>{
    return (a+b);
}

console.log("Result is ======"+temp5(1));








