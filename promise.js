/**
 * concept :promise and it's significants
 * 
 */

/**
 * promise is used to overcome the demerits of callBack hell
 * promise is used to fetch the data at give time (setTimeout) to minic
 * Promis is an object which describe the evetually completion of the tast
 * can be  FULLFILLED OR REJECTED blw this two states we need to wait(PENDING)
 * 
 * 
 */
//CREATION OF PROMISES IN 2 WAY 
/***
 * 1.using the function
 * 2.using the const keyword
 */
// const promise=new Promise((reslove,reject) =>{
//     //set the time to minic it
//     setTimeout(() =>{
//        // reslove("hey bro here is ur data");
//        reject("message :oops cann't find the data")
//     },2000)
// })
//console only the promise by default alway in pending state
//console.log('Inital promise:',promise);

//for we can minic using the setTimeout which is the bad practice again
// setTimeout(() => {
//     console.log('fullfilled promise:',promise);
// }, 3000);


//once the data get resloved then we need to get the data using then keyword
//and the rejecting part is handled by the catch or eles we get uncaught error
// promise.then((data) =>{
//     console.log("using then:",data);
// }).catch((error) =>{
//     console.log("the Error is :",error);
// })

//using the function
function mypromise1(){
    //alway remember return the promise
    return new Promise((reslove,reject) =>{
        setTimeout(() => {
            reslove({name:"srinija",study:'honors',age:21})
        }, 3000);
    })
}
//test here what is type of the above function
console.log("the type of the function is:",typeof(mypromise1())); //retrun of the resolve data/promis
console.log("the type of the function is:",typeof(mypromise1)); //function reference

//HANDLING THE MULTIPLE PROMISE USING FUNCTIONS
function mypromise2(){
    //alway remember return the promise
    return new Promise((reslove,reject) =>{
        setTimeout(() => {
            reslove({name:"saisudha",study:'MBBS',age:20})
        }, 2300);
    })
}
function mypromise3(){
    //alway remember return the promise
    return new Promise((reslove,reject) =>{
        setTimeout(() => {
            reslove({name:"shimala",study:'law',age:25})
        }, 1000);
    })
}

function mypromise4(){
    //alway remember return the promise
    return new Promise((reslove,reject) =>{
        setTimeout(() => {
            reslove({name:"heija",study:'Barch',age:24})
        }, 2000);
    })
}

//using the promise chaining
mypromise1().then((data1)=>{
    console.log("the data1 is=",data1)
    //here i will return a function
    return mypromise2();
}).then((data2) =>{
    console.log("the data2 is=",data2)
    return mypromise3();
}).then((data3) =>{
    console.log("the data3 is=",data3)
    return mypromise4();
}).then((data4) =>{
    console.log("the data4 is=",data4) 
}).catch((error)=>{
    console.log("error occured :",error)
})
//if any error occured in any Promise the error/rejected through to catch where it will handle the error part 