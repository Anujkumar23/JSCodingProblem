//    1. Airst we created a reverseString Function which takes a parameter.
//    2. Then inside that function we created a empty variable
//    3. Te will itrate for loop over "Str" variable
//    4. The itration start from the last index until 0 to get a reverse string.
//    5. After each itration the element is added to the "newstr" variable.
//    6. When we will reach at index 0 we will out from the loop.
//    7. Then we return the variable newStr.
//    8. After that we call the reverseFunction() and and an argument to it which is a variable that contain the string.

function reverseString(str) {
  let newstr = "";
  for (let i = str.length; i >= 0; i--) {
    newstr = newstr + str[i];
  }
  return newstr;
}
let Str = "helloWorld";
console.log(reverseString(Str));
