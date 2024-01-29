//fetch() it is an inbuilt method which is used to get the JSON/information from
// the internet
/**
 * fetch("url") it gives the response object from the server
 * from the response we need to extract the object using response.json()which return the promise
 *
 */
// fetch("https://dummyjson.com/docs/products") //from the internet we get the promise
//   .then((response) => response.json()) //response from the server response.json() return a promise
//   .then((data) => console.log(data)); //here we get the data

// fetch("https://dummyjson.com/docs/products")
//   .then((responseServer) => {
//     console.log("this response from the server:", responseServer);
//     //from the response we need to extract the data
//     //.json() give the data object by using response
//     return responseServer; //this is a promise again
//   })
//   .then((data) => {
//     console.log(data);
//   })


//filter out the completed whose boolean value is true
// fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>{
//     console.log(response);
//     return response.json();
// }).then((data) =>{
//     //userId: 1, id: 1, title: 'delectus aut autem', completed: false
//    console.log(data) //here data is an array whichcontains the object
//    let tododata=data.filter((e,i) =>{
//     return e.completed===true
//    })
//    tododata.forEach((e,i,list) =>{
//     document.body.innerHTML +=`<p>${i} ${e.title}</p>`;
//    })
//    //document.body.innerHTML +=`<h1>${completedd.title}</h1>`;
// })


fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>{
    console.log(response);
    return response.json();
}).then((data) =>{
    //userId: 1, id: 1, title: 'delectus aut autem', completed: false
   console.log(data) //here data is an array whichcontains the object
   //filter the array
  let todoArr= data.filter((e) =>{
    return e.completed===true;
   })
   todoArr.forEach((e,i,l) =>{
   const tbody= document.getElementById("tbody-con");
   tbody.innerHTML +=`<tr><td>${e.userId}</td>
   <td>${e.id}</td>
   <td>${e.title}</td>
   <td>${e.completed}</td></tr>`
   })
})