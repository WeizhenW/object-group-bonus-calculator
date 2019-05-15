const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
//looping through the employees array

for(let i = 0; i < employees.length; i ++) {
  bonusCalculator(employees[i]); //call the function by passing each individual employee object as argument
}

//define the function
function bonusCalculator(employee) {

  let bonusPercentage = 0;

  //check the employee review rating and determine the 1st part of the bonus %
  if(employee.reviewRating <= 2) {
    bonusPercentage = 0;
  } else if(employee.reviewRating === 3) {
    bonusPercentage = 0.04;
  } else if(employee.reviewRating === 4) {
     bonusPercentage = 0.06;
  } else if (employee.reviewRating === 5) {
     bonusPercentage = 0.10;
  }

  //check if tenure > 15y to determine the 2nd part of the bonus %
  if(employee.employeeNumber.length === 4) {
    bonusPercentage += 0.05;
  }

  //check annual income to determine the 3rd part of the bonus %
  if(employee.annualSalary > 65000) {
    bonusPercentage -= 0.01;    
  }

  //check bonus % not higher than 13% and not lower than 0
  if(bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  } else if(bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  //create an empty object to return the result

  let newObj = {};

  //add key/value pairs into the object

  newObj.name = employee.name;
  newObj.bonusPercentage = bonusPercentage;
  newObj.totalBonus = Math.round(employee.annualSalary * bonusPercentage);
  newObj.totalCompensation = Number(employee.annualSalary) + newObj.totalBonus; //annualSalary is string from original array

  //return result
  console.log(newObj);
  
}



