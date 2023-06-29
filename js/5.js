const getAllPropValues = (arr, prop) => {
    const propValues = [];
    for (const obj of arr) {
      propValues.push(obj[prop]);
    }
    console.log(propValues);
    return propValues;
  };
  
  const names = [
    {
      name: "Anton",
    },
    {
      name: "Vasa",
    },
  ];
  
  getAllPropValues(names, "name");