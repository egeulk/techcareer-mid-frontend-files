const products = [
    {
      id: 10,
      name: "Product A",
      price: 19.99,
      discontinued: false
    },
    {
      id: 2,
      name: "Product B",
      price: 29.99,
      discontinued: true
    },
    {
      id: 3,
      name: "Product C",
      price: 14.99,
      discontinued: false
    },
    // Add more products as needed
  ];
  
  let sum=0
  products.forEach( (product) => {
      if( product.price>30) 
          sum++;
  } )
  console.log(sum);
  
  products.forEach( (product) => {
      if( product.name[0]=="a") 
          console.log([product]);
  } )
  
  products.forEach( (product) => {
      if( product.name[product.name.length-1]=="a") 
          console.log([product]);
  } )
  
  let productIdTen = products.find( (product) => product.id == 10)
  console.log(productIdTen);
  
  sum=0;
  products.forEach( (product) => {
      if( product.discontinued) 
         sum++;
  } )
  console.log(sum);
  
  
  sum=0;
  console.log("fff")
  const maxProduct = products.reduce( (prev, current) => {
      return (prev.price > current.price) ? prev : current
  }, products[0]);
  console.log(maxProduct);
  
  const minProduct = products.reduce( (prev, current) => {
      return (prev.price < current.price) ? prev : current
  }, products[0]);
  console.log(minProduct);
  