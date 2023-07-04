function findBestEmployee(employees) {
    const tasks = Object.values(employees);
    const maxTasks = Math.max(...tasks);
  
    for (const [employee, taskCount] of Object.entries(employees)) {
      if (taskCount === maxTasks) {
        return employee;
      }
    }
  }
  
  const employees = {
    John: 5,
    Jane: 8,
    Bob: 3,
    Mary: 10
  };
  
  const bestEmployee = findBestEmployee(employees);
  console.log(bestEmployee);