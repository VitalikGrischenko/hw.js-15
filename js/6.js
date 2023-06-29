function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
  
    for (const product of allProducts) {
      if (product.name === productName) {
        totalPrice += product.price * product.quantity;
      }
    }
  
    return totalPrice;
  }
  

  const products = [
    { name: 'Keyboard', price: 25, quantity: 2 },
    { name: 'Mouse', price: 15, quantity: 3 },
    { name: 'Monitor', price: 200, quantity: 1 },
    { name: 'Headphones', price: 50, quantity: 4 }
  ];
  
  console.log(calculateTotalPrice(products, 'Keyboard'));
  console.log(calculateTotalPrice(products, 'Mouse'));
  console.log(calculateTotalPrice(products, 'Monitor'));
  console.log(calculateTotalPrice(products, 'Headphones'));
  console.log(calculateTotalPrice(products, 'Laptop'));