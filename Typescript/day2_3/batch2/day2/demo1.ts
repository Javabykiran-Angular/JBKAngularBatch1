
var a;
//number(int,float,long double),string ('',""),boolean(true,false),any(number,string,boolean),null(object),undefined(is itself a value)
//default datatype is any

var a1:number=10;//forward declration & DEFINATION  
a1=2.5;

console.log("Value of A1 is "+a1);
var str:string='Sumit Raokhande';
console.log("Name is "+str);

var a2:any;
a2=10;
console.log("Current data Type of a2 "+typeof a2);
console.log("Current Value of a2 "+a2);
a2="Java by Kiran";
console.log("Current data Type of a2 "+typeof a2);
console.log("Current Value of a2 "+a2);

var a3:number;
console.log("---------------------------------------");
console.log("Value of A3 is "+a3);

//Operator
// airthematic(+,-,*,/,%),logical,bitwise,instance of, ternary,conditional,relational,post increment,pre increment

//ternary
//condition ? data1:data2
var a4= 4<2 ? 'hi':'bye';
console.log("ternary Operatior "+a4);

//control statement
// if,if-else,if-else if-else,switch
//loop for,while,do while
var a5=12;
var a6:number=20;

if(a5<a6){
    console.log("condition is true....");
}else{
    console.log("condition is false.....");
}

console.log("=====================================");
for (var i=0;i<4;i++){
    console.log("Value of i is "+i);
}
console.log("After For Loop Value of I is "+i);
i=8;
console.log("After For Loop Value of I is "+i);
//var has global scope
//let- scope has within that block
console.log("---------------------------------");
for(let j=0;j<4;j++){
    console.log("Value of j is "+j);
}
//console.log("value of j is "+j);
//let y=10;

//const work same as final
//const has global scope
const a7=20;
//a7=34;













