function countProps(obj) {
    return Object.keys(obj).length;
  }
  

  const user = {
    name: 'John',
    age: 30,
    hobby: 'reading'
  };
  
  console.log(countProps(user));