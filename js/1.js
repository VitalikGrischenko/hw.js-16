const user = {
    name: 'John',
    age: 30,
    hobby: 'football',
    premium: true
  };
  
  user = {
    ...user,
    mood: 'happy'
  };

  user = {
    ...user,
    hobby: 'skydiving'
  };
  

  user = {
    ...user,
    premium: false
  };
  
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }