//greet()->givemenu()->askorder()->givefood()->paybill()->byee()
//callback Hell helps in sequence execution of the code
//create the function for each
// function greet(cb){
//     console.log("hello sir/madam")
//     cb(askOrder) //giveMenu(cb)
// }
// function giveMenu(cb){
//     console.log("sir here is the menu");
//     cb(givefood) // askOrder(givefood)
// }
// function askOrder(cb){
//     console.log("order pls sir")
//     cb(paybill);
// }
// function givefood(cb_paybill){
//     console.log("sir here is the food");
//     cb_paybill(bye)
// }
// function paybill(cb){
//     console.log("sir/madam here is the bill");
//     cb();
// }
// function bye(){
//     console.log("thanks for visiting!!");
// }
// //using callbackFunction
// greet(giveMenu);


function greet(cb,data){
   let data1=data
   data1["step1"]="greet:true"
    console.log("hello sir/madam",data1)
    cb(askOrder,data1) //giveMenu(cb)
}
function giveMenu(cb,data1){
   let data2={...data1,step2:"giveMenu:true"}
    console.log("sir here is the menu",data2);
    cb(givefood,data2) // askOrder(givefood)
}
function askOrder(cb,data2){
    let data3={...data2,step3:"askOrder:true"}
    console.log("order pls sir",data3)
    cb(paybill,data3);
}
function givefood(cb_paybill,data3){
    let data4={...data3,step4:"givefood:true"}
    console.log("sir here is the food",data4);
    cb_paybill(bye,data4)
}
function paybill(cb,data4){
    let data5={...data4,step5:"paybilli:true"}
    console.log("sir/madam here is the bill",data5);
    cb(data5);
}
function bye(data5){
    let data6={...data5,step6:"bye:true"}
    console.log("thanks for visiting!!",data6);
}
//using callbackFunction
let data={} ;//let pass some data /info
greet(giveMenu,data);