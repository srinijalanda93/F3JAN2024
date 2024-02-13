/**
 * Adavace Js
 * 1.shallow copy
 * 2.Deep Copy
 */
/**
 * we know that non-primitive data type like Arrays and object stores the
 * references (memory allocation)
 * -if the user want the copy of Array/Object values not the reference we use
 * 1.ShallowCopy
 * 2.DeepCopy
 *
 */
/***
 * shallow copy used in two ways
 * 1.using spread operator
 * 2.Object.assign({},original_obj),Object.assign([],original_arr)
 */
/**
 * shallowCopy used to copy the Array/object having the "same values but different memory references"
 * shallowCopy denoted by spread operator (...)
 * The spread operator is used to remove the braces and separate each value by commas
 * DISADVANTAGES OF SHALLOW COPY
 * 1.shallow copy won't work the nested Arrays and nested object
 * because during the copy process it will copy the memory allocation not the values
 *
 */

/*

let original_array = [12, 34, 6, 8, 9, 10]; //here original_array reference is different #500
//let copy_array = [...original_array];//reference #600
let copy_array=Object.assign([],original_array)
console.log(copy_array);

let original_obj={
    name:"srinija landa",
    age:22,
    email:"ls@gmail.com",
    education:"honors"
}
console.log(original_obj);
//let copy_obj = {...original_obj};
let copy_obj =Object.assign({},original_obj);
console.log(copy_obj)

*/

//nested object
/**
 * the below example contains education as key value as array[] each index value contains an obj 
 * so during the shallow copy it will copy only the refernce
 * let original_obj = {
  name: "srinija landa",
  age: 22,
  email: "ls@gmail.com",
  education: [ #400,#401,#402] and whole arrray will have#500
};
 */
let original_obj = {
  name: "srinija landa",
  age: 22,
  email: "ls@gmail.com",
  education: [
    {
      schoolName: "svnhs",
      cgpa: 9.7,
    },
    {
      collegeName: "SGJC",
      Cgpa: 9.6,
    },
    {
      universityName: "SFC",
      cgpa: 9.37,
    },
  ],
};
//for this we use the Deep copy where it remove the reference of the nest array and nested object reference
/**DEEP COPY
 * for we use JSON.stringfiy(obj) => the given non-primitive into the string removing all the reference
 * JSON.prase(JSON.stringfiy(obj)) =>make to it original position but different memory allocations
 * 
 * DISADVANTAGE OF DEEP COPY 
 * deep copy used when there is nested obj/array
 * But it won't work for the method/function like Date,map,set,blob
 */
let copy_obj=JSON.parse(JSON.stringify(original_obj))
console.log(copy_obj);


let original_obj1 = {
    name: "srinija landa",
    age: 22,
    email: "ls@gmail.com",
    createdDate:new Date()
  };
  console.log(original_obj1);
  console.log(JSON.parse(JSON.stringify(original_obj1))) 
