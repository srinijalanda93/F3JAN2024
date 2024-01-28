fetch("https://dummyjson.com/docs/products")
  .then((response) => response.json())
  .then((data) => console.log(data));
