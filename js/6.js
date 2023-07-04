function calculateTotalPrice(allProducts, productName) {
    const product = allProducts.find(product => product.name === productName);
  
    if (product) {
      const { price, quantity } = product;
      return price * quantity;
    } else {
      return 0;
    }
  }
  
  const products = [
    { name: 'Laptop', price: 1000, quantity: 2 },
    { name: 'Phone', price: 500, quantity: 3 },
    { name: 'Headphones', price: 200, quantity: 4 }
  ];
  
  const productName = 'Phone';
  const totalPrice = calculateTotalPrice([...products], productName);
  console.log(totalPrice);