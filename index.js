const input = require('readline-sync');
let str = "LaunchCode";



//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newString = str.slice(0,3);
let otherString = str.slice(3, str.length);



//Use a template literal to print the original and modified string in a descriptive phrase.

let myString = `Latin: ${otherString}${newString}` ;
console.log(myString);


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let index1 = input.question("How many characters to change?");
index1 = Number(index1);

 newString = str.slice(0, index1);
 otherString = str.slice(index1, str.length);
 newString = `Latin: ${otherString} ${newString}`;
console.log(newString);

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

let errorMessage = "";
if (index1 > str.length) {
  index1 = 3;
  errorMessage = "This is an error!";
}
