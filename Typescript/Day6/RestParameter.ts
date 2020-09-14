//Rest parameter Function
//...

//Basic 4th type func with arg & with return type

function disp(...item:number[]){
    console.log("Display the Array Value "+item.join(" "));
}

// disp(2,3);
// disp(7,8,9,4,5,6,);


function disp1(a:string,...item:any[]){
    console.log("Value of a is "+a);
    console.log("Display the Array Value "+item.join(" "));
}

disp1('dfnvx',2,3,4,'sumit raokhande',true);




