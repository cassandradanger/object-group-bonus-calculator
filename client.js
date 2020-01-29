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

console.log( employees );

// ## Processing Employee Bonuses

// Loop over the `employees` array and do the following:
// * use each employee object as the input to the function described below.
// * `console.log` the results of each iteration.

for (let i= 0; i < employees.length; i++){
  bonusCalculator(employees[i]);
}
// ## Function Logic

// Write a declared function that takes in one **Employee** object (as an argument to the function), and returns a new **object** with the following properties:

function bonusCalculator(employee){
  // console.log('this is employee', employee);
  let newObject = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  }

  // this block of code assigns bonus percentage to the new object
  if (employee.reviewRating <= 2){
    newObject.bonusPercentage = 0;
  } else if (employee.reviewRating == 3){
    newObject.bonusPercentage = .04;
  } else if (employee.reviewRating == 4){
    newObject.bonusPercentage = .06;
  } else if (employee.reviewRating == 5){
    newObject.bonusPercentage = .10;
  }

  if (employee.employeeNumber.length == 4 && employee.reviewRating > 2){
    newObject.bonusPercentage += .05;
  }
  
  if(employee.annualSalary > 65000){
    // bring bonusPercentage down .01;
    newObject.bonusPercentage -= .01;
  }

  if (newObject.bonusPercentage > .13){
    newObject.bonusPercentage = .13;
  } else if (newObject.bonusPercentage < 0){
    newObject.bonusPercentage = 0;
  }

  newObject.totalBonus = Number(employee.annualSalary) * newObject.bonusPercentage;
  newObject.totalCompensation = Number(employee.annualSalary) + newObject.totalBonus;

  console.log('final object', newObject);
}

// * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
// * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.

// ### Individual Bonus calculation
// - No bonus can be above 13% or below 0% total.

// NOTE: You may abstract out this bonus calculation into a second function if you like, but this is not mandatory.
