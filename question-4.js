const alphaTech = [
    { name: 'Alice', age: 23, department: 'Engineering' },
    { name: 'Bob', age: 19, department: 'Design' }
  ];
  
  const betaSoft = [
    { name: 'Charlie', age: 28, department: 'Engineering' },
    { name: 'David', age: 17, department: 'Support' }
  ];
  
  const gammaDev = [
    { name: 'Eve', age: 25, department: 'Marketing' },
    { name: 'Faythe', age: 18, department: 'Engineering' },
    { name: 'Grace', age: 20, department: 'Engineering' }
  ];
  

const alphaTechWithCompany = alphaTech.map(employee => ({
  ...employee,
  company: "alphaTech"
}));

const betaSoftWithCompany = betaSoft.map(employee => ({
  ...employee,
  company: "betaSoft"
}));

const gammaDevWithCompany  = gammaDev.map(employee => ({
  ...employee,
  company: "gammaDev"
}));

const allEmployees = [...alphaTechWithCompany, ...betaSoftWithCompany, ...gammaDevWithCompany];
//console.log(allEmployees)

const result = allEmployees.filter((employee) => {
  return employee.department === 'Engineering' && employee.age >= 20;
}).map((employees) => {
  return {
    name: employees.name,
    company: employees.company
  };
});

console.log(result);
// [
//     { name: 'Alice', company: 'alphaTech' },
//     { name: 'Charlie', company: 'betaSoft' },
//     { name: 'Grace', company: 'gammaDev' }
// ]
  

