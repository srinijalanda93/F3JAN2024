/**
 *
 * Structured clone covers the disadvantage of the deep copy
 * used to create the copy of the objects which contains the complex nested and function 
 * SYNTAX OF structured clone structuredClone(original_obj)
 * 
 */
/** asked for interviews under the this keyword
 * call 
 * apply
 * bind
 */
let original_obj1 = {
    name: "srinija landa",
    age: 22,
    email: "ls@gmail.com",
    createdDate:new Date(),
    getdetails:function(){
        console.log(`my NAME is ${this.name} and email id is ${this.email}`)
    }
  };
  console.log(original_obj1);
//   let copy_clone=structuredClone(original_obj1);
//   console.log(copy_clone);

  //this keyword is used when there to reference the this value of object
  //console.log(this) //reference to the window
  //if the this keyword is mentioned in any function during invoking the function 
  //the object which ever it is invoking function the keyword "this" point to that object
 console.log(original_obj1.getdetails()) //as the original_obj1 is invoking the getdetails-->original_obj1.
 //the above line is not returning anything

 /**
  * using of call,apply,bind
  * whenever we create the objects(obj1) we define key:value sometime function 
  * using obj1 we can invokes the function 
  * but using the obj2 we need to invoke the function present in obj1
  * at that time we "call"
  */
 /**
  * call method is used that the object(obj2) which need to invoke the other object(obj1) function we use call to pretend
  *  that object(obj1)
  */
 let student1={
    name:'ls',
    course:"bsc",
    rollno:25,
    semester:"2nd",
    email:'ls@fmail.com',
    getNc:function(hobbies,favpop){
        console.log(`favourite kpop ${favpop}`)
        console.log(`the name is ${this.name} and study of stream is ${this.course} and hobbies are ${hobbies}`)
    },
    getdetails:function(){
      console.log(`the name is ${this.name} and study of stream is ${this.course}`)
    //  console.log( this.getNc);
        console.log(`the Rollno is ${this.rollno} and semester is ${this.semester}`)
    }
 }
 let student2={
    name:'sudha',
    course:"MBBS",
    rollno:2125,
    semester:"1st",
    email:'sudha@fmail.com'
 }
 let student3={
    name:'sumaja',
    course:"BTECH",
    rollno:2523,
    semester:"4th",
    email:'sumaja@fmail.com',
 }
 let student4={
    name:'chandu',
    course:"BA",
    rollno:2523,
    semester:"2nd",
 }
 //for using the call method
 //object1.object1_function.call(obj2,parameteroffunctionobject1,...)
//  student1.getNc.call(student2);
//  student1.getdetails.call(student3);
//  student1.getdetails.call(student2);
//  student1.getdetails.call(student4);
 student1.getdetails.call(student1);
   student1.getNc.call(student2,"singing","BTS");


 /**
  * using of apply method 
  * it is simialr to the call method but instead of thake the parameters of function separated by commas 
  * apply method take it as string
  */
 student1.getNc.apply(student2,["singing","BTS"]); //takes in the form of array
 student1.getNc.apply(student3,["dancing","BTS"]); 
 student1.getNc.apply(student4,["eating","BTS"]); 
 student1.getNc.apply(student1,["sleeping","BTS"]); 
 student1.getNc.apply(student3,["yoga","BTS"]); 

 //instead of writing the huge code annoying so we call go to the BIND method
//  let callmels= student1.getNc.bind(student1,"sleeping","BTS");
//  console.log(callmels());

 let callmels = student1.getNc.bind(student1, "sleeping", "BTS");

// Calling the newly created function
callmels();
callmels();
callmels();
callmels();
callmels();



