function countTotalSalary(employees) {
    const salaries = Object.values(employees);
    const totalSalary = [...salaries].reduce((sum, salary) => sum + salary, 0);
    return totalSalary;
  }
  
  const employees = {
    John: 2000,
    Jane: 3000,
    Bob: 2500,
    Mary: 3500
  };
  
  const totalSalary = countTotalSalary(employees);
  console.log(totalSalary);