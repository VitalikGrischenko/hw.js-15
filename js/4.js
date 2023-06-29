function countTotalSalary(employees) {
    const salaries = Object.values(employees);
    let totalSalary = 0;
  
    for (const salary of salaries) {
      totalSalary += salary;
    }
  
    return totalSalary;
  }
  

  const employees = {
    John: 1000,
    Ann: 1500,
    Mike: 1200,
    Emily: 2000
  };
  
  console.log(countTotalSalary(employees));