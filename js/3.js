function findBestEmployee(employees) {
    const entries = Object.entries(employees);
  
    if (entries.length === 0) {
      return "No employees found";
    }
  
    entries.sort((a, b) => b[1] - a[1]);
  
    return entries[0][0];
  }
  

  const employees = {
    John: 4,
    Ann: 7,
    Mike: 2,
    Emily: 5
  };
  
  console.log(findBestEmployee(employees));