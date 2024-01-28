//using the promise chain 
//step 1 :remove all the cb


function greet() {
    return new Promise((reslove,reject) =>{
        //setTimeOut
        setTimeout(() => {
            reslove("hello sir/madam")
        }, 1000);
    })
 // console.log("hello sir/madam");
 
}
function giveMenu() {
    return new Promise((reslove,reject) =>{
        //setTimeOut
        setTimeout(() => {
            reslove("sir/madam here is the menu")
        }, 1500);
    })
 // console.log("sir here is the menu");
 
}
function askOrder() {
    return new Promise((reslove,reject) =>{
        //setTimeOut
        setTimeout(() => {
            reslove("order pls sir")
        }, 2000);
    })
  //console.log("order pls sir");
  
}
function givefood() {
    return new Promise((reslove,reject) =>{
        //setTimeOut
        setTimeout(() => {
            reslove("sir here is the food")
        }, 2500);
    })
 // console.log("sir here is the food");
  
}
function paybill() {
    return new Promise((reslove,reject) =>{
        //setTimeOut
        setTimeout(() => {
            reslove("sir here is the bill")
        }, 1000);
    })
  //console.log("sir/madam here is the bill");
  
}
function bye() {
    return new Promise((reslove,reject) =>{
        //setTimeOut
        setTimeout(() => {
            reslove("thanks for visiting!!")
        }, 500);
    })
  //console.log("thanks for visiting!!");
}
//using callbackFunction
//greet(giveMenu);

greet().then((data) =>{
    console.log("the data1:",data);
    return giveMenu()
}).then((data)=>{
    console.log("the data2:",data)
    return askOrder()
}).then ((data) =>{
    console.log("the data3:",data);
    return givefood()
}).then((data)=>{
    console.log("the data4:",data);
    return paybill()
}).then((data) =>{
    console.log("the data5:",data);
    return bye();
}).then((databye) =>{
    console.log("the data6:",databye);
}).catch((error) =>{
    console.log("the error :",error);;
})
