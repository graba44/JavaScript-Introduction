/* EXERCISE 1 - Hello, object
1. Create an empty object user.
2. Add the property name with the value John.
3. Add the property surname with the value Smith.
4. Change the value of the name to Pete.
5. Remove the property name from the object. */

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

/* EXERCISE 2 - Check for emptiness
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. */

const isEmpty = (obj) => {
  for(let key in obj){
    console.log(false)
  }
  console.log(true);
}

/* EXERCISE 3 - Sum object properties
We have an object storing salaries of team. Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above. If salaries is empty, then the result must be 0. */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;

for(let key in salaries){
  sum += salaries[key];
}
console.log(sum);

/* EXERCISE 4 - Multiply numeric properties by 2
Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2. */

const multiplyNumeric = (obj) => {
  for(let key in obj){
    if(typeof(obj[key]) === 'number'){
      obj[key] *= 2;
    }
    console.log(key + ": " + obj[key]);
  }
}