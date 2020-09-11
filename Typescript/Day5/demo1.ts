var a=[10,20,30,40];
//for each
//we send parameter in fat arrow function it is called callback function

// a.forEach((value,i)=>{
//     console.log("value is "+value+" Index is "+i);
// });

var a1=[];
//2 ways u can insert value in it
// 1 LIFO principal Stack work on LIFO
//push & pop

a1.push(20);
a1.push(30);
//console.log("---------------------------");
//console.log("print the array  "+a1.join('  '));
a1.push(40);
//console.log("print the array  "+a1.join('  '));
var pop1=a1.pop();
// console.log(`
// Poped Value is ${pop1}
// Array is ${a1.join('  ')}
// `);

var a2:number[]=[2,20,6,5];
//splice function

a2.splice(1,0,30);
// console.log(a2);
a2.splice(2,1);
// console.log(a2);
a2.splice(1,2);
// console.log(a2);
a2.splice(1,1,10,20,30,40);
// console.log(a2);
//slice
//It is copied a particular data from array & makes new array
var temp1=a2.slice(1,3);
// console.log(`
// -----------------------------------
// Original Array ${a2}
// Copied array is ${temp1}
// `);

var temp2=a2.slice(1,1);
// console.log(`
// -----------------------------------
// Original Array ${a2}
// Copied array is ${temp2}
// `);
var temp3=a2.slice();
// console.log(`
// -----------------------------------
// Original Array ${a2}
// Copied array is ${temp3}
// `);

//map method
//map=> array element by element operation perform
var a3=[2,3,4,5];
var temp2=a3.map((myvalue)=>{
    return (myvalue*myvalue);
});

// console.log(`
// Original array ${a3}
// Square array is ${temp2}
// `);

//tuple => multiple data type value we can insert it
var a4=[10,'Sumit Raokhande',3.14];
// a4.push(true);
console.log(a4.join(' '));

var a5:(number|string)[]=[3,20,'Anjali','Angualr 8',3.14];









