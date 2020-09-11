// 1 function without argument & without return type
// 2 function with argument & without return type
// 3 function without argument & with return type
// 4 function with argument & with return type

//console.log("hbvzdhcb "+(1+2)+"cnbvcnbvcb");
//function defination
function mul(){
    console.log(`
      multiplication is ${1+2} result   
    `);
}

//mul();//function call

function mul2(a:number,b:number){

    console.log(`
    -----------------------
    2 Function type ${a*b}
    -----------------------
    `);

}

//mul2(4,5);

function mul3(){
    return (9*9);
}

//var res=mul3();
/*
console.log(`===================
Value of res is ${res}
==============================
`);*/

function mul4(a:number,b:number):number{

    return (a*b);

}

console.log(`
+++++++++++++++++++++++++++++++++++++++++++
4 Function type  
result is ${mul4(5,5)}
`);




