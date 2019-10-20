// All my variables 
let userSetChars = [];
let userPassword = [];

// all my arrays for numbers , Uppercase letters, Lower case letters, & the special characters
  let numChars = "0123456789";
	let uppChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let lowChars = "abcdefghiklmnopqrstuvwxyz";
  let speChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 
//Prompts to ask user to choose a password length and confirming how to customize it
function generate() {
let length = prompt("Choose a length for the password. Anywhere between 8-128 Characters");

console.log(length);

let nChars = confirm("Click true if you would like to add numbers into your password");
if (nChars) {
 userSetChars.push(...numChars);
}
console.log(userSetChars)
let uChars = confirm("Click true if you would like to add Uppercase letters in your password");
if (uChars) {
    userSetChars.push(...uppChars);
  }
console.log(userSetChars)
let lChars = confirm("Click true if you would like to add lowercase letters to your password");
if (lChars) {
    userSetChars.push(...lowChars);
  }
console.log(userSetChars);
let sChars = confirm("Click true if you would like to add special characters to your password")
  if (sChars) {
    userSetChars.push(...speChars);
  } else { alert("You have to choose at least one set parameter if you want a secure password!");
  }
console.log(userSetChars)



//  for loop to generate the random password 

for (let i = 0; i < length; i++) {
userPassword.push(userSetChars[Math.floor(Math.random() * userSetChars.length)]);
 console.log(userPassword.join(''));
}
// getting the element by id and passing the new generated password to the text area
document.getElementById("password").value = userPassword;
//  alert("Your new password is:   " + userPassword.join(''));
}
// created a new function to copy to the new password to the clipboard
function copy() {
document.getElementById("password").select();
document.execCommand("Copy");
// lastly alerting the user of their new secure password!
alert("Your new secure password has been copied to the clipboard! Remember to delete your clipboard after!");
}


 





