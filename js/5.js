function getAllPropValues(arr, prop) {
    const propValues = [];
  
    for (const obj of arr) {
      if (prop in obj) {
        propValues.push(obj[prop]);
      }
    }
  
    return propValues;
  }
  
  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Headphones', price: 200 }
  ];
  
  const prices = getAllPropValues(products, 'price');
  console.log(prices);