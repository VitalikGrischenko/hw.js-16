function countProps(obj) {
    const props = { ...obj };
    return Object.keys(props).length;
  }
  
  const user = {
    name: 'John',
    age: 30,
    hobby: 'football'
  };
  
  const propertyCount = countProps(user);
  console.log(propertyCount);
