/**INTERVIEW ASKED QUESTION
 * Structured Clone
 * as we know the deep clone and shallow clone have some limitation
 * of copy of array/object
 * Structured Clone cover the Demerits of Deep clone is if it contains the function /methods
 *
 */
/**
 * making Own structured clone
 * cloning the object /array
 * NOTE:array typeof ==='object'
 */
/** using recurssion
 * step 1:check where the give it is an object or not
 * step 2 :if not return the object
 * step 3: convert the give object into the array using Object.entires(obj); =>which the arrays of arrays
 * step 4:take that array using map(item =>[item[0],recurrsion(item[i])]);
 * step 5:return that array=>covert that array into Object.fromEntires(arrayMap);
 * step 6:return that converted object(array).
 */

const obj_original = {
  a: "srinija", // ['a', 'srinija']
  age: 22,
  education: { d: 100 },
};
console.log("the original object :", obj_original);

// let arr=Object.entries(obj_original);
// console.log("the array of array is :",arr);

function myStructuredClone(obj_original) {
  const typeIs = typeof obj_original;
  //here the given object/array type is 'object' mean it is primitive dataType just return it
  if (typeIs !== "object" || obj_original === null) return obj_original;
  //convert the given object into array
  const arr_obj = Object.entries(obj_original); //give the array of array
  const clonednew_Arr = arr_obj.map((item) => [
    item[0],
    myStructuredClone(item[1]),
  ]);
  //convert the given clonedArr into Object form
  const clonedObj = Object.fromEntries(clonednew_Arr);
  return clonedObj;
}

const duplicateObj = myStructuredClone(obj_original);
console.log("the cloned one", duplicateObj);
duplicateObj.education.d = "st francis college for women";
console.log("the cloned changed", duplicateObj);

let array=["srinija", 9.32,['sfc','svnhs','sgjc']];
array[2][0]="college life"
console.log("the original array",array);


//for arrays some modification in the code..
function myStructuredClone1(obj_original) {
  const typeIs = typeof obj_original;
  //here the given object/array type is 'object' mean it is primitive dataType just return it
  if (typeIs !== "object" || obj_original === null) return obj_original;
  //NOTE:IF THE GIVEN IS ARRAY DO THIS
  if (Array.isArray(obj_original)) {
    //we need to clone only the values
    const clonedArr = obj_original.map((element) => myStructuredClone1(element));
    return clonedArr;
  }
  //convert the given object into array
  const arr_obj = Object.entries(obj_original); //give the array of array
  const clonednew_Arr = arr_obj.map((item) => [
    item[0],
    myStructuredClone(item[1]),
  ]);
  //convert the given clonedArr into Object form
  const clonedObj = Object.fromEntries(clonednew_Arr);
  return clonedObj;
}
let duplicateArr=myStructuredClone1(array);
console.log("the deep clone",myStructuredClone1(array));
duplicateArr[2][0]="life is so hard"
console.log(duplicateArr)