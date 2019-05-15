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

// console.log(employees);

//function loopArray to loop through the employees array and call the bonusCalculator function

function loopArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    bonusCalculator(arr[i]); //call the function by passing each individual employee object as argument
  }
}


//define the function
function bonusCalculator(employee) {

  let bonusPercentage = 0;

  //check the employee review rating and determine the 1st part of the bonus %
  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  } else if (employee.reviewRating === 3) {
    bonusPercentage = 0.04;
  } else if (employee.reviewRating === 4) {
    bonusPercentage = 0.06;
  } else if (employee.reviewRating === 5) {
    bonusPercentage = 0.10;
  }

  //check if tenure > 15y to determine the 2nd part of the bonus %
  if (employee.employeeNumber.length === 4) {
    bonusPercentage += 0.05;
  }

  //check annual income to determine the 3rd part of the bonus %
  if (employee.annualSalary > 65000) {
    bonusPercentage -= 0.01;
  }

  //check bonus % not higher than 13% and not lower than 0
  if (bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  } else if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  //create an empty object to return the result

  let newObj = {};

  //add key/value pairs into the object

  newObj.name = employee.name;
  newObj.bonusPercentage = (bonusPercentage * 100).toString() + '%';
  newObj.totalBonus = Math.round(employee.annualSalary * bonusPercentage);
  newObj.totalCompensation = Number(employee.annualSalary) + newObj.totalBonus; //annualSalary is string from original array

  //log result
  // console.log(newObj);

  displayObj(newObj);

}

//add jQuery

$(document).ready(buttonClick);

//click event
function buttonClick() {
  $('button').on('click', function() {
    $('ul').empty();
    loopArray(employees);
  });
}

//append result object to ul and display in browser
function displayObj(obj) {
  for(let key in obj) {
    let title = key.toUpperCase();
    $('ul').append('<li>' + title + ': ' + obj[key] + '</li>');
  } //loop through the object and display key/value pairs

  $('ul').append('<br>');
}





