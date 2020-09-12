var jsonobj={
    status:"success",
    data:[
        {
            name:"motorola",
            prize:10000,
            quantity:2,
            description:"Good Product",            
        },
        {
            name:"LG",
            prize:20000,
            quantity:1,
            description:"Life's Good"
        },
        {
            name:"Samsung",
            prize:20000,
            quantity:2,
            description:"Good Product"
        }
    ],
    error:"Invalid data"
};

console.log("Status is "+jsonobj.status);
console.log("Status is "+jsonobj.error);
console.log("-----------------------------");

for(let i=0;i<jsonobj.data.length;i++){
    console.log(`
       Name is ${jsonobj.data[i].name}
       prize is ${jsonobj.data[i].prize}
       description ${jsonobj.data[i].description}
       --------------------------------------------
    `);
}


